import {observadorLogin} from '../../helper/kcio'
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function NavigationBar(){
    const navigate = useNavigate()
    return( <>
             <Navbar bg="dark" variant="dark">
   <Container>
   <Navbar.Brand href="#home">Datavoz</Navbar.Brand>
     <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">Features</Nav.Link>
       <Nav.Link href="#pricing">Pricing</Nav.Link>
     </Nav>
     <Button variant="secondary" onClick={()=>navigate('/NuevoSup')} >Agregar nuevo supervisor</Button>


    </Container>
   </Navbar>
    </>

    )
}