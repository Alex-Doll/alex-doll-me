import React, {Component} from 'react';
import '../Stylesheets/About.css';

class About extends Component {
  render() {
    return (
      <div className='about-custom'>
        <div className='container text-left'>
          <p className='about-important'><strong>Hello there!</strong></p>
          <p>If you're reading this then you probably are wanting to <strong>get to know a little bit more about me</strong>. If that's not why you're
          on this page then hopefully you'll be delighted nonetheless!</p>
          
          <hr />
          
          <ul>
            <li>
              <p>Once again, <strong>my name is Alex</strong>.</p>
            </li>
            <li>
              <p>I'm a <strong>full-stack software developer</strong> with a passion for creating things with code.</p>
            </li>
            <li>
              <p>I'm currently <strong>looking for employment</strong> as a developer so that I can apply and strengthen my skills all day everyday.</p>
            </li>
            <li>
              <p>From focusing in on a solo project to collaborating with larger teams, <strong>my biggest indicators for success are honesty and open 
              communication.</strong> These important skills, along with <strong>a passion to always continue learning</strong> are my core beliefs
              in regards to work ethic and software development in general!</p>
            </li>
          </ul>
             
          <p><strong>Thanks again</strong> for stopping by my portfolio and have a great rest of your day!!!</p>
          <p className='about-important'><strong>- Alex</strong></p>
        </div>
      </div>
    );
  }
}

export default About;