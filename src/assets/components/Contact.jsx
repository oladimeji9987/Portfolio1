import image1 from "./images/whats3d-removebg-preview.png"
import image2 from "./images/linkedin.png"
import image3 from "./images/github.png"



const Contact = ()=>{
    return (
        <div className="connect">
            <h1>CONNECT WITH ME</h1>
            <h2>Feel free to connect with me through these channels</h2>
            <a href="https://wa.link/gw2z22"><img src={image1} alt="" /></a>
            <a href="https://www.linkedin.com/in/oladimeji-ismaheel/"><img src={image2} alt="" /></a>
            <a href="https://github.com/oladimeji9987/"><img src={image3} alt="" /></a>

            <marquee behavior="" direction="left"><h1>Thanks for your time, bye👋</h1></marquee>
        </div>
    )
}

export default Contact;