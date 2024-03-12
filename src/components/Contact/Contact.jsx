import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import React from "react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3539f688-efd6-421b-ab59-06eb237cee27");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulário enviado com sucesso!");
        event.target.reset();
       setTimeout(() => {
        setResult("")
       }, 5000);
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Envie sua mensagem <img src={msg_icon} alt="" /></h3>
                <p>
                    Fique à vontade para entrar em contato através do formulário de contato ou encontrar nossas informações de contato abaixo. Seu feedback, perguntas e sugestões são importantes para nós, pois nos esforçamos para fornecer um serviço excepcional à nossa comunidade universitária.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />contato@edusity.edu</li>
                    <li><img src={phone_icon} alt="" />(41) 3325-2456</li>
                    <li><img src={location_icon} alt="" />Rua das Flores, 123,Bairro Jardim Botânico <br />
                        Curitiba, PR 
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nome</label>
                    <input type="text" name="name" placeholder="Digite seu nome" required/>
                    <label>Telefone</label>
                    <input type="tel" name="phone" placeholder="Digite o seu número de telefone" required/>
                    <label>Mensagem</label>
                    <textarea name="message"  rows="6" placeholder="Escreva a sua mensagem" required></textarea>
                    <button type="submit" className="btn dark-btn">Enviar <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact