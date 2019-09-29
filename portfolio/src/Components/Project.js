import React from 'react';
import '../Stylesheets/Project.css';

export function Project(props) {
    const {imgSrc, title, description, linkTo} = props;
    return (
      <div className='project-custom'>
        <div className='container'>
          <div className='card'>
            <img className="card-img-top" src={imgSrc} alt={title} />
            <div className="card-body">
              <h5 className="card-title"><strong>{title}</strong></h5>
              <p className="card-text">{description}</p>
              <a href={linkTo} className="btn btn-primary" target='_blank' rel="noopener noreferrer"><strong>View Project!</strong></a>
            </div>
          </div>
        </div>
      </div>
    );
}
