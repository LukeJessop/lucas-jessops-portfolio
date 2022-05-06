import { useState } from "react"
import App from "../App"


function Navbar(){
    const [showLinks, setShowLinks] = useState(false)


    const onClickFunc = () => {
        if(!showLinks) {
            setShowLinks(true)
        }else{
            setShowLinks(false)
        }
    }
    const getRidOfLinks = () => {
        if(showLinks){
            setShowLinks(false)
        }
    }

    const scrollingFunc1 = () => {
        document.getElementById('2').scrollIntoView({behavior: "smooth"})
        getRidOfLinks()
    }

    const scrollingFunc2 = () => {
        document.getElementById('3').scrollIntoView({behavior: "smooth"})
        getRidOfLinks()
    }
return(
    <div className="navbar-master-container">
        <div>
            <button onClick={scrollingFunc1}>About</button>
            <button onClick={onClickFunc}>Links</button>
            <button onClick={scrollingFunc2}>Creations</button>
        </div>
        {
        showLinks ? 
        <div className="links">
            <button><a href="https://www.linkedin.com/in/lucas-jessop-7861ab187/" target="_blank" rel="noreferrer">LinkedIn</a></button>
            <button><a href="https://github.com/LukeJessop" target="_blank" rel="noreferrer">Github</a></button>
            <button><a href="https://docs.google.com/document/d/1BDesTnG0mCHPCk-S7YI2P2ZfmRI1dG2yj0FlZmLo5A8/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></button>
        </div>
        :
        null
        }
    </div>
)
}

export default Navbar