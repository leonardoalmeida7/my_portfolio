import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="texts">
            <div>
                <span className='text-effect'>Portfolio</span>
                <p>
                    Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
                </p>
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
        <hr />
        <div className="text-copy">
            <p>Feito com <FaRegHeart className="heart" /> por um desenvolvedor apaixonado</p>
            <p className="copyright">&copy; 2025 Portfolio. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer