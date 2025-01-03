import Image1 from "./images/Portfolio 2.jpg"
const About = ()=>{
    return (
        <div className="abt">
            <div><h3 className="me">ABOUT ME <br /><p>Hi, I am Ismaheel Oladimeji, a fullstack software developer based in Lagos. <br />I have a background in Mathematics Education <br />
             from the University of Ibadan. I am looking for exciting opportunities <br /> where I can showcase my skills and continue to learn. <br />Passionate and curious about solving critical problems, 
             <br />while focusing on interactivity and accessibility when coding. 
             <br />I'm currently exploring content writing and digital marketing <br />
             when I'm not coding. I enjoy coding, playing football, writing and travelling.</p></h3><br />
            <a href="http://bit.ly/3YBvNdX"><button>Download my CV</button></a></div>

            <div><img src={Image1} alt="" /></div>
        </div>
    )

    
}


export default About;
