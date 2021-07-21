import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler} from 'reactstrap'
import  {useState} from 'react'
import {Link} from 'react-router-dom'
const Header = () =>{

    const [ open, setOpen] = useState(false)
    const toggle = () =>{
      setOpen(!open)
    }
  
    return(
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'> Minhas Séries  </NavbarBrand>
        <NavbarToggler onClick ={toggle}/>
  
        <Collapse isOpen={true} navbar>
            <Nav className='ml-auto' navbar>
            <NavItem>
                <NavLink tag={Link} to='/generos'> 
                  Gêneros 
                </NavLink>
                
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to='/novogenero'> 
                  Novo Gênero
                </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
     </Navbar>
    )
  }
  export default Header
  