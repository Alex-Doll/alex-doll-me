import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Stylesheets/Footer.css';

class Footer extends Component {
  render() {
    let {onViewLandingClick} = this.props;
    
    return (
      <footer className='navbar fixed-bottom footer-custom'>
        <div className='container'>
          <Link to='/'>
            <button className='btn btn-link' onClick={onViewLandingClick}>
              View Intro
            </button>
          </Link>
          <div className='social-media'>
            <a className='btn btn-link' href='https://github.com/Rosco1010' target='_blank' rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a className='btn btn-link' href='https://www.linkedin.com/in/alexander-doll/' target='_blank' rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;