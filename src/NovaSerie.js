import { useState } from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";

const NovaSerie = () =>{
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = evt =>{
        setName(evt.target.value)
       
    }

    const save = () => {
        axios.post('/api/series' , {
           name 
        })
        .then((res) => setSuccess(true))
     //   document.getElementById('input').value = ''
    }
    if(success){
      return  <Redirect to='/series'/>   
    }
    return(
        <div className='container'>
            <h1>Nova Série </h1> 
            <form action="">
                <div className=' form form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type="text" id='input' className='form-control' value={name} onChange={ onChange} placeholder='Nome da série' />
                </div>
                <button onClick={save} type='button' className='btn btn-primary' style={{marginTop : '10px'}}>Salvar</button>
            </form>
        </div>
    )
}

export default NovaSerie