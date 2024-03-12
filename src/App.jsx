import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"


const App = () => {
  const [playerState,setPlayerState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title={'O Que Nós Oferecemos'} subtitle={'Nossos Programas'}/>
        <Programs />
        <About setPlayerState={setPlayerState}/>
        <Title title={'Fotos do Campus'} subtitle={'Galeria'}/>
        <Campus/>
        <Title title={'O Que dizem Nossos Alunos'} subtitle={'Depoimentos'}/>
        <Testimonials/>
        <Title title={'Fale Conosco'} subtitle={'Contato'} />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/>
    </>
  )
}

export default App