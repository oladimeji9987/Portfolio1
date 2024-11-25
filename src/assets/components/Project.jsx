import image1 from "./images/furniro-img.jpeg"
import image2 from "./images/nextcent.png"
import image3 from "./images/countries.png"


const Project = ()=>{
    return (
        <div className="pro">
            <h1>PROJECTS</h1>
            <h2>These are some of the projects I have completed</h2>
            <div className="fig">
                <figure>
                    <a href="https://furniros.vercel.app/"><img src={image1} alt="" /></a>
                    <figcaption>Built with html and css. <br />This project showcases the beginning 
                    of a delightful career in software development. The design <br />
                    is the UI of a furniture/interior design website(Furniro).</figcaption>
                </figure>
                <figure>
                    <a href="https://nextcent-pi.vercel.app/"><img src={image2} alt="" /></a>
                    <figcaption>This project was completed with html and css. <br />
                    It was built to highlight the skills learnt <br />in html and css and also to understand what <br />
                    a user interface(UI) looks like.</figcaption>
                </figure>
                <figure>
                    <a href="https://countries-blond-kappa.vercel.app/"><img src={image3} alt="" /></a>
                    <figcaption>This project was completed with html, css,<br /> and javascript. 
                    It is a project that allows you to <br />select any country in the world either by region <br />
                    or by name. After entering your selection, it displays <br />the demographic information of the selected country.</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Project;