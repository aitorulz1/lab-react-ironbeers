import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'

import Home from './components/Home';
import All from './components/All';
import Random from './components/Random';
import New from './components/New';



class App extends Component {
  render() {
    return (
      <div className="App">
        

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/all" component={All}></Route>
          <Route exact path="/random" component={Random}></Route>
          <Route exact path="/new" component={New}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
