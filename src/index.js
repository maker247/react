import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootStrapJs from 'bootstrap/dist/js/bootstrap.bundle.js';
import moment from 'moment';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './em_react/App';
// import App from './App';
// import App from './componentsInComponents/App';
// import App from './classState/App'
import App from './articles/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
