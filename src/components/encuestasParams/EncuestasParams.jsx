import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Nav from "../navbar/NavigationBar"
import { Container, Row, Col, Card, ListGroup, Form, Button, Modal } from "react-bootstrap";

export default function EncuestasParams() {
    const [show, setShow] = useState(false);
    const [controlFile, setControlFile] = useState({
        file: null,
        message: '',
        isCsv: false
    })
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
    function handleChangeFile(e) {
        let file = e.target.files[0]
        let csv = file.name.slice(-3);
        if (csv === 'csv') {
            setControlFile({ ...controlFile, isCsv: true, file:file })
        }
    }
    async function handleOnClickSubirData() {
       
        const formData = new FormData();
        formData.append('data', controlFile.file)
        console.log(formData)
        const response = await fetch('http://localhost:4000/api/estudio/subirCvs', {
            method: 'POST',
            body: formData
        });
    }
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
                                <ListGroup.Item>{(!element.baseDeDatos) ? (<><p>Importar datos: <input type="file" onChange={(e) => { handleChangeFile(e) }} /></p> <p>Debe seleccionar un archivo csv</p><p><Button onClick={handleOnClickSubirData} disabled={!controlFile.isCsv}>Subir datos</Button></p></>) : '¿Base de datos importada?: Si'}</ListGroup.Item>
                                <ListGroup.Item>{(!element.preguntas) ?
                                    (<>No se encuetra una pauta de encuesta creada    <Button onClick={() => navigate(`/form/${element.codEstudio}`)}> Crear pauta de encuesta</Button></>) :
                                    <>Pauta asignada</>}
                                </ListGroup.Item>

                            </ListGroup>
                        ))}
                    </Card>
                </Col>
            </Row>
        </Container>




    </>)
}