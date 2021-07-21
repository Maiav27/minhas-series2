import axios from 'axios'

import { useEffect, useState } from 'react'

const Generos = () =>{
  const[data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/genres').then(resp => {
   setData(resp.data.data) 
    })
  }, [])

  const renderizaLinha = (record) =>{

      
        return(
          <tr key={record.id}>
            <th scope='row'>{record.id}</th>
            <td>{record.name}</td>
            <td><button>+</button></td>
          </tr>
        )
   
  }  

        if(data.length === 0 || !data){
          return(
            <div className='container'>
               <h1>Gêneros</h1>
               <div className='alert alert-warning' role='alert'>
                  Você não possui gêneros criados
               </div>
            </div>
          )
        }
        console.log(data)

       

    return(
      <div className='container'>

        <h1>Gêneros</h1>
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