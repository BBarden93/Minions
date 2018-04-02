import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import Navigation from './Navigation'
import Home from './views/Home.js'

class App extends Component {
  render() {
    return (
      <Container className="App">
          <Navigation />
          <Route exact path="/" component={Home} />
      </Container>
    );
  }
}

export default App;
