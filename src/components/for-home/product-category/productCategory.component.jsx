import React from 'react';
import product_pic1 from '../../../assests/images/product-category/suit1.svg';
import product_pic2 from '../../../assests/images/product-category/suit22.svg';
import product_pic3 from '../../../assests/images/product-category/pant1.svg';
import product_pic4 from '../../../assests/images/product-category/item1.svg';
import { Link } from 'react-router-dom';

function ProductCategory() {
  return (
    <div className="container">
      <div
        className="card-group11"
        // data-aos="fade-down"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="800"
      >
        <div className="row gx-0 d-flex justify-content-center align-item-center flex-row card-group11-outer">
          <h4
            className="product_category_h mt-5 pb-3 mb-3"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            Product Category
          </h4>
          <div
            className="col-md-2 col-5 "
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Link to="/product-list">
              <div className="card card-group-a">
                <img src={product_pic2} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-item-center flex-column">
                  <h5 className="card-title text-center">西裝類</h5>
                  <h6 className="card-title text-center">Suit</h6>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Link to="/product-list">
              <div className="card card-group-a">
                <img src={product_pic1} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-item-center flex-column">
                  <h5 className="card-title text-center">襯衫類</h5>
                  <h6 className="card-title text-center">Shirt</h6>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Link to="/product-list">
              <div className="card card-group-a">
                <img src={product_pic3} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-item-center flex-column">
                  <h5 className="card-title text-center">西裝褲類</h5>
                  <h6 className="card-title text-center">Suit pants</h6>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <Link to="/product-list">
              <div className="card card-group-a">
                <img src={product_pic4} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-item-center flex-column">
                  <h5 className="card-title text-center">配件類</h5>
                  <h6 className="card-title text-center">Suit Accessories</h6>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
