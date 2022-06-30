import { Container, Row, Col, Button,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './style/style.css'
export default function OpcionesHome() {
    const navigate = useNavigate()
    
    return (<>
    
        <Container className="p-5">
            <Row>
                <Col md={12} sm={12} lg={4} className="p-5" >
                    <Card>
                       <Button variant="warning" onClick={()=>{navigate('/NuevaEncuesta')}}>Crear nuevo estudio</Button>
                    </Card>
                </Col>
                <Col md={12} sm={12} lg={4} className="p-5">
                    <Card>
                        <Button variant="warning" onClick={()=>{navigate('/NuevoSup')}}>Ingresar nuevo supervisor</Button>
                    </Card>
                </Col>
                <Col md={12} sm={12} lg={4} className="p-5">
                    <Card>
                        <Button variant="warning">Visualizar reporte</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
       
    </>
    )
}