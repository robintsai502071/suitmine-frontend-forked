import React from 'react';
import middieImageBar from '../../../images/sol/middle_img_bar.jpg';

function SuitStyle() {
  return (
    <>
      <section
        className="section2 d-flex justify-content-center align-items-center"
        data-speed="3"
        data-type="background"
      >
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center ">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="col-md-8 col-12 d-flex justify-content-center flex-column align-items-center"
            >
              <div className="fs-3 suit-style-title border-bottom border-3 border-dark px-2 mb-4">
                <h4>Suit Style</h4>
              </div>
              <figure className="w-75 section2-bg d-flex justify-content-center align-items-center">
                <img className="w-100" src={middieImageBar} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuitStyle;
