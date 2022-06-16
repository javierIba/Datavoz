import {Form,Button} from 'react-bootstrap';
export default function NuevoSupForm(){
return(
 <>
 <Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Usuario</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
   </Form.Text>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Nombre</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
   </Form.Text>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Rut</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
   </Form.Text>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
   </Form.Text>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Teléfono </Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className="text-muted">
   </Form.Text>
 </Form.Group>
 </Form.Group>

 <Button variant="primary" type="submit">
   Crear Supervisor
 </Button>
</Form></>
  )
}