import "./About.css"
import {Link} from "react-router-dom"

import{
  VscGithubInverted  
} from 'react-icons/vsc'

import{
  FaReact, FaNode
} from 'react-icons/fa'

import {SiRedux, SiMongodb
} from 'react-icons/si'

import React from "react"

const About = () => {
  return (
    <div className="container-about">
      <div className="content-about">
        <div className="personal-content">
          <h2>Objetivo do projeto</h2>
          <div className="line"></div>
          <p className="title"> Bem vindo a <span>Memórias</span>.</p> <br /> 
          <p>Uma plataforma única e emocionante. 
          Onde foi desenvolvida para realidade de minha família. Um local onde armazenar nossas memórias mais afeitvas, 
          viagens, passeios, e encontros.</p>
          <h3>"Não importa onde estivremos, o tempo que passe, a família que construirmos. Nosso coração e memórias sempre estará conectado"</h3>
          <div className="observation">
            <div className="content-observation">
              <p><span className="obs">OBS:</span> Para você, visitante, que deseja testar a plataforma, utilize o seguinte login:</p>
              <ul>
                <li>Email: visitante@gmail.com</li>
                <li>Senha: visitante</li>
              </ul>
            </div>            
          </div>          
        </div>
        <div className="professional-content">
          <h2>Profissionalmente:</h2>
          <div className="line"></div>
          <p>Desenvolvida com varios processos, etapas, tendo tanto backend como frontend. Um projeto completo para demonstrar 
            habilidades e conhecimento exigidos.
          </p>
          <h3>Tecnologias utilizadas:</h3>
          <ul>
            <li><strong><FaReact />React:</strong> A base da nossa interface de usuário, proporcionando uma experiência interativa e intuitiva para os usuários explorarem suas memórias.</li>
            <li><strong><SiRedux />Redux:</strong> Gerenciamento de estado eficiente para garantir uma navegação suave e consistente.</li>
            <li><strong><SiMongodb />MongoDB:</strong> Um robusto banco de dados NoSQL que armazena de forma segura as memórias preciosas compartilhadas pelos usuários.</li>            
            <li><strong><FaNode />Node.js:</strong> Potencializa nosso servidor, permitindo escalabilidade e desempenho excepcionais.</li>
            <li><strong>Express:</strong> Facilita o desenvolvimento do backend, garantindo uma comunicação eficiente entre o frontend e o banco de dados.</li>
            <li><strong>HTML5/CSS3: Para uma ótima estruturação de página e uma estilização coerente e elegante</strong></li>
          </ul>

          <p>Link para o github: <Link to="/"> <VscGithubInverted /></Link> </p>
        </div>
      </div>

    </div>
  )
}

export default About