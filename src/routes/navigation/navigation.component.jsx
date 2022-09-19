import React from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

// component
import logo from '../../assests/images/layout/logo.svg';

// user selector
import { setCurrentUser } from '../../store/user/user.slice';
import { selectCurrentUser } from '../../store/user/user.selector';

// cart selector
import { selectCartCount } from '../../store/cart/cart.selector';

// api
import { checkIsLogin, signOut } from '../../utils/axiosApi';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const cartCount = useSelector(selectCartCount);

  // 每次載入頁面都確認是否登入
  useEffect(() => {
    const handleCheckIsLogin = async () => {
      const user = await checkIsLogin();
      // 如果未登入且當前路由在會員頁或結帳頁：跳出彈窗並轉址到登入頁
      if (
        !user &&
        (location.pathname === '/member' ||
          location.pathname === '/checkout' ||
          location.pathname.includes('order-finished'))
      ) {
        swal({
          title: '尚未登入',
          text: '請您重新登入',
          icon: 'info',
          button: '確認',
        });
        dispatch(setCurrentUser(null));
        navigate('/login');
        return;
      }
      // 登入就 set user、未登入將 user 設為 null
      if (!user) {
        dispatch(setCurrentUser(null));
      } else {
        dispatch(setCurrentUser(user));
      }
    };
    handleCheckIsLogin();
  }, []);

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

              <li onClick={handleClickSignIn}>會員中心</li>

              {currentUser && <li onClick={handleClickSignOut}>登出</li>}
            </ul>
          </div>
        </nav>

        <Link to="/" className="logo ms-5 d-flex">
          <img src={logo} alt="" />
        </Link>

        <Link to="/shopping-cart" className="shoppingCart fs-4 me-3 d-md-none">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
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
              {cartCount > 0 && (
                <span class="ms-1 badge rounded-pill bg-light text-dark">
                  {cartCount}
                </span>
              )}
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
