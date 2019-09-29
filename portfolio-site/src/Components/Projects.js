import React, {Component} from 'react';
import Project from './Project';
import '../Stylesheets/Projects.css';
import projectsData from '../projectsData';

class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => {
      let {imgSrc, title, description, linkTo, technologiesUsed} = project;
      return (
        <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
          <Project 
            imgSrc={imgSrc}
            title={title}
            description={description}
            linkTo={linkTo}
            technologiesUsed={technologiesUsed}
          />
        </div>
      );
    });
    
    return (
      <div className='projects'>
        <div className="container">
          <div className="row">
            {projects}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;