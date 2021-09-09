import { useState, useEffect } from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { Badge } from "reactstrap";

const InfoSerie = ({match}) =>{
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({})
    const [mode, setMode] = useState(false)
    const [editar, setEditar] = useState('Editar')
    

    useEffect(() => {
        axios.get(`/api/series/${match.params.id}`)
        .then(resp => {setData(resp.data) 
        console.log(resp)})


    },[match.params.id])

    const masterHeader = {
        height : '50vh',
        minHeight : '500px',
        backgroundImage : `url('${data.background}')` ,
        backgroundSize : 'cover'
    }

   //console.log(data)


    const onChange = evt =>{
        setData({ ...data, name : evt.target.value })
       
    }

    const save = () => {
        axios.post('/api/series' , {
           name 
        })
        .then((res) => setSuccess(false))
     //   document.getElementById('input').value = ''
    }

    const changeEditar = () => {
         
         setMode(!mode) 
         

         if(mode === false){
            setEditar('Cancelar Inscrição') 
         }else{
            setEditar('Editar')  
         }
  
        
              
    }
  //console.log(mode)

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
                        <Badge color='warning'>Para Assistir</Badge>
                        <Badge  color='success'>Teste</Badge>
                           Gênero : {data.genre_name}
                        </div>
                    </div>
                </div>
              </div>
           </div>
        </header>
        <div>
            <button onClick={changeEditar}>{editar}</button>
        </div>
        {
            mode === true  &&
        
            <div className='container'>
            
                <h1>Nova Série </h1> 
                <pre>{JSON.stringify(data)}</pre>
                <form action="">
                    <div className=' form form-group'>
                        <label htmlFor='name'>Nome</label>
                        <input type="text" id='input' className='form-control' value={data.name} onChange={onChange} placeholder='Nome da série' />
                    </div>
                    <button onClick={save} type='button' className='btn btn-primary' style={{marginTop : '10px'}}>Salvar</button>
                </form>
            </div>
        }
        
        </div>
    )
}

export default InfoSerie