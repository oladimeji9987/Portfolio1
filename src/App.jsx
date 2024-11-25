import Capability from "./assets/components/Capability"
import Header from "./assets/components/Header"
import About from "./assets/components/About"
import Project from "./assets/components/Project"
import Contact from "./assets/components/Contact"
import Home from "./assets/components/pages/Home"
import "./index.css"
import { BrowserRouter,Routes,Route } from "react-router-dom";



const App = ()=>{
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Capability" element={<Capability/>}/>
                <Route path="/Project" element={<Project/>}/>
                <Route path="Contact" element={<Contact/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App;