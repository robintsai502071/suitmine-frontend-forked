import React from 'react';
import logo from '../../images/robert/layout/LOGO.svg'


const LayoutHeader = () => {
  return (
    <div class="header bg-dark d-flex justify-content-between p-2">
      <nav role="navigation" class="d-md-none">
        <div class="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul class="menu">
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

      <div class="log ms-5 d-flex">
        <img src={logo} alt="" />
      </div>
      <div class="shoppingCar fs-4 me-3 d-md-none">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>

      <ul class="header-menu w-50  justify-content-between align-item-center d-none d-md-flex">
        <li>
          <a href="" class="btn text-white">
            商品總覽
          </a>
        </li>
        <li>
          <a href="" class="btn text-white">
            門市據點
          </a>
        </li>
        <li>
          <a href="" class="btn text-white">
            會員中心
          </a>
        </li>
        <li>
          <a href="" class="btn text-white">
            部落格
          </a>
        </li>
        <li>
          <a href="" class="btn text-white">
            禮物卡
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LayoutHeader;
