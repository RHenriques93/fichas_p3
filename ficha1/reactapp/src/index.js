import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './Components/App';

import * as serviceWorker from './serviceWorker';


//Nota: Poderia ter incluido o <MovieList/> no lugar do app
ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('raiz')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
