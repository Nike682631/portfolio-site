import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import TextCloud from './TextCloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() =>{
        setLetterClass('text-animate-hover')
      }, 4000)
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l','s']}
              idx={15}
            />
        </h1>
          <p>
            Expert in Full-stack development including technologies like
            <span className="Tech"> HTML5</span>,
            <span className="Tech"> CSS3</span>,
            <span className="Tech"> JavaScript</span>,
            <span className="Tech"> React</span>,
            <span className="Tech"> TypeScript</span>,
            <span className="Tech"> Flutter</span>,
            <span className="Tech"> Nodejs</span>,
            <span className="Tech"> Springboot</span>,
            <span className="Tech"> Bootstrap</span>,
            <span className="Tech"> Sass</span>,
            <span className="Tech"> Figma</span>,
            <span className="Tech"> Git</span>, etc.
          </p>
          <p>
            I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            You can check out my {' '}
            <a className='Tech' target="_blank" href=https://drive.google.com/file/d/1_QnJf9fcYHlAamtFaF2geadEaLIDCxYE/view?usp=drivesdk">CV</a> here.
          </p>
        </div>
        <TextCloud/>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills