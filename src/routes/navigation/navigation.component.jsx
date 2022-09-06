import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import logo from '../../assests/images/layout/logo.svg';

import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/user/user.slice';
import { signOutGoogle } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.slector';

const Navigation = () => {
  // 每次載入 navigation.component 都要確認是否還在登入狀態
  // useEffect(() => {
  //   const checkIsLogin = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/auth/check-is-login`, {
  //         // 允許跨源讀寫 cookie
  //         withCredentials: true,
  //       });
  //       const user = response.data;
  //       dispatch(setCurrentUser(user));
  //     } catch (error) {
  //       dispatch(setCurrentUser(null));
  //       navigate('/');
  //     }
  //   };
  //   checkIsLogin();
  // }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const handleSignOut = async () => {
    await axios.get(`${API_URL}/auth/logout`, {
      // 如果想要跨源讀寫 cookie
      withCredentials: true,
    });
    // 清除 Firebase 的驗證狀態
    await signOutGoogle();
    dispatch(setCurrentUser(null));
    // 導回登入頁面
    navigate('/login');
  };

  const handleSignIn = () => {
    // 如果不是登入狀態就導向登入頁面
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate('/member');
  };
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
            <Link to="/shopping-cart" className="btn text-white">
              購物車
            </Link>
          </li>
          <li>
            <a role="button" onClick={handleSignIn}>
              <i className="fa-regular fa-user text-white btn"></i>
            </a>
          </li>

          {currentUser && (
            <li>
              <a
                className="btn text-white"
                role="button"
                onClick={handleSignOut}
              >
                <i className="fa-solid fa-person-running me-2"></i>登出
              </a>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
