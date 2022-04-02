import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import history from './components/utility/location'

ReactDOM.render(
       <BrowserRouter history={history}   >
         <Routes>
         <Route exact path="/" element={ <App /> } />
         </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
