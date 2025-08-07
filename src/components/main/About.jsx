import Skills from './Skills'

import './About.css'

const About = () => {
  return (
    <section className='about-me'>
        <div>
            <h1>Sobre Mim</h1>
        </div>
        <div>
            <div className='about-me-text'>
                <h2>Desenvolvedor apaixonado por tecnologia</h2>
                <p>
                    Com mais de 5 anos de experiência em desenvolvimento web, transformo ideias em soluções digitais inovadoras. Especializado em criar aplicações escaláveis e interfaces elegantes.
                </p>
                <br />
                <p>
                    Sempre em busca de aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento para entregar produtos de alta qualidade.
                </p>
                <div className="btns-skills">
                    <button type="button" className="btn">React</button>
                    <button type="button" className="btn">Next.js</button>
                    <button type="button" className="btn">TypeScript</button>
                    <button type="button" className="btn">PHP</button>
                    <button type="button" className="btn">Node.js</button>
                    <button type="button" className="btn">MySql</button>
                </div>
            </div>
            <Skills />
        </div>
    </section>
  )
}

export default About