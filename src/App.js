
import Header from './Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Generos from './Generos'

import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'




function App() {
  
    
  
   
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route path='/' exact component={Home}/>    
            <Route path='/generos' exact component={Generos}/>
            <Route path='/generos/novo' exact component={NovoGenero}/>
            <Route path='/generos/:id' exact component={EditarGenero}/>
            <Route path='/series' exact component={Series}/>
            <Route path='/series/novo' exact component={NovaSerie}/>
            <Route path='/series/:id' exact component={InfoSerie}/>
        </Switch>
      </div>
    </Router>
  )
}

// se uma função é colocada no onClick  com (), elas é chamada na hora que a página renderizada, sem , somente no clique


export default App;
