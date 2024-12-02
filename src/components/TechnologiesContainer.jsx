import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import "../styles/components/technologiescontainer.sass"
import { IoLogoSass } from "react-icons/io5";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, lore: "HTML5 é a linguagem projetada para criar páginas web modernas com suporte nativo a multimídia, gráficos e melhor estrutura semântica." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, lore: "CSS3 é uma linguagem de estilo que define a aparência e o layout de páginas web, permitindo criar experiências visuais atraentes e dinâmicas." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, lore: "JavaScript é uma linguagem de programação que adiciona interatividade e dinamismo a páginas web, permitindo criar experiências mais envolventes para os usuários." },
  { id: "vue", name: "Vue", icon: <FaVuejs />, lore: "Vue.js é um framework JavaScript progressivo usado para criar interfaces de usuário interativas e aplicações web dinâmicas de forma eficiente e modular." },
  { id: "bootstrap", name: "Bootstrap", icon: <FaBootstrap />, lore: "Bootstrap é um framework front-end que facilita a criação de sites responsivos e visualmente consistentes, com uma ampla variedade de componentes prontos para uso." },
  { id: "sass", name: "Sass", icon: <IoLogoSass />, lore: "Sass é uma linguagem de extensão para CSS que simplifica o desenvolvimento de estilos com recursos como variáveis, aninhamento e mixins, tornando o código mais organizado e reutilizável." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, lore: "MySQL é um sistema de gerenciamento de banco de dados relacional que armazena e organiza dados de forma eficiente, permitindo consultas rápidas e seguras." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, lore: "Node.js é um ambiente de execução JavaScript no lado do servidor, que permite construir aplicações escaláveis e de alto desempenho usando JavaScript fora do navegador." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p> {tech.lore} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
