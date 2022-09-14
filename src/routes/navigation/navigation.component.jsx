import { Link, Outlet, useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../../assests/images/layout/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOut } from '../../utils/axiosApi';
import { setCurrentUser } from '../../store/user/user.slice';
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const handleClickSignIn = () => {
    // 如果不是登入狀態就導向登入頁面
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate('/member');
  };

  const handleClickSignOut = () => {
    signOut();
    // 將 currentUser 設回 null
    dispatch(setCurrentUser(null));
    // 導回登入頁面
    navigate('/login');
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
            <a role="button" onClick={handleClickSignIn}>
              <i className="fa-regular fa-user text-white btn"></i>
            </a>
          </li>

          {currentUser && (
            <li>
              <a
                className="btn text-white"
                role="button"
                onClick={handleClickSignOut}
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
