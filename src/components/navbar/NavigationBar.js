import { observadorLogin } from '../../helper/kcio'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export default function NavigationBar() {
  const navigate = useNavigate()

  const cerrarSesion = () => {
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    navigate('/')
  }


  return (<>

    <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">

      <Container>
        <Navbar.Brand onClick={() => navigate('/home')} >Datavoz</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse>

          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/home')} >Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate('/encuestas')}>Ver Estudios</Nav.Link>
            

          </Nav>
          <Button variant="warning" onClick={() => navigate('/NuevoSup')} >Registrar nuevo supervisor</Button>
          <Nav.Link onClick={cerrarSesion} >Cerrar Sesión</Nav.Link>


        </Navbar.Collapse>

      </Container>

    </Navbar>
  </>

  )
}