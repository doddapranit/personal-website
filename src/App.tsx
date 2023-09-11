import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="centered-container">
        <h1 className="centered-text">Pranit Dodda</h1>
        <div className="work-in-progress">Work in Progress...</div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/pranit-dodda-97344b204/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://drive.google.com/file/d/1d9cMe4xIs6fkUf_PeoLCD1BYstYLtGLo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <h1>Resume</h1>
          </a>
          <a href="https://github.com/doddapranit/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubAlt} size="3x" />
          </a>
      </div>
      </div>
    </div>
  );
}

export default App;
