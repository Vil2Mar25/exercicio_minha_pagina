import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import Sobre from './Sobre';
import Saiba from './Saiba';
import Rodape from './Rodape'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='topo'>
          <Cabecalho />
        </div>
        <div className='corpo'>
          <Sobre />
          <Saiba />
        </div>
        <div className='rodape'>
          <Rodape />
        </div>
      </div>
    );
  }
}

export default App;
