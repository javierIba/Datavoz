import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Nav from "../navbar/NavigationBar"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export default function EncuestasParams() {
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
                                <ListGroup.Item>{(!element.baseDeDatos)?(<p>Importar datos: <input type="file"/></p>):'¿Base de datos importada?: Si'}</ListGroup.Item>




                            </ListGroup>
                        ))}
                    </Card>
                </Col>
            </Row>
        </Container>
    </>)
}