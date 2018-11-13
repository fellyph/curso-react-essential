import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {CursoCard} from './cursos/cursoCard';

ReactDOM.render(
  <div className="listaCurso">
    <CursoCard thumb="assets/img/javascript.jpg"
               dataCurso="30 Nov"
               categoria="Desenvolvimento" />
    <CursoCard thumb="assets/img/typescript.jpg"
               dataCurso="20 Dez"
               nome="TypeScript"
               categoria="Desenvolvimento" />
  </div>,
  document.getElementById('root')
);
