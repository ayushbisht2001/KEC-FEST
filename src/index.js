import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter , Router} from "react-router-dom";
import history from './components/utility/location'

ReactDOM.render(
    <Router   history = {history} basename={process.env.PUBLIC_URL} >
         <Switch>
         <Route  path="/" component={App} />
         </Switch>
      </Router>,
  document.getElementById('root')
);


reportWebVitals();
