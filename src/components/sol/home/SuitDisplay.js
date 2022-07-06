import React from 'react';
import suit_style1 from '../../../images/sol/suit-style1.svg';
import suit_style2 from '../../../images/sol/suit-style2.svg';
import suit_style3 from '../../../images/sol/suit-style3.svg';
import suit_style4 from '../../../images/sol/suit-style4.svg';
// import AOS from 'aos';

// componentDidMount() {
//     AOS.init({
//         duration : 2000
//     })
// }

function ProductCategory() {
  return (
    <div className="container">
      <div
        className="card-group"
        // data-aos="fade-right"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="800"
      >
        <h2
          className="product_category_h d-inline-block pb-3 mt-5 mb-3 border-bottom border-2 border-dark"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="800"
        >
          Suit Style
        </h2>
        <div className="row gx-5 d-flex justify-content-center align-item-center flex-row">
          <div
            className="col-md-3 col-5 "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={suit_style1} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">西裝類</h5>
                <h6 className="card-title text-center">Suit</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={suit_style2} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">襯衫類</h5>
                <h6 className="card-title text-center">Shirt</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-5"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={suit_style3} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">西裝褲類</h5>
                <h6 className="card-title text-center">Suit pants</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-3 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={suit_style4} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">配件類</h5>
                <h6 className="card-title text-center">Suit Accessories</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
