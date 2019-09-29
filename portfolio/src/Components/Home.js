import React, {Component} from 'react';
import '../Stylesheets/Home.css';

class Home extends Component {
  render() {
    return (
      <section className='jumbotron jumbotron-fluid home-custom'>
        <div className='container text-left'>
          <h3>Greetings Adventurer</h3>
          <hr />
          <h1 className='display-2'>My name is Alex Doll<br />I'm a web developer based in Austin, TX.</h1>
          <p className='lead'>This portfolio is yours to explore. 
          Whether you want to learn more about me or simply check out some of my work, 
          there is plenty for you to enjoy!</p>
          <p><em>The real treasure all along was my portfolio...or was it friendship?</em></p>
        </div>
      </section>
    );
  }
}

export default Home;