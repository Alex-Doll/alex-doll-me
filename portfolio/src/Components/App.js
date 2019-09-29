import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import { Home } from './Home';
import { Projects } from './Projects';
import { About } from './About';
import { Navbar } from './Navbar';
import { Landing } from './Landing';
import { Footer } from './Footer';

export function App() {
  const [hasViewedLanding, setHasViewedLanding] = React.useState(false);

  return (
    <div className="App">
      {hasViewedLanding &&
       <Router>
         <div>
           <Navbar />
           <Route exact path='/' component={Home} />
           <Route path='/projects' component={Projects} />
           <Route path='/about' component={About} />
           <Footer onViewLandingClick={() => setHasViewedLanding(false)} />
         </div>
       </Router>
      }
      {!hasViewedLanding &&
       <Landing onFinishedViewing={() => setHasViewedLanding(true)} />
      }
    </div>
  );
}
