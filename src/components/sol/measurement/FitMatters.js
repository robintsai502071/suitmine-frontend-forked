import React from 'react';

function FitMatters() {
  return (
    <>
      <div className="fit-matter">
        <h2 className="fit-matter-title">FIT MATTER</h2>
      </div>

      <div className="container d-lg-inline d-none">
        <section className="fit-matters-describe position-absolute d-lg-inline d-none">
          <h5 className=" d-lg-inlined-none">Made to Fit You</h5>
          <p className="fit-matters-p mt-4 ">
            由於我們的每件衣服都是根據您的精確尺寸所製作，
            <span className="fit-matters-span d-inline d-sm-block">
              因此以往尋找適合您特定體型的衣服已成過去式
            </span>
          </p>
        </section>
      </div>
    </>
  );
}

export default FitMatters;
