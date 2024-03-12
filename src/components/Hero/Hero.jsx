import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Construindo mentes, moldando o futuro: Educação além dos limites!</h1>
        <p>Plataforma completa para aprendizado, com recursos, cursos e ferramentas interativas, capacitando alunos a alcançar seu potencial máximo
        </p>
        <button className="btn">Saiba mais <img src={dark_arrow} alt="" /></button>

      </div>
    </div>
  )
}

export default Hero