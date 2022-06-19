import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NuevaEncuestaForm() {
    const navigate = useNavigate()
    const [dataFormulario, setDataFormulario] = useState({
        codEstudio: '',
        nombreEstudio: '',
        fechaInicio: '',
        fechaTermino: '',
        porcentajeTeoricoEstudio: '',
        tipoSupervision: '',
        metodo: '',
        duracionPromedioEncuesta: '',
        duracionMinima: '',
        muestraTotal: ''
    });
    const [message, setMessage] = useState(null)
    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        (name === 'codEstudio') ? setDataFormulario({ ...dataFormulario, codEstudio: value }) :
            (name === 'nombreEstudio') ? setDataFormulario({ ...dataFormulario, nombreEstudio: value }) :
                (name === 'fechaInicio') ? setDataFormulario({ ...dataFormulario, fechaInicio: value }) :
                    (name === 'fechaTermino') ? setDataFormulario({ ...dataFormulario, fechaTermino: value }) :
                        (name === 'porcentajeTeoricoEstudio') ? setDataFormulario({ ...dataFormulario, porcentajeTeoricoEstudio: value }) :
                            (name === 'tipoSupervision') ? setDataFormulario({ ...dataFormulario, tipoSupervision: value }) :
                                (name === 'metodo') ? setDataFormulario({ ...dataFormulario, metodo: value }) :
                                    (name === 'duracionPromedioEncuesta') ? setDataFormulario({ ...dataFormulario, duracionPromedioEncuesta: value }) :
                                        (name === 'duracionMinima') ? setDataFormulario({ ...dataFormulario, duracionMinima: value }) :
                                            (name === 'muestraTotal') ? setDataFormulario({ ...dataFormulario, muestraTotal: value }) :
                                                console.log("no valido");
    }
    const handleOnClick = async () => {
        let cookies = document.cookie.split(';');
        let token = cookies.find(cookie => cookie.includes("token"))
        if (!token) {
            navigate('/')
        } else {
            token = token.replace('token=', '');
            let peticionCrearNuevaEncuesta = await fetch('http://localhost:4000/api/estudio/agregarEstudio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(dataFormulario)
            });
            let response = await peticionCrearNuevaEncuesta.json();
            let statusCode = peticionCrearNuevaEncuesta.status;
           
            setMessage(response.message)
            if (statusCode === 201  ) {
                navigate('/encuestas')
            }


        }
    }
    return (<>

        <Container className='text-center p-5'>
            <Card bg="light" border="warning" >
                <Card.Header className="text-center">Información del estudio</Card.Header>

                <Form>
                    <Row>
                        <Col md="6">
                            <Form.Group className="mb-3" >
                                <Form.Label>Codigo del estudio</Form.Label>
                                <Form.Control type="text" name="codEstudio" placeholder="Por favor ingrese el codigo del estudio" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombre del estudio</Form.Label>
                                <Form.Control type="text" name="nombreEstudio" placeholder="Por favor ingrese el nombre del estudio" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Fecha de inicio del estudio</Form.Label>
                                <Form.Control type="date" name="fechaInicio" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Fecha de termino del estudio</Form.Label>
                                <Form.Control type="date" name="fechaTermino" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Porcentaje de supervisión teorico</Form.Label>
                                <Form.Control type="number" min="0" max="100" name="porcentajeTeoricoEstudio" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className="mb-3" >
                                <Form.Label>Tipo de supervisión</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => handleOnChange(e)} name="tipoSupervision">
                                    <option >Seleccione un tipo de supervisión</option>
                                    <option value="Telef_recontacto">Telef_recontacto</option>
                                    <option value="Escucha">Escucha</option>
                                    <option value="Presencial_recontacto">Presencial_recontacto</option>
                                    <option value="Insitu">Insitu</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Metodo</Form.Label>
                                <Form.Control type="text" name="metodo" placeholder="Por favor ingrese el metodo" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Duración promedio encuesta</Form.Label>
                                <Form.Control type="time" name="duracionPromedioEncuesta" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Duración minima encuesta</Form.Label>
                                <Form.Control type="time" name="duracionMinima" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Muestra total</Form.Label>
                                <Form.Control type="number" name="muestraTotal" onChange={(e) => handleOnChange(e)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Row>
                            <h3>  {message}</h3>
                            <Col>
                                <Button variant="warning" type="button" onClick={handleOnClick}>
                                    Guardar
                                </Button>
                            </Col>
                        </Row>

                    </Row>
                </Form>

            </Card>
        </Container>
    </>)
}