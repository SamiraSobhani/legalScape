import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Second from "./Second.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  // Router,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/page2" component={Second} exact />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
