import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayerState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayerState(true)}/>
        </div>
        <div className="about-right">
            <h3>Sobre A Universidade</h3>
            <h2>Explorando Caminhos para o Sucesso Acadêmico e Além</h2>
            <p>Na nossa universidade, estamos comprometidos em oferecer uma experiência educacional excepcional que prepara os alunos para enfrentar os desafios do mundo moderno. Com uma comunidade diversificada, uma ampla gama de programas acadêmicos e instalações de ponta, nossa instituição proporciona um ambiente estimulante para o aprendizado, a pesquisa e o crescimento pessoal.</p>
            <p>Explore nossos cursos, conheça nossos professores e descubra as inúmeras oportunidades que temos a oferecer. Junte-se a nós e faça parte de uma jornada educacional que vai além dos limites convencionais.</p>
        </div>
    </div>
  )
}

export default About