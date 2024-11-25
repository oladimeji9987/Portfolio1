import { Link } from "react-router-dom"

const Header = ()=>{
    return (
        <div className="navBar">
            <h2 id="name">ISMAHEEL OLADIMEJI</h2>
            <div className="links">
            <Link to="/Home">
                <h4>Home</h4>
            </Link>

            <Link to="/About">
                <h4>About</h4>
            </Link>

            <Link to="/Capability">
                <h4>Capability</h4>
            </Link>

            <Link to="/Project">
                <h4>Project</h4>
            </Link>

            <Link to="/Contact">
                <h4>Contact</h4>
            </Link>
            </div>
           
        </div>
    )
}

export default Header;
