//Importação do React e useState
import React from 'react';

import Routes from './routes';

import './global.css';

function App() {
  //Quando utilizado o useState, é gerado um array de 2 valores, [valor(var), funcaoDeAtualizacao]
  //No primeiro valor do array fica o nome da variavel, o segundo a função responsavel por modificar a variavel
  //É utilizado um intermediario para modificar a variavel, ela nao e alterada diretamente
  //Sempre que um componente precisa armazenar um dado deve ser criado um estado, pois so assim pode ser alterado
  //const [counter, setCounter] = useState(0);
  return (
      <Routes />
  );
}

export default App;
