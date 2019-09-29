import React from 'react';
import '../Stylesheets/Landing.css';

function Landing({ onFinishedViewing }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slide0 = (
    <div className='slide slide-zero'>
      <div className='container'>
        <h2 className='slide-zero-tilt'>You Found Me!</h2>
        <h1 className='slide-zero-title'>Alex<br />Doll</h1>
        <p>Claim the treasure to begin your adventure...</p>
        <div className='button-holder'>
          <button
            className='treasure-button'
            onClick={() => setCurrentSlide(1)}
          />
        </div>
      </div>
    </div>
  );

  const slide1 = (
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
            <button
              className='diamond-button'
              onClick={() => {
                setCurrentSlide(0);
                onFinishedViewing();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const slides = [slide0, slide1];
  
  return (
    <div>
      {slides[currentSlide]}
    </div>
  );
}

export default Landing;
