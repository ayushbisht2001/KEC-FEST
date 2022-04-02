import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Switch, Route  , Router} from "react-router-dom";
import { createBrowserHistory } from 'history';  
const history = createBrowserHistory()

ReactDOM.render(
<React.StrictMode>
  <App/>
</React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

{/* <Router   history = {history} basename={process.env.PUBLIC_URL} >
         <Switch>
         <Route  path="/" component={App} />
         </Switch>
      </Router> */}