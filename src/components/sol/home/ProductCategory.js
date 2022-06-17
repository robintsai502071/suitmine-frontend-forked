import React from 'react';
import product_pic1 from '../../../images/sol/suit1.svg';
import product_pic2 from '../../../images/sol/suit22.svg';
import product_pic3 from '../../../images/sol/pant1.svg';
import product_pic4 from '../../../images/sol/item1.svg';
// import AOS from 'aos';

// componentDidMount() {
//     AOS.init({
//         duration : 2000
//     })
// }

function ProductCategory() {
  return (
    // <div>
    //   <section className="section1 mb-5" data-speed="3" data-type="background">
    //     <div className="container-fluid">
    //       Product Category文字部分
    //       <div className="row">
    //         <div className="col-6 col-md-6 d-flex justify-content-around">
    //           <div className=" col-6 col-md-6 d-flex justify-content-center">
    //             <div className="fs-3 px-md-0 ms-4 mt-5 mb-3 text-black d-flex flex-row flex-nowrap border-bottom border-3 border-dark">
    //               Product<span className="text-black">&nbsp;Category</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       Section 1
    //       Product Category圖片陳列部分
    //       <div className="row justify-content-center">
    //         <div className="cardo col-6 col-md-2 d-flex justify-content-center">
    //           <div className="Section_1_pic">
    //             <img src={product_pic1} className="card-img-top" alt="suit1" />
    //             <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
    //               <h6 className="card-text">西裝類</h6>
    //               <h6 className="card-text text-black-50">Suit</h6>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="cardo col-6 col-md-2 d-flex justify-content-center">
    //           <div className="Section_1_pic">
    //             <img src={product_pic2} className="card-img-top" alt="suit2" />
    //             <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
    //               <h6 className="card-text">襯衫類</h6>
    //               <h6 className="card-text text-black-50">Shirt</h6>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="cardo col-6 col-md-2 d-flex justify-content-center">
    //           <div className="Section_1_pic">
    //             <img src={product_pic3} className="card-img-top" alt="suit3" />
    //             <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
    //               <h6 className="card-text">西裝褲類</h6>
    //               <h6 className="card-text text-black-50">Suit<br/>Pants</h6>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="cardo col-6 col-md-2 d-flex justify-content-center">
    //           <div className="Section_1_pic">
    //             <img src={product_pic4} className="card-img-top" alt="suit4" />
    //             <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
    //               <h6 className="card-text">配件類</h6>
    //               <h6 className="card-text text-black-50">Suit<br/>Accessories</h6>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="container">
      <div
        className="card-group"
        // data-aos="fade-right"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="800"
      >
        <div className="row gx-0 d-flex justify-content-center align-item-center flex-row">
          <h4
            className="product_category_h d-inline-block pb-3 mt-5 mb-3 border-bottom border-2 border-dark"
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
            <div className="card card-group-a">
              <img src={product_pic2} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">西裝類</h5>
                <h6 className="card-title text-center">Suit</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={product_pic1} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">襯衫類</h5>
                <h6 className="card-title text-center">Shirt</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={product_pic3} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-center align-item-center flex-column">
                <h5 className="card-title text-center">西裝褲類</h5>
                <h6 className="card-title text-center">Suit pants</h6>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 col-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div className="card card-group-a">
              <img src={product_pic4} className="card-img-top" alt="..." />
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
