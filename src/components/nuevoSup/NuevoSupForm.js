import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NuevoSupForm() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [dataFormulario, setDataFormulario] = useState({
    usuario: '',
    pass: '',
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    tipo: 2
  })
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    (name === 'usuario') ? setDataFormulario({ ...dataFormulario, usuario: value }) :
      (name === 'pass') ? setDataFormulario({ ...dataFormulario, pass: value }) :
        (name === 'nombre') ? setDataFormulario({ ...dataFormulario, nombre: value }) :
          (name === 'rut') ? setDataFormulario({ ...dataFormulario, rut: value }) :
            (name === 'email') ? setDataFormulario({ ...dataFormulario, email: value }) :
              (name === 'telefono') ? setDataFormulario({ ...dataFormulario, telefono: value }) :
                console.log("no valido");

  }
  const handleOnClick = async () => {
    let cookies = document.cookie.split(';');
    let token = cookies.find(cookie => cookie.includes("token"))
  
    if (!token) {
      navigate('/')
    } else {
      token = token.replace('token=', '');
      let peticionLogin = await fetch('http://localhost:4000/api/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(dataFormulario)
      });
      let response = await peticionLogin.json();

      setMessage(response)
    }

  }

  return (
    <>

      <Container className='text-center p-5'>
        <Card bg="light" border="warning">
          <Card.Header className="text-center">NUEVO SUPERVISOR</Card.Header>

          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Usuario" name='usuario' onChange={(e) => handleOnChange(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3"  >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar Contraseña" name='pass' onChange={(e) => handleOnChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3"  >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Nombre" name='nombre' onChange={(e) => handleOnChange(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3"   >
              <Form.Label>Rut</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Rut" name='rut' onChange={(e) => handleOnChange(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3"    >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresar Email" name='email' onChange={(e) => handleOnChange(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
              <Form.Group className="mb-3"   >
                <Form.Label>Teléfono </Form.Label>
                <Form.Control type="text" placeholder="Ingresar Número Telefónico " name='telefono' onChange={(e) => handleOnChange(e)} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
            </Form.Group>
            <h3>{message}</h3>

            <div className="text-center" >
              <Button variant="warning" type="button" onClick={handleOnClick}>
                Crear Supervisor
              </Button>

            </div>
          </Form>
        </Card>
      </Container>
    </>

  )
}