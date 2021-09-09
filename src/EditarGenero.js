import { useState, useEffect} from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";

const EditarGenero = ({match}) =>{
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)


    useEffect(()=>{
      axios.get(`/api/genres/${match.params.id}`).then(res => setName(res.data.name))
    }, [match.params.id])

    const onChange = evt =>{
        setName(evt.target.value)
       
    }

    const update = () => {
        axios.put(`/api/genres/${match.params.id}`, {
          name : name
        })
        .then((res) => setSuccess(true))
     //   document.getElementById('input').value = ''
    }
    if(success){
      return  <Redirect to='/generos'/>   
    }
    return(
        <div className='container'>
            <h1>Editar Gênero </h1> 
            <form action="">
                <div className=' form form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type="text" id='input' className='form-control' value={name} onChange={ onChange} placeholder='Nome do gênero' />
                </div>
                <button onClick={update} type='button' className='btn btn-primary' style={{marginTop : '10px'}}>Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero