import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


import './Contact.css';

const Contact = () => {
  return (
    <section className='contain-contact'>
        <div className="title">
            <h1 className='text-effect'>Vamos Trabalhar Juntos</h1>
        </div>
        <div className='details'>
            <h2>Entre em Contato</h2>
            <p>
                Tenho uma ideia incrível? Precisa de um desenvolvedor para seu projeto? Vamos conversar e transformar sua visão em realidade!
            </p>
            <div className="boxs-contact">
                <div className='box-contact'>
                    <MdOutlineEmail className="icon" id="icon-email"/>
                    <div className="infos">
                        <span className="title">Email</span>
                        <span className="info">leonardoalmeida2124@gmail.com</span>
                    </div>
                </div>
                <div className='box-contact'>
                    <LuPhone className="icon"/>
                    <div className="infos">
                        <span className="title">Telefone</span>
                        <span className="info">+55 (43) 99626-9077</span>
                    </div>
                </div>
            </div>
            <div className='links-social'>
                <div className="btn-link">
                    <a href="#"><FiGithub className="icon" /></a>
                </div>
                <div className="btn-link">
                    <a href="#"><FiLinkedin className="icon"/></a>
                </div>
            </div>
        </div>
        <div className="form-box">
            <form action="#" method='POST'>
                <div className="info-client">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder='Seu nome completo'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' placeholder='seu@email.com'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="msg">Mensagem</label>
                    <textarea name='msg' id='msg' placeholder='Sobre o que você gostaria de falar?' rows={6}></textarea>
                </div>
                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    </section>
  )
}

export default Contact