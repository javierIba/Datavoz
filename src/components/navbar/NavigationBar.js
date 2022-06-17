import {observadorLogin} from '../../helper/kcio'
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function NavigationBar(){
    const navigate = useNavigate()
    return( <>
  
  <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
    
  <Container>
  <Navbar.Brand onClick={()=>navigate('/home')} >Datavoz</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
            
              <Nav className="me-auto">
                <Nav.Link onClick={()=>navigate('/home')} >Inicio</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                
              </Nav>
              <Button  variant="warning" onClick={()=>navigate('/NuevoSup')} >Agregar nuevo supervisor</Button>
              <Nav.Link onClick={()=>navigate('/')} >Cerrar Sesión</Nav.Link>
                
        
        </Navbar.Collapse>
          
  </Container>
    
   </Navbar>
    </>

    )
}