import React from 'react';
import './App.css';
import Nav from '../src/component/nav';
import Home from '../src/component/home';
import Details from './component/details';
//import {SateProvider} from '../src/component/stateContext'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return ( 
        <Router>
        <div className="App">  
          <Nav />
          <Switch>
            {/* <SateProvider> */}
              <Route path='/' exact component = {Home} />
              <Route path='/details/:id' component = {Details} />
            {/* </SateProvider> */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
