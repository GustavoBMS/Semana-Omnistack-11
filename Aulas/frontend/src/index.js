import React from 'react'; //Importa o React
import ReactDOM from 'react-dom'; //Integra o React com o DOM
import App from './App'; //Importa o aquivo App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);