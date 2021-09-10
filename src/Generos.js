import axios from 'axios'

import { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

const Generos = () =>{
  const[data, setData] = useState([])
 // const [atualizar, setAtualizar] = useState(false) // se colocarmos uma variavel no array do useEffect ele se torna dependente dela, logo quando a varaivel  for alterada o useEffect é executado
  useEffect(() => {
    axios.get('/api/genres').then(resp => {
   setData(resp.data.data) 
    })
  }, []) 

  const deleteGenero = (id) =>{
     axios.delete(`/api/genres/${id}`).then(res =>{
       console.log(res)
     //  setAtualizar(!atualizar)
        const filtro = data.filter( genero => genero.id !== id)
        setData(filtro)
     })
  }

  const renderizaLinha = (record) =>{

      
        return(
          <tr key={record.id}>
            <th scope='row'>{record.id}</th>
            <td>{record.name}</td>
            <td><button className="btn btn-danger" onClick={() =>deleteGenero(record.id)}>Excluir</button>
            <button className="btn btn-warning" style={{marginLeft : '8px'}}><Link style={{ textDecoration : 'none', color : 'black'  }} to={`/generos/${record.id}`}>Editar</Link></button>
            </td>
            
          </tr>
        )
   
  }  

        if(data.length === 0 || !data){
          return(
            <div className='container'>
               <h1>Gêneros</h1>
               <div>
                <button className='btn btn-primary' style ={{marginBottom : '8px'}}>
                  <Link to='/generos/novo' style={{textDecoration : 'none', color : 'white'}}>Novo Gênero</Link>
                </button>
               </div>
               <div className='alert alert-warning' role='alert'>
                  Você não possui gêneros criados
               </div>
            </div>
          )
        }
        

       

    return(
      <div className='container'>

        <h1>Gêneros</h1>
        <div>
          <button className='btn btn-primary' style ={{marginBottom : '8px'}}>
            <Link to='/generos/novo' style={{textDecoration : 'none', color : 'white'}}>Novo Gênero</Link>
          </button>
        </div>
        <table className='table table-dark' >
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>NOME</th>
              <th scope='col'>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
          
         {data.length > 0 && data.map(renderizaLinha)}
         
          </tbody>
        </table>
        

      </div>
    )
  }
  export default Generos