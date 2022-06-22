import Login from "./login/Login";
import NotFound from "./notFound/NotFound";
import Home from "./home/Home";
import NuevoSup from "./nuevoSup/NuevoSup";
import NuevaEncuesta from "./nuevaEncuesta/NuevaEncuesta";
import Encuestas from "./encuestas/Encuestas";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import EncuestasParams from "./encuestasParams/EncuestasParams";


const App = ()=>{

  
    return(
        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route exact path="/login"/>
          <Route exact path ="/home" element={<Home/>}/>
          <Route exact path ="/NuevoSup" element={<NuevoSup/>}/>
          <Route exact path ="/NuevaEncuesta" element={<NuevaEncuesta/>}/>
          <Route exact path ="/encuestas" element={<Encuestas/>}/>
          <Route exact path ="/encuestas/:id" element={<EncuestasParams/>}/>

          <Route path="*" element={<NotFound/>}  />
        </Routes>
      </BrowserRouter>
    
        
    )
}

export default App;