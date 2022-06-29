import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import NavigationBar from "../navbar/NavigationBar"
let dataFormulario = {}
export default function FormularioDinamico() {

    // const [data, setData] = useState([])
    const [formDinamico, setFormDinamico] = useState({
        aMostrar: '',
        unica: <>
            <Form.Label >Seleccione el valor de la pregunta</Form.Label>
            <Form.Select onChange={(e) => handleChangeFormDinamicoUnica(e)} aria-label="Default select example">
                <option >Seleccione el valor de la pregunta</option>
                <option value="numerica">Numerica</option>
                <option value="texto">Texto</option>
            </Form.Select>
        </>,
        numerica:
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="minimo">
                        <Form.Label>Minimo</Form.Label>
                        <Form.Control type="number" name="minimo" onChange={(e) => guardarDataFormulario(e, 'number')} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="maximo">
                        <Form.Label>Máximo</Form.Label>
                        <Form.Control type="number" name="maximo" onChange={(e) => guardarDataFormulario(e, 'number')} />
                    </Form.Group>
                </Col>
            </Row>,
        texto:
            <Form.Group className="mb-3" controlId="cantPreguntasTexto">
                <Form.Label>Cantidad de preguntas</Form.Label>
                <Form.Control onChange={(e) => { handleChangeFormDinamicoUnicaCantidadRespuestasTexto(e) }} type="number" name="cantidadPreguntas" />
            </Form.Group>,
        textoPreguntas: [],

        multiple:
            <Form.Group className="mb-3" controlId="catPreguntasMultiple">
                <Form.Label>Cantidad de preguntas</Form.Label>
                <Form.Control onChange={(e) => { handleChangeFormDinamicoUnicaCantidadRespuestasMultiple(e) }} type="number" name="cantidadPreguntas" />
            </Form.Group>,
        multiplePreguntas: [],
        data: []

    });




    function handleChangeFormDinamicoUnicaCantidadRespuestasMultiple(e) {
        let value = e.target.value;
        let preguntas = [];
        let nombreRespuesta = "";
        for (let i = 0; i < value; i++) {
            nombreRespuesta = `respuesta${i + 1}`
            preguntas.push(
                <Form.Group className="mb-3" controlId={nombreRespuesta}>
                    <Form.Label>Ingrese la respuesta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la pregunta" name={nombreRespuesta} onChange={(e) => { guardarDataFormulario(e, 'text') }} />
                </Form.Group>
            )
        }
        let form = <>
            {formDinamico.multiple}
            {formDinamico.multiplePreguntas}
            {preguntas.map(pregunta => pregunta)}
        </>
        setFormDinamico({ ...formDinamico, textoPreguntas: preguntas, aMostrar: form });
    }
    function handleChangeFormDinamicoUnicaCantidadRespuestasTexto(e) {
        let value = e.target.value;
        let preguntas = [];
        let nombreRespuesta = "";
        for (let i = 0; i < value; i++) {
            nombreRespuesta = `pregunta${i + 1}`
            preguntas.push(
                <Form.Group className="mb-3" controlId={nombreRespuesta}>
                    <Form.Label>Ingrese la respuesta</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la respuesta" name={nombreRespuesta} onChange={(e) => { guardarDataFormulario(e, 'text') }} />
                </Form.Group>
            )

        }

        let form = <>
            {formDinamico.unica}
            {formDinamico.texto}
            {preguntas.map(pregunta => pregunta)}
        </>
        setFormDinamico({ ...formDinamico, textoPreguntas: preguntas, aMostrar: form });
    }

    function handleChangeFormDinamicoUnica(e) {
        let value = e.target.value;
        let form = (value === 'numerica') ?
            <div>
                {formDinamico.unica}
                {formDinamico.numerica}
            </div> :
            (value === 'texto') ?
                <div>
                    {formDinamico.unica}
                    {formDinamico.texto}
                </div> :
                '';
        setFormDinamico({ ...formDinamico, aMostrar: form });
    }
    function handleChangeForm(e) {
        let value = e.target.value;
        let form = (value === 'unica') ?
            <div>
                {formDinamico.unica}
            </div> :
            (value === 'multiple') ?
                <div>
                    {formDinamico.multiple}
                </div> :
                '';
        if (value === 'dicotomica') {
            dataFormulario = { ...dataFormulario, tipo: 'dicotomica' };
        } else if (value === 'fecha') {
            dataFormulario = { ...dataFormulario, tipo: 'date' };
        }
        setFormDinamico({ ...formDinamico, aMostrar: form });
    }

    function guardarDatos() {
        let x = formDinamico.data;
        x.push(dataFormulario)
        console.log(x)
        dataFormulario = {};
        setFormDinamico({ ...formDinamico, data: x, aMostrar: '' });

    }
    function guardarDataFormulario(e, tipo) {
        let name = e.target.name;

        document.getElementById("button1").addEventListener("click", () => {
            document.getElementById("pregunta").value = "";
            document.getElementById("tipoPregunta").value = "0";
        });
        dataFormulario[name] = e.target.value;
        dataFormulario['tipo'] = tipo;

    }
    function enviarPreguntas() {

    }
    return (<>
        <NavigationBar />
        <Container>

            {(formDinamico.data.length + 1 < 11) ?

                <Row>
                    <Col md={12}>
                        <h1>Pregunta {formDinamico.data.length + 1}</h1>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="pregunta">
                                <Form.Label>Ingrese la pregunta</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese la pregunta" name="pregunta" onChange={guardarDataFormulario} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="tipoPregunta">
                                <Form.Label>Tipo de pregunta</Form.Label>
                                <Form.Select onChange={(e) => handleChangeForm(e)} aria-label="Default select example">
                                    <option value="0">Seleccione el tipo de pregunta</option>
                                    <option value="unica">Unica</option>
                                    <option value="multiple">Multiple</option>
                                    <option value="dicotomica">Dicotomica</option>
                                    <option value="fecha">Fecha</option>
                                </Form.Select>
                            </Form.Group>

                            {formDinamico.aMostrar}

                            <Button variant="primary" type="button"  id="button1" onClick={guardarDatos}>
                                Guardar pregunta
                            </Button>
                        </Form>
                    </Col>
                </Row> :
                <Button variant="primary" type="button" onClick={enviarPreguntas}>
                    Guardar preguntas
                </Button>}


        </Container>
    </>)
}