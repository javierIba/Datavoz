import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Nav from "../navbar/NavigationBar"
import { Container, Row, Col, Card, ListGroup, Form, Button, Modal } from "react-bootstrap";

export default function EncuestasParams() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let dataApiListaEstudios = await fetch(`http://localhost:4000/api/estudio/listarEstudios/${params.id}`);
            setData(await dataApiListaEstudios.json());
        }
        fetchData();
    }, [])
    return (<>
        <Nav />
        <Container>
            <Row>
                <Col>
                    <Card bg="light" border="warning" >
                        <Card.Header className="text-center">Información del Estudio</Card.Header>
                        {data.map(element => (
                            <ListGroup variant="flush">
                                <ListGroup.Item>Codigo del estudio: {element.codEstudio}</ListGroup.Item>
                                <ListGroup.Item>Nombre del estudio: {element.nombreEstudio}</ListGroup.Item>
                                <ListGroup.Item>Fecha de inicio: {element.fechaInicio}</ListGroup.Item>
                                <ListGroup.Item>Fecha de termino: {element.fechaTermino}</ListGroup.Item>
                                <ListGroup.Item>Porcentaje teorico de supervisión: {element.porcentajeTeoricoEstudio}%</ListGroup.Item>
                                <ListGroup.Item>Metodo: {element.metodo}</ListGroup.Item>
                                <ListGroup.Item>Duración promedio de la encuesta: {element.duracionPromedioEncuesta}</ListGroup.Item>
                                <ListGroup.Item>Duración minima: {element.duracionMinima}</ListGroup.Item>
                                <ListGroup.Item>Muestra total: {element.muestraTotal}</ListGroup.Item>
                                <ListGroup.Item>{(!element.baseDeDatos) ? (<p>Importar datos: <input type="file" onChange={() => { handleShow() }} /></p>) : '¿Base de datos importada?: Si'}</ListGroup.Item>
                                <Container>
                                    <Row>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input1" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input2" />
                                            </Form.Group>
                                        </Col>

                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input3" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input4" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input5" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input6" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input7" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input8" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input9" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" >
                                                <Form.Label>Ingrese pregunta</Form.Label>
                                                <Form.Control type="text" placeholder="pregunta" name="input10" />
                                            </Form.Group>
                                        </Col>
                                        <Row>
                                            <Col>
                                                <Button variant="warning" onClick={() => navigate("/encuestas")}>Guardar</Button>                                        </Col>
                                        </Row>
                                    </Row>
                                </Container>



                            </ListGroup>



                        ))}
                    </Card>
                </Col>
            </Row>
        </Container>


        <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>Subido exitosamente</Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    cerrar
                </Button> */}
                <Button variant="primary" onClick={() => navigate('/encuestas')}>
                    cerrar
                </Button>
            </Modal.Footer>
        </Modal>

    </>)
}