import {Form,Button, Container, Card} from 'react-bootstrap';
export default function NuevoSupForm(){
return(
 <>
 
 <Container className='text-center p-5'>
    <Card bg="light" border="warning">
    <Card.Header className="text-center">NUEVO SUPERVISOR</Card.Header>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" placeholder="Ingresar Usuario" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar Contraseña" />
            </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" placeholder="Ingresar Nombre" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rut</Form.Label>
          <Form.Control type="email" placeholder="Ingresar Rut" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresar Email" />
          <Form.Text className="text-muted">
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono </Form.Label>
          <Form.Control type="email" placeholder="Ingresar Número Telefónico " />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        </Form.Group>
        <div className="text-center" >
        <Button variant="warning" type="submit">
          Crear Supervisor
        </Button>
        </div>
        </Form>
  </Card>    
</Container>
</>

  )
}