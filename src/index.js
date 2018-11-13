import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {CursoCard} from './cursos/cursoCard';

const requisitosCurso = ['lógica de programacao','html'];

ReactDOM.render(
  <div className="listaCurso">
    <CursoCard thumb="assets/img/javascript.jpg"
               dataCurso="30 Nov"
               categoria="Desenvolvimento"
               requisitos={requisitosCurso}/>
    <CursoCard thumb="assets/img/typescript.jpg"
               dataCurso="20 Dez"
               nome="TypeScript"
               categoria="Desenvolvimento"
               requisitos={requisitosCurso} />
  </div>,
  document.getElementById('root')
);
