import Nav from "../navbar/NavigationBar"
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Encuestas() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchData() {
            let dataApiListaEstudios = await fetch('http://localhost:4000/api/estudio/listarEstudios');
            setData(await dataApiListaEstudios.json())
        }
        fetchData()
    }, [])

    return (<>
        <Nav />
        <Container className='text-center p-5'>
            <Row>
                {
                    data.map(element =>
                    (
                        <Col>

                            <Card style={{ width: '18rem', }} bg="light" border="warning">
                                <Card.Body onClick={() => navigate(`/encuestas/${element.codEstudio}`)}>
                                    <Card.Title>Codigo de estudio: {element.codEstudio}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Nombre del estudio: {element.codEstudio}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </>)
}