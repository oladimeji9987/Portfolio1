import image1 from "./images/html.png"
import image2 from "./images/css.png"
import image3 from "./images/js-img.png"
import image4 from "./images/typescript-img.png"
import image5 from "./images/react.png"
import image6 from "./images/git.png"
import image7 from "./images/vscode.png"
import image8 from "./images/github.png"

const Capability = ()=>{

    return (
        <div className='exp'>
            <p>
            <h1>CAPABILITY</h1>
            <h3>I have been working with these languages and tools lately:</h3>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" /><br />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
            </p>
        </div>
    )
} 

export default Capability;