import React from 'react';
import FavoritarBtn from '../shared/favoritarBtn';
import estilo from './cursoCard.module.css';

export class CursoCard extends React.Component {
  listaRequistos = this.props.requisitos.map((tag, index) => <li key={index}>{tag}</li>);
  render() {
    return <article className={estilo.card}>
            <img className={estilo.card__img} src={this.props.thumb} alt={this.props.nome} />
            <div className={estilo.card__block}>
                <time className={estilo.card__date}>{this.props.dataCurso}</time>
                <h4 className={estilo.card__title}>{this.props.nome}</h4>
                <p className={estilo.card__text}>{this.props.categoria}</p>
                <h5 className={estilo.card__subtitle}>Pre-requisitos:</h5>
                <ul className={estilo.card__tags}>
                  {this.listaRequistos}
                </ul>
                <FavoritarBtn />
            </div>
          </article>;
  }
}

CursoCard.defaultProps = {
  nome: 'Treinamento',
}
