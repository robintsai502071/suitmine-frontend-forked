import React from 'react';
import cut from '../../../images/sol/cut.mp4';
import meature_tap from '../../../images/sol/measuring_tape.png';
import meature__tap from '../../../images/sol/measuring_tape.png';
import pad from '../../../images/sol/Ipad-Desktop.png';

function Meature() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <section class="section__center__layover__panel">
            <div class="wrapper">
              <div class="img__container">
                <div class="one">
                  <picture>
                    <img src="/img/Ipad-Desktop.png" alt="" />
                  </picture>
                  <video src={cut} autoPlay loop muted />
                </div>
                <div class="two">
                  <picture>
                    <img src="/img/Measuring_Tape.png" alt="" />
                  </picture>
                </div>
              </div>
              <div class="content-wrapper">
                <div class="content-container">
                  <h2>Your Measurements and Designs</h2>
                  <p>
                    Build a personalized measurement profile in minutes and
                    select your own fabric and designs to suit your tastes.
                    Whether you’re dressing for work or that style blog side
                    hustle, get ready to be spoiled by the best fit of your
                    life.
                  </p>
                </div>
              </div>
            </div>
            <div class="desktop-background"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Meature;
