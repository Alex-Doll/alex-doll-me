import React, {Component} from 'react';
import '../Stylesheets/Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
  }
  
  updateSlide = () => {
    this.setState((prevState, {onFinishedViewing}) => {
      if (prevState.currentSlide === 1) {
        onFinishedViewing();
        return {
          currentSlide: 0
        };
      } else {
        return {
          currentSlide: prevState.currentSlide + 1
        };
      }
    });
  }
  
  render() {
    let {currentSlide} = this.state;
    let slide0 = (
      <div className='slide slide-zero'>
        <div className='container'>
          <h2 className='slide-zero-tilt'>You Found Me!</h2>
          <h1 className='slide-zero-title'>Alex<br />Doll</h1>
          <p>Claim the treasure to begin your adventure...</p>
          <div className='button-holder'>
            <button className='treasure-button' onClick={this.updateSlide} />
          </div>
        </div>
      </div>
    );
    
    let slide1 = (
      <div className='slide'>
        <div className='container slide-one'>
          <div className='first-group'>
            <div className='text-coin'>
              <p>Hmm...a few measly coins...</p>
              <div className='coin-image'></div>
            </div>
            <p>Some adventure this is...</p>
          </div>
          <div className='second-group'>
            <p>Wait! What's that at the bottom?!?</p>
            <div className='text-diamond'>
              <p>The real treasure! Quick, grab it!</p>
              <button className='diamond-button' onClick={this.updateSlide} />
            </div>
          </div>
        </div>
      </div>
    );
    
    let slides = [slide0, slide1];
    
    return (
      <div>
        {slides[currentSlide]}
      </div>
    );
  }
}

export default Landing;