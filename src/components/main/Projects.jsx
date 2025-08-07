import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

import projectImg from "../../assets/images/preview.jpg"
import './Projects.css'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useEffect(() => {
    const cards = gsap.utils.toArray('.card');

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
        }
      );
    });
  }, []);

  return (
    <section className='contain-projects'>
        <div>
            <h1 className='text-effect'>Projetos</h1>
        </div>
        <div className="cards-projects">
            <div className='card' >
                <img src={projectImg} alt="" />
                <div className='apresentation-project'>
                    <h2 className='project-title'>Projeto Quiz</h2>
                    <p>
                        Esse sistema foi densenvolvido com apenas tecnologias front-end, uma de suas funcionalidades é lógica de validação de acertos e erros com um sistema de pontuação no final dos quizes. Teste seus conhecimentos de tecnologias front-end com esse quiz.
                    </p>
                    <div className="btns-skills">
                        <button type="button" className="btn">HTML</button>
                        <button type="button" className="btn">CSS</button>
                        <button type="button" className="btn">Bootstrap</button>
                        <button type="button" className="btn">JavaScript</button>
                    </div>
                    <div className='btns-links'>
                        <button type='button' id="btn-demo"><FaExternalLinkAlt className="space"/> Demo</button>
                        <button type='button' id="btn-git" ><FiGithub className="space" /> Código</button>
                    </div>
                </div>
            </div>
            <div className='card' >
                <img src="" alt="" />
                <div className='apresentation-project'>
                    <h2 className='project-title'>Meu projeto</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum esse atque magnam perspiciatis numquam ipsum dolores illo, labore quasi fugit hic maxime, ab minima quis sed necessitatibus nesciunt pariatur accusantium.
                    </p>
                    <div className="btns-skills">
                        <button type="button" className="btn">React</button>
                        <button type="button" className="btn">Next.js</button>
                        <button type="button" className="btn">TypeScript</button>
                        <button type="button" className="btn">PHP</button>
                        <button type="button" className="btn">Node.js</button>
                        <button type="button" className="btn">MySql</button>
                    </div>
                    <div className='btns-links'>
                        <button type='button' id="btn-demo"><FaExternalLinkAlt className="space"/> Demo</button>
                        <button type='button' id="btn-git" ><FiGithub className="space" /> Código</button>
                    </div>
                </div>
            </div>
            <div className='card' >
                <img src="" alt="" />
                <div className='apresentation-project'>
                    <h2 className='project-title'>Meu projeto</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum esse atque magnam perspiciatis numquam ipsum dolores illo, labore quasi fugit hic maxime, ab minima quis sed necessitatibus nesciunt pariatur accusantium.
                    </p>
                    <div className="btns-skills">
                        <button type="button" className="btn">React</button>
                        <button type="button" className="btn">Next.js</button>
                        <button type="button" className="btn">TypeScript</button>
                        <button type="button" className="btn">PHP</button>
                        <button type="button" className="btn">Node.js</button>
                        <button type="button" className="btn">MySql</button>
                    </div>
                    <div className='btns-links'>
                        <button type='button' id="btn-demo"><FaExternalLinkAlt className="space"/> Demo</button>
                        <button type='button' id="btn-git" ><FiGithub className="space" /> Código</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects