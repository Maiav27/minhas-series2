
import Header from './Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Generos from './Generos'
import {useEffect, useState} from 'react'
import axios from 'axios'






function App() {
   const [data, setData] = useState({})
   useEffect(() =>{
     axios.get('/api').then(res => {
       setData(res.data)
     })
    
   }, [])
  return (
    <Router>
      <div className="App">

      <Header/>
      <Route path='/' exact component={Home}/>    
      <Route path='/generos' exact component={Generos}/>

      </div>
    </Router>
  );
}

export default App;
