import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import Navigation from './Navigation'
import Home from './views/Home.js'
import Minions from './views/Minions.js'

class App extends Component {
  render() {
    return (
      <Container className="App">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/minions" component={Minions} />
      </Container>
    );
  }
}

export default App;
