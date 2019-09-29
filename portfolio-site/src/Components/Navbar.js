import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar fixed-top navbar-custom'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            Alex Doll
          </Link>
          <div className='nav justify-content-end'>
            <Link className='nav-item btn btn-primary projects-btn' to='/projects'>
              <strong>Projects</strong>
            </Link>
            <Link className='nav-item nav-link' to='/about'>
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;