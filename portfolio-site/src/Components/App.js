import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasViewedLanding: false
    };
  }
  
  toggleViewedLanding = () => {
    console.log(this.state);
    this.setState((prevState) => ({
      hasViewedLanding: !prevState.hasViewedLanding
    }));
  }
  
  render() {
    let {hasViewedLanding} = this.state;
    
    return (
      <div className="App">
        {hasViewedLanding &&
          <Router>
            <div>
              <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
              <Footer onViewLandingClick={this.toggleViewedLanding} />
            </div>
          </Router>
        }
        {!hasViewedLanding &&
          <Landing onFinishedViewing={this.toggleViewedLanding} />
        }
      </div>
    );
  }
}

export default App;
