import React from 'react';

function SuitDisplay() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="cardo col-6 col-md-4 d-flex justify-content-center">

          {/* div style="width: 12rem;" */}
            <div>
              <img
                src="./indexImages/熱門商品2.svg"
                className="card-img-top"
                alt="suit1"
              />
              <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
                <h6 className="card-text text-black">xxx</h6>
                <h6 className="card-text text-black-50">5100元</h6>
              </div>
            </div>
          </div>

          <div className="cardo col-6 col-md-4 d-flex justify-content-center">
            <div>
              <img
                src="./indexImages/熱門商品2.svg"
                className="card-img-top"
                alt="suit2"
              />
              <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
                <h6 className="card-text text-black">yyy</h6>
                <h6 className="card-text text-black-50">10000元</h6>
              </div>
            </div>
          </div>

          <div className="cardo col-6 col-md-4 d-flex justify-content-center">
            <div>
              <img
                src="./indexImages/熱門商品2.svg"
                className="card-img-top"
                alt="suit3"
              />
              <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
                <h6 className="card-text text-black">aaa</h6>
                <h6 className="card-text text-black-50">199元</h6>
              </div>
            </div>
          </div>

          <div className="cardo col-6 col-md-4 d-flex justify-content-center">
            <div>
              <img
                src="./indexImages/熱門商品2.svg"
                className="card-img-top"
                alt="suit4"
              />
              <div className="card-body d-flex justify-content-center flex-column align-items-center mt-md-2">
                <h6 className="card-text text-black">bbb</h6>
                <h6 className="card-text text-black-50">8999元</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuitDisplay;
