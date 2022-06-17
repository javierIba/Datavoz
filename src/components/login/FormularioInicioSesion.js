import { Form, Button, Container, Card } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const FormularioInicioSesion = (props) => {
    const [dataFormulario, setDataFormulario] = useState({
        usuario: '',
        pass: ''
    });
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        switch (e.target.name) {
            case 'usuario':
                setDataFormulario({ ...dataFormulario, usuario: e.target.value })
                break;
            case 'pass':
                setDataFormulario(({ ...dataFormulario, pass: e.target.value }))
                break;
            default:
                break;
        }
    }
    

    const login = async () => {
        let peticionLogin  = await fetch("http://localhost:4000/api/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataFormulario)
            });
        let response = await peticionLogin.json();
        let statusCode = peticionLogin.status;
        if(statusCode==200){
            document.cookie = `token=${response.token}; path=/;samesite=strict`
            navigate('/home') 
        }
        setMessage(response.message)
    }

    return (
    <Container className='text-center p-5'>
        <Card bg="light" border="warning" >
        <Card.Header className="text-center">Iniciar Sesión</Card.Header>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="usuario" placeholder="Por favor ingrese su nombre de usuario" onChange={(e) => handleOnChange(e)} />
                    <Form.Text className="text-muted">
                        {message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="pass" onChange={(e) => handleOnChange(e)} />
                </Form.Group>

                <Button variant="warning" type="button" onClick={login}>
                    Enviar
                </Button>
            </Form>
        </Card>    
    </Container>
    )
}

export default FormularioInicioSesion