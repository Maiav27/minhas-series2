import axios from 'axios'

import { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'

const Series = () =>{
  const[data, setData] = useState([])
 // const [atualizar, setAtualizar] = useState(false) // se colocarmos uma variavel no array do useEffect ele se torna dependente dela, logo quando a varaivel  for alterada o useEffect é executado
  useEffect(() => {
    axios.get('/api/series').then(resp => {
   setData(resp.data.data) 
    })

  }, []) // aqui  poderia ser colocado a váriavel atualizar assim, todas as que o valor dela fosse alterado, nesse caso, a lista de séries  seria atualizada, caso alguma série fpsse excluida


  const deleteSeries = (id) =>{
     axios.delete(`/api/series/${id}`).then(res =>{
       console.log(res)
     //  setAtualizar(!atualizar)
        const filtro = data.filter( serie => serie.id !== id) // aqui sera retornado todas as séries, exceto aqui tem o  id  igual o id passado pra função
        setData(filtro)
     })
  }

  const renderizaLinha = (record) =>{

      
        return(
          <tr key={record.id}>
            <th scope='row'>{record.id}</th>
            <td>{record.name}</td>
            <td><button className="btn btn-danger" onClick={() =>deleteSeries(record.id)}>Excluir</button>
            <button className="btn btn-warning" style={{marginLeft : '8px'}}><Link style={{ textDecoration : 'none', color : 'black'  }} to={`/series/${record.id}`}>Info Série</Link></button>
            </td>
            
          </tr>
        )
   
  }  

        if(data.length === 0 || !data){
          return(
            <div className='container'>
               <h1>Séries</h1>
               <div>
                  <button className='btn btn-primary' style ={{marginBottom : '8px'}}>
                    <Link to='/series/novo' style={{textDecoration : 'none', color : 'white'}}>Nova Série</Link>
                  </button>
               </div>
               <div className='alert alert-warning' role='alert'>
                  Você não possui séries criadas
               </div>
            </div>
          )
        }
        

       

    return(
      <div className='container'>

        <h1>Séries</h1>
        <div>
          <button className='btn btn-primary' style ={{marginBottom : '8px'}}>
            <Link to='/series/novo' style={{textDecoration : 'none', color : 'white'}}>Nova Série</Link>
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
  export default Series