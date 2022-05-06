import './App.css';
import './Components/navbar.css'
import Nav from './Components/Navbar'
import { useState, useEffect } from 'react';
import creations from './creations.json'

function App() {
  const [creationsArray, setCreationsArray] = useState([])


  useEffect(() => {
    setCreationsArray(creations)
  },[])
  
  let mappedCreations = creationsArray.map((e) => {
    console.log(e.info.video_demo_embed)
    return(
    <div className='creation'>
      <div>
        <h2>Visit: <a id='site_link' style={{textDecoration: 'underline'}}href={e.info.url} target="_blank" rel="noreferrer">{e.name}</a></h2>
      </div>
      {
        e.info.video_demo_embed ? 
        <iframe width="500" height="300" src={`https://www.youtube.com/embed/${e.info.video_demo_embed}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        :
        <img alt='site-preview' src={e.info.preview_img_url} style={{width: '500px', height: '300px', backgroundColor: 'grey'}}/>
        
      }
      <p style={{width: '500px'}}>{e.info.technologies}</p>
      <p style={{width: '500px'}}>{e.description}</p>
    </div>
    )
  })
  
  return (
    <div className="App">
      <Nav className="nav"/>
      <div id='1' className='intro'>
        <h1>Lucas Jessop's Portfolio</h1>
      </div>

      <div id='2' className='about-me-component'>
        <h1 style={{color: 'white'}}>About Me</h1>
        <div className='about-me-info-container'>
          <p className='about-me-paragraph'>
            I am 20 years old. I love Web Development, stage tech, video editing, and video games. I currently work at Hale Centre Theatre as a Stage Technician. I went through a coding boot camp called Devmountain in the winter months of 2020 and learned so much about full stack web development. I love problem solving, learning new skills, and challenging myself. 
          </p>
          <img className='about-me-pic' alt="myself" src='https://cdn.discordapp.com/attachments/737868468904525957/972020437477384212/6A11F6A1-327F-4741-ABA6-9C96692D84C3.JPG'/>
        </div>
      </div>

      <div id='3' className='creations-component'>
        <h1 style={{color: 'white'}}>Creations</h1>
        <div className='creation-container'>
          {mappedCreations}
        </div>
      </div>
    </div>
  );
}

export default App;
