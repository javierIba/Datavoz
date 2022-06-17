import {observadorLogin} from '../../helper/kcio'
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function NavigationBar(){
    const navigate = useNavigate()
    return( <>
  
  <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
    
  <Container>
  <Navbar.Brand href="#home">Datavoz</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>
            
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Button variant="warning" onClick={()=>navigate('/NuevoSup')} >Agregar nuevo supervisor</Button>
                
        
        </Navbar.Collapse>
          
  </Container>
    
   </Navbar>
    </>

    )
}