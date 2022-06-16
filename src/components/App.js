import Login from "./login/Login";
import NotFound from "./notFound/NotFound";
import Home from "./home/Home";
import NuevoSup from "./nuevoSup/NuevoSup";

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

const App = ()=>{

    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route exact path="/login"/>
          <Route exact path ="/home" element={<Home/>}/>
          <Route exact path ="/NuevoSup" element={<NuevoSup/>}/>

          <Route path="*" element={<NotFound/>}  />
        </Routes>
      </BrowserRouter>
    
        
    )
}

export default App;