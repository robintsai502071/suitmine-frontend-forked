import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom';
import React from 'react';
import logo from '../../images/robert/layout/LOGO.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import swal from 'sweetalert';

const LayoutHeader = () => {
  const [userInfo, setUserInfo] = useState({
    user_id: '',
    email: '',
    name: '',
    photo: '',
  });
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  // const location = useLocation();

  // 登入後轉址到個人檔案頁面 /login to /member/user/xx
  // 有傳遞 state.isLogin = true 的狀態過來，在 LayoutHeader 的時候 setIsLogin 讓登出 icon 出現
  // useEffect(() => {
  //   if (location.state === undefined) return;
  //   if (location.state.isLogin) {
  //     setIsLogin(location.state.isLogin);
  //   }
  // }, []);

  // 載入時就要確認是否登入
  useEffect(() => {
    const checkIsLogin = async () => {
      let response = await axios.get(`${API_URL}/auth/checkIsLogin`, {
        // 允許跨源讀寫 cookie
        withCredentials: true,
      });
      // 有登入就把使用者資訊提取出來
      setIsLogin(true);
      setUserInfo({
        user_id: response.data.user_id,
        email: response.data.email,
        name: response.data.name,
        photo: response.data.photo,
      });
    };
    checkIsLogin();
  }, []);

  const handleLogin = () => {
    // 有登入就轉向會員個人檔案頁面
    if (isLogin === true) {
      history.push(`/member/user/${userInfo.user_id}`);
    } else {
      // 沒登入就回登入頁面
      history.push(`/login`);
    }
  };
  // const checkIsLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response = await axios.get(`${API_URL}/auth/checkIsLogin`, {
  //       // 允許跨源讀寫 cookie
  //       withCredentials: true,
  //     });
  //     // 登入成功就轉址到會員頁
  //     setIsLogin(true);
  //     history.push(`/member/user/${response.data.user_id}`);
  //   } catch (err) {
  //     // 如果尚未登入就轉址到登入頁面
  //     history.push('/login');
  //   }
  // };

  const logout = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.get(`${API_URL}/auth/logout`);
      setIsLogin(false);
      await swal({
        text: '登出成功',
        icon: 'success',
        buttons: false,
        timer: 1500,
      });
      history.push('/login');
    } catch (e) {
      console.error(e);
    }
  };

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
          <Link to="/gift-card" className="btn text-white">
            禮物卡
          </Link>
        </li>
        <li>
          <Link to="/shopping-cart" className="btn text-white">
            購物車
          </Link>
        </li>
        <li>
          <a onClick={handleLogin}>
            <i className="fa-regular fa-user text-white btn"></i>
          </a>
        </li>
        {isLogin && (
          <li>
            <a onClick={logout} className="btn text-white">
              <i className="fa-solid fa-person-running me-2"></i>登出
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LayoutHeader;
