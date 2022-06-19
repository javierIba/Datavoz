import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './style/style.css'
export default function OpcionesHome() {
    const navigate = useNavigate()
    
    return (<>
        <Container>
            <Row>
                <Col >
                    <Button onClick={()=>{navigate('/NuevaEncuesta')}}>crear nueva pauta de encuesta</Button>
                </Col>
                <Col>
                    <Button onClick={()=>{navigate('/NuevoSup')}}>Ingresar nuevo supervisor</Button>
                </Col>
                <Col>
                    <Button>Visualizar reporte</Button>
                </Col>
            </Row>
        </Container>
    </>
    )
}