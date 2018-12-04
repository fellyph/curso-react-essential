import React from 'react';
import CursoCard from './CursoCard';

export default class CursoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cursos: []
    }
  }

  componentDidMount() {
    fetch('./assets/data/data.json')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            cursos: result.cursos
          })
        }
      )
  }


  render () {
    const { isLoaded, cursos } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return <ul>
        {cursos.map(curso => (
          <CursoCard thumb={curso.thumb}
                     dataCurso={curso.dia}
                     categoria={curso.categoria}
                     requisitos={curso.requisitos} />
          ))}
      </ul>
    }
  }
}