import { useState, useEffect } from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { Badge } from "reactstrap";

const InfoSerie = ({match}) =>{
   
    const [form, setForm] = useState({})
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({})
    const [mode, setMode] = useState(false)
    const [genres, setGenres] = useState([])
 
    

    useEffect(() => {
        axios.get(`/api/series/${match.params.id}`)
        .then(resp => {
            setData(resp.data) 
            setForm(resp.data)
        })

        
    },[match.params.id])

     useEffect(()=>{
        axios.get('/api/genres/')
        .then(res => setGenres(res.data.data))
     }, [])

    const masterHeader = {
        height : '50vh',
        minHeight : '500px',
        backgroundImage : `url('${data.background}')` ,
        backgroundSize : 'cover'
    }

   //console.log(data)


    const onChange = field => evt =>{
        setForm({ ...form, [field] : evt.target.value })
       
    }

    const seleciona = value => (evt) =>{
        evt.target.checked = true
        setForm({
            ...form,
            status : value
        })
    }

 

    const save = () => {
        axios.put('/api/series/' + match.params.id, form)
        .then((res) => setSuccess(true))
     //   document.getElementById('input').value = ''
    }

    const changeEditar = () => {
         
         setMode(!mode) 
         
      //   console.log(mode)
       
  
        
              
    }
 

    if(success){
     return  <Redirect to='/series'/>   
    }

    return(
        <div>
        <header style = {masterHeader}>
           <div className='h-100' style = {{background : 'rgba(0,0,0,0.7)'}}>
             <div className='h-100 container'>
                <div className='row h-100  align-items-center'>
                    <div className='col-3'>
                        <img className='img-fluid img-thumbnail'   src={data.poster} alt="" />
                    </div>
                    <div className='col-8'>
                        <h1 className='font-weight-light text-white'>{data.name}</h1>
                        <div className='lead text-white'>
                        {data.status === 'PARA_ASSISTIR' ? <Badge color='warning'>Para assistir</Badge> : <Badge color='success'>Assistido</Badge>  }
                       
                        
                           Gênero : {data.genre_name}
                        </div>
                    </div>
                </div>
              </div>
           </div>
        </header>
        <div>
            <button onClick={changeEditar}
             type='button' 
            className={mode ? 'btn btn-danger' : 'btn btn-primary'} 
            style={{marginTop : '10px', marginLeft : '10px'}}>
            {mode ? 'Cancelar Edição' : 'Editar'}
            </button>
     </div>
          
        {
            mode === true  &&
        
            <div className='container'>
            
                <h1>Editar Série </h1> 
                
                
               
                <form action="">
                    <div className='form form-group'>
                        <label htmlFor='name'>Nome</label>
                        <input type="text" id='input' className='form-control' value={form.name} onChange={  onChange('name')} placeholder='Nome da série' />
                    </div>
                    <div className='form form-group'>
                        <label htmlFor='name'>Comentários</label>
                        <input type="text" id='input' className='form-control' value={form.comments} onChange={onChange('comments')} placeholder='Comentário' onChange={onChange('comments')}/>
                    </div>
                    <div className='form form-group'>
                         <select className= 'form-control' onChange={onChange('genre_id')}   >

                            {genres.map(genre =>{
                                
                                return(      
                                    <option key={genre.id} value={genre.id} selected={genre.id === `${form.genre_id}`} >{genre.name}</option>                                    
                                    )
                                    })}
                                    
                         </select>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input" type='radio' name='status' value='PARA_ASSISTIR'  onClick={ seleciona('PARA_ASSISTIR')} />
                        <label className='form-check-label' htmlFor="paraAssistir">Para assistir</label>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input" type='radio' name='status' value='ASSISTIDO'  onClick={ seleciona('ASSISTIDO')}/>
                        <label className='form-check-label' htmlFor="assistido">Assistido</label>
                    </div>
                    <button onClick={save} type='button' className='btn btn-primary' style={{marginTop : '10px'}}>Salvar</button>
                </form>
            </div>
        }
        
        </div>
    )
}

export default InfoSerie