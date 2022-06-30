import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NuevoSupForm() {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [dataFormulario, setDataFormulario] = useState({
    usuario: '',
    pass: '',
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    tipo: 2
  })

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{6,24}$/;
  let regexUsuario = /^[a-z0-9_-]{6,16}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPass = /^[a-z0-9_-]{6,18}$/;
  let regexRut = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
  let regexTelefono = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

  const [errors,setErrors] = useState({});

  const [valido,setValido] = useState(false);


  const validationForm = (dataFormulario) =>{
    let errors ={};
    if(dataFormulario.usuario === ""){
      errors.usuario= 'El campo "Usuario" es requerido';
      
    }else if(!regexUsuario.test(dataFormulario.usuario)){
      errors.usuario= 'El campo "Usuario" tiene que tener entre 6 y 16 caracteres además de no contener espacios';
    } 

    if(dataFormulario.pass === ""){
      errors.pass= 'El campo "Password" es requerido'; 
    }else if(!regexPass.test(dataFormulario.pass)){
      errors.pass= 'El campo "Contraseña" tiene que tener entre 6 y 18 caracteres'; 
    } 
  
    if(dataFormulario.nombre === ""){
      errors.nombre= 'El campo "Nombre" es requerido';   
    } else if(!regexName.test(dataFormulario.nombre)){
      errors.nombre= 'El campo "Nombre" tiene que tener entre 6 y 24 caracteres'; 
    } 

    if(dataFormulario.rut === ""){
      errors.rut= 'El campo "Rut" es requerido (con guión y sin puntos)';
    } else if(!regexRut.test(dataFormulario.rut)){
      errors.rut= 'El campo "Rut" es inválido (con guión y sin puntos)';  
    } 

    if(dataFormulario.email === ""){
      errors.email= 'El campo "Email" es requerido'; 
    } else if(!regexEmail.test(dataFormulario.email)){
      errors.email= 'El campo "Email" es inválido';  
    }

    if(dataFormulario.telefono === ""){
      errors.telefono= 'El campo "Teléfono" es requerido'; 
    } else if(!regexTelefono.test(dataFormulario.telefono)){
      errors.telefono= 'El campo "Teléfono" es inválido (ingresar solo números y el caracter "+" sin parentesis)';
    }
  
    if(regexRut.test(dataFormulario.rut) && regexTelefono.test(dataFormulario.telefono) && regexEmail.test(dataFormulario.email) && regexName.test(dataFormulario.nombre) && regexPass.test(dataFormulario.pass) && regexUsuario.test(dataFormulario.usuario) ){
      setValido(true);
    } else{
      setValido(false);
    }
    

    return errors;
  } 

 const handleOnBlur =(e) => {
    handleOnChange(e);
    setErrors(validationForm(dataFormulario));
 }

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    (name === 'usuario') ? setDataFormulario({ ...dataFormulario, usuario: value }) :
      (name === 'pass') ? setDataFormulario({ ...dataFormulario, pass: value }) :
        (name === 'nombre') ? setDataFormulario({ ...dataFormulario, nombre: value }) :
          (name === 'rut') ? setDataFormulario({ ...dataFormulario, rut: value }) :
            (name === 'email') ? setDataFormulario({ ...dataFormulario, email: value }) :
              (name === 'telefono') ? setDataFormulario({ ...dataFormulario, telefono: value }) :
                console.log("no valido");

  }
  const handleOnClick = async () => {
    let cookies = document.cookie.split(';');
    let token = cookies.find(cookie => cookie.includes("token"))
  
    if (!token) {
      navigate('/')
    } else {
      token = token.replace('token=', '');
      let peticionLogin = await fetch('http://localhost:4000/api/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(dataFormulario)
      });
      let response = await peticionLogin.json();

      setMessage(response)
    };

    
  }

  return (
    <>

      <Container className='text-center p-5'>
        <Card bg="light" border="warning">
          <Card.Header className="text-center">NUEVO SUPERVISOR</Card.Header>

          <Form>

            <Form.Group className="mb-3" >
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Usuario" name='usuario' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            {errors.usuario && <p>{errors.usuario}</p>}
            <Form.Group className="mb-3"  >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar Contraseña" name='pass' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)} />
            </Form.Group>
            {errors.pass && <p>{errors.pass}</p>}
            <Form.Group className="mb-3"  >
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Nombre" name='nombre' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            {errors.nombre && <p>{errors.nombre}</p>}
            
            <Form.Group className="mb-3">
              <Form.Label>Rut</Form.Label>
              <Form.Control type="text" placeholder="Ingresar Rut" name='rut' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            {errors.rut && <p>{errors.rut}</p>}

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresar Email" name='email' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)}/>
              <Form.Text className="text-muted">
              </Form.Text>
              {errors.email && <p>{errors.email}</p>}
              <Form.Group className="mb-3">
                <Form.Label>Teléfono </Form.Label>
                <Form.Control type="text" placeholder="Ingresar Número Telefónico (+56)" name='telefono' onChange={(e) => handleOnChange(e)} onBlur={(e) => handleOnBlur(e)}/>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              {errors.telefono && <p>{errors.telefono}</p>}
            </Form.Group>
            {(message)&&<h3 onClick={()=>navigate('/home')}>{message}</h3>}
           

            <div className="text-center" >
              <Button variant="warning" type="button" disabled={!valido}  onClick={handleOnClick} >
                Registrar usuario
              </Button>

            </div>
          </Form>
        </Card>
      </Container>
    </>

  )
}