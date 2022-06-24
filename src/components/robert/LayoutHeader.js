import React from 'react';
import logo from '../../images/robert/layout/LOGO.svg'


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
            <a href="#">
              <li>商品總覽</li>
            </a>
            <a href="#">
              <li>門市據點</li>
            </a>
            <a href="#">
              <li>會員中心</li>
            </a>
            <a href="#">
              <li>部落格</li>
            </a>
            <a href="#">
              <li>禮物卡</li>
            </a>
          </ul>
        </div>
      </nav>

      <div className="logo ms-5 d-flex">
        <img src={logo} alt="" />
      </div>
      <div className="shoppingCar fs-4 me-3 d-md-none">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>

      <ul className="header-menu w-50  justify-content-between align-item-center d-none d-md-flex me-5 py-2">
        <li>
          <a href="" className="btn text-white">
            商品總覽
          </a>
        </li>
        <li>
          <a href="" className="btn text-white">
            門市據點
          </a>
        </li>
        <li>
          <a href="" className="btn text-white">
            會員中心
          </a>
        </li>
        <li>
          <a href="" className="btn text-white">
            部落格
          </a>
        </li>
        <li>
          <a href="" className="btn text-white">
            禮物卡
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LayoutHeader;
