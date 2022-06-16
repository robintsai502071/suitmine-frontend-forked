import React from 'react';
import icon1 from '../../images/robert/layout/icon1.svg';
import icon2 from '../../images/robert/layout/icon2.svg';
import icon3 from '../../images/robert/layout/icon3.svg';

const LayoutMain = () => {
  return (
    <div>
      <div className="main ">
        <div className="container-fluid px-0 bg-menu">
          <ul className="main-menu  nav row gx-0 text-center">
            <li className="col-4">
              <a href="" className="d-flex justify-content-center align-items-center text-dark p-3">
                <img src={icon2} alt="" />
                詳細解說
              </a>
            </li>
            <li className="col-4">
              <a href="" className="d-flex justify-content-center align-items-center text-dark p-3">
                <img src={icon1} alt="" />
                客製化教學
              </a>
            </li>
            <li className="col-4">
              <a href="" className="d-flex justify-content-center align-items-center text-dark p-3">
                <img src={icon3} alt="" />
                測量教學
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
