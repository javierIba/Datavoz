

import FormularioInicioSesion from './FormularioInicioSesion'
import { Container, Row, Col } from 'react-bootstrap'
const Login = () => {
    return (<>
        <Container>
            <Row>
                <Col>
                    <FormularioInicioSesion></FormularioInicioSesion>
                </Col>
            </Row>
        </Container>

    </>)
}

export default Login;