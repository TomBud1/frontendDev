import React from 'react';
import Tvs from './components/Tvs.js';
import EditTv from './components/EditTv.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Tvs} />
          <Route exact path="/tv/edit/:id" component={EditTv} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
