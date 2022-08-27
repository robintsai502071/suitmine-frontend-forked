import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import logo from '../../assests/images/layout/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <>
      <div className="header bg-dark d-flex justify-content-between">
        {/* mobile design ↓↓↓↓↓ */}
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
              <Link to="/blog">
                <li>部落格</li>
              </Link>
              <Link to="/gift-card">
                <li>禮物卡</li>
              </Link>
            </ul>
          </div>
        </nav>

        <Link to="/" className="logo ms-5 d-flex">
          <img src={logo} alt="" />
        </Link>

        <div className="shoppingCart fs-4 me-3 d-md-none">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        {/* mobile design ↑↑↑↑↑↑ */}

        {/* pc design ↓↓↓↓↓ */}
        <ul className="header-menu w-50  justify-content-between align-item-center d-none d-md-flex me-5 py-3">
          <li>
            <Link to="/product-list" className="btn text-white">
              商品總覽
            </Link>
          </li>
          <li>
            <Link to="/booking-map" className="btn text-white">
              門市據點
            </Link>
          </li>

          <li>
            <Link to="/blog" className="btn text-white">
              部落格
            </Link>
          </li>

          <li>
            <Link to="/shopping-cart" className="btn text-white">
              購物車
            </Link>
          </li>
          <li>
            <a>
              <i className="fa-regular fa-user text-white btn"></i>
            </a>
          </li>

          {/* {isLogin && (
          <li>
            <a onClick={logout} className="btn text-white">
              <i className="fa-solid fa-person-running me-2"></i>登出
            </a>
          </li>
        )} */}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
