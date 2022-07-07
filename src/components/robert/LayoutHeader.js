import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import logo from '../../images/robert/layout/LOGO.svg';

const LayoutHeader = () => {
  return (
    <div className="header bg-dark d-flex justify-content-between p-2">
      <nav role="navigation" className="d-md-none">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <Link to="product-list">
              <li>商品總覽</li>
            </Link>
            <Link to="booking-map">
              <li>門市據點</li>
            </Link>
            <Link to="/member">
              <li>會員中心</li>
            </Link>
            <Link to="/blog">
              <li>部落格</li>
            </Link>
            <Link to="/gift-card">
              <li>禮物卡</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* 連到首頁 */}
      <Link to="/home" className="logo ms-5 d-flex">
        <img src={logo} alt="" />
      </Link>

      <div className="shoppingCar fs-4 me-3 d-md-none">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>

      <ul className="header-menu w-50  justify-content-between align-item-center d-none d-md-flex me-5 py-2">
        <li>
          <Link to="product-list" className="btn text-white">
            商品總覽
          </Link>
        </li>
        <li>
          <Link to="booking-map" className="btn text-white">
            門市據點
          </Link>
        </li>

        <li>
          <Link to="/blog" className="btn text-white">
            部落格
          </Link>
        </li>
        <li>
          <Link to="/gift-card" className="btn text-white">
            禮物卡
          </Link>
        </li>
        <li>
          <Link to="/member/user" className="btn text-white">
            會員中心
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fa-regular fa-user text-white btn"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LayoutHeader;
