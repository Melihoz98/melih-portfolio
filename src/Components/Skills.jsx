import React from 'react';
import './Skills.css'; // Import custom styles

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        {/* Technologies Grid */}
        <div className="tech-grid">
          {/* Database */}
          <div className="tech-column">
            <h3>Database</h3>
            <ul className="tech-list">
              <li><i className="devicon-microsoftsqlserver-plain-wordmark colored"></i> MSSQL</li>
              <li><i className="devicon-mysql-plain-wordmark colored"></i> MySQL</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="tech-column">
            <h3>Backend</h3>
            <ul className="tech-list">
              <li><i className="devicon-csharp-plain colored"></i> C#</li>
              <li><i className="devicon-java-plain-wordmark colored"></i> Java</li>
              <li><i className="devicon-python-plain-wordmark colored"></i> Python</li>
              <li><i className="devicon-dotnetcore-plain colored"></i> ASP.NET</li>
              <li><i className="devicon-fastapi-plain-wordmark colored"></i> FastAPI</li>
              <li><i className="devicon-rest-plain colored"></i> REST API</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="tech-column">
            <h3>Frontend</h3>
            <ul className="tech-list">
              <li><i className="devicon-angularjs-plain colored"></i> Angular.js</li>
              <li><i className="devicon-react-original-wordmark colored"></i> React.js</li>
              <li><i className="devicon-typescript-plain colored"></i> TypeScript</li>
              <li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
              <li><i className="devicon-jquery-plain-wordmark colored"></i> JQuery</li>
              <li><i className="devicon-html5-plain-wordmark colored"></i> HTML</li>
              <li><i className="devicon-css3-plain-wordmark colored"></i> CSS</li>
              <li><i className="devicon-bootstrap-plain-wordmark colored"></i> Bootstrap</li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="tech-column">
            <h3>Technologies</h3>
            <ul className="tech-list">
              <li><i className="devicon-azure-plain-wordmark colored"></i> Azure</li>
              <li><i className="devicon-docker-plain-wordmark colored"></i> Docker</li>
              <li><i className="devicon-swagger-plain-wordmark colored"></i> Swagger</li>
              <li><i className="devicon-postman-plain-wordmark colored"></i> Postman</li>
              <li><i className="devicon-git-plain-wordmark colored"></i> Git</li>
            </ul>
          </div>

          {/* IDEs */}
          <div className="tech-column">
            <h3>IDEs</h3>
            <ul className="tech-list">
              <li><i className="devicon-visualstudio-plain colored"></i> Visual Studio</li>
              <li><i className="devicon-vscode-plain-wordmark colored"></i> VS Code</li>
              <li><i className="devicon-eclipse-plain colored"></i> Eclipse</li>
            </ul>
          </div>

          {/* Most Used Stack */}
          <div className="tech-column">
            <h3>Most Used Stack</h3>
            <ul className="tech-list">
              <li><i className="devicon-csharp-plain colored"></i> C#</li>
              <li><i className="devicon-dotnetcore-plain colored"></i> ASP.NET</li>
              <li><i className="devicon-react-original-wordmark colored"></i> React.js</li>
              <li><i className="devicon-postman-plain-wordmark colored"></i> Postman</li>
              <li><i className="devicon-microsoftsqlserver-plain-wordmark colored"></i> MSSQL</li>
              <li><i className="devicon-azure-plain-wordmark colored"></i> Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
