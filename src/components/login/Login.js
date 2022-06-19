

import FormularioInicioSesion from './FormularioInicioSesion'
import { Container, Row, Col } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [isToken,setIsToken] = useState(false)
    const navigate = useNavigate()
    let cookies = document.cookie.split(';');
    let token = cookies.find(cookie => cookie.includes("token"))
    useEffect(() => {
        if(token){
            setIsToken(true)
        }else{
            setIsToken(false)
        }
      });
   
        return (<>
        {(!token)? (<Container>
                <Row>
                    <Col>
                        <FormularioInicioSesion></FormularioInicioSesion>
                    </Col>
                </Row>
            </Container>):navigate('/home')
            }
           

        </>)
    }

    export default Login;