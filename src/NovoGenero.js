import { useState } from "react";
import axios from 'axios'

const NovoGenero = () =>{
    const [name, setName] = useState('')

    const onChange = evt =>{
        setName(evt.target.value)
       
    }

    const save = () => {
        axios.post('/api/genres' , {
           name
        }).then(res => console.log(res))
     //   document.getElementById('input').value = ''
    }
    return(
        <div className='container'>
            <h1>Novo Gênero </h1> 
            <form action="">
                <div className=' form form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type="text" id='input' className='form-control' value={name} onChange={ onChange} placeholder='Nome do gênero' />
                </div>
                <button onClick={save} type='button' className='btn btn-primary' style={{marginTop : '10px'}}>Salvar</button>
            </form>
        </div>
    )
}

export default NovoGenero