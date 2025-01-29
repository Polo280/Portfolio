
// Components
import TopBar from '../../components/TopBar'
import BottomBar from '../../components/BottomBar'

// Pages 
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Hobbies from './Hobbies'

const HomePage = () => {
  return (
    <>
    <TopBar />
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects /> 
      <Hobbies /> 
      <Contact />
      <BottomBar />
    </div>
    </>
  )
}

export default HomePage
