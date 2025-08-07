import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

import './Skills.css'

const Skills = () => {
  return (
    <div className='about-skills'>
        <h3>Habilidades Técnicas</h3>
        <div className="skills">
            <div className="skill" id="icon-react">
                <FaReact className="icons"/>
                <span>React</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-nodejs">
                <FaNodeJs className="icons"/>
                <span>NodeJs</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-php">
                <FaPhp className="icons"/>
                <span>PHP</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-bootstrap">
                <FaBootstrap className="icons"/>
                <span>Booststrap</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-javascript">
                <DiJavascript1 className="icons"/>
                <span>JavaScript</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-mysql">
                <GrMysql className="icons"/>
                <span>MySql</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-react">
                <DiJavascript1 className="icons"/>
                <span>JavaScript</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="skill" id="icon-react">
                <DiJavascript1 className="icons"/>
                <span>JavaScript</span>
                <div className="circles">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills