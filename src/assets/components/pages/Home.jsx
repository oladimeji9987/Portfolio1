import About from "../About"
import Capability from "../Capability";
import Project from "../Project";
import Contact from "../Contact";


const Home = ()=>{
    return (
        <div>
            <marquee behavior="" direction="left">
                <h2>HELLO 😎, WELCOME TO MY PORTFOLIO!</h2>
            </marquee>
            <About/>
            <Capability/>
            <Project/>
            <Contact/>
        </div>
        
    )
}

export default Home;