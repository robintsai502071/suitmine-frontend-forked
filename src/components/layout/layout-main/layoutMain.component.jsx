import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './layoutMain.styles.scss'
import icon1 from '../../../assests/images/layout/icon1.svg';
import icon2 from '../../../assests/images/layout/icon2.svg';
import icon3 from '../../../assests/images/layout/icon3.svg';

const LayoutMain = () => {
  return (
    <div>
      <div className="main ">
        <div className="container-fluid px-0 bg-menu">
          <ul className="main-menu  nav row gx-0 text-center">
            <li className="col-12 col-md-4">
              <Link
                to="/measurement"
                className="d-flex justify-content-center align-items-center text-dark p-3"
              >
                <img src={icon2} alt="" />
                詳細解說
              </Link>
            </li>
            <li className="col-12 col-md-4">
              <Link
                to="/customized-show"
                className="d-flex justify-content-center align-items-center text-dark p-3"
              >
                <img src={icon1} alt="" />
                客製化展示間
              </Link>
            </li>
            <li className="col-12 col-md-4">
              <Link
                to="/#"
                className="d-flex justify-content-center align-items-center text-dark p-3"
              >
                <img src={icon3} alt="" />
                測量教學
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
