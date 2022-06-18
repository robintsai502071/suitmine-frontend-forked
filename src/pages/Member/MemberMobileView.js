import React from 'react';

function MemberMobileView() {
  return (
    <>
      <div className="m-header">
        <div className="container">
          <div className="m-header__user-info">
            <figure className="m-header__avatar">
              <img
                className="m-header__avatar__image"
                src="https://fakeimg.pl/250x100/"
                alt=""
              />
            </figure>
            <h1 className="m-header__username">蔡洧洧</h1>
          </div>
        </div>
        <div className="welcome-text">Welcome to SUITMINE!</div>
      </div>

      <div className="m-main">
        <div className="container">
          <div className="m-main__my-order">
            <h2 className="m-main__my-order__title">我的訂單</h2>

            <div className="m-main__my-order__buttons">
              <a href="http://localhost:3000/member/my-order/?activeBtnFromQuery=all" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-clipboard-list mb-2"></i>
                全部訂單
              </a>
              <a href="http://localhost:3000/member/my-order/?activeBtnFromQuery=to-be-sent" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-boxes-packing mb-2"></i>
                待出貨
              </a>
              <a href="http://localhost:3000/member/my-order/?activeBtnFromQuery=sent" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-truck-fast mb-2"></i>
                已出貨
              </a>
              <a href="http://localhost:3000/member/my-order/?activeBtnFromQuery=to-be-commented" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-comment-dots mb-2"></i>
                待評價
              </a>
            </div>
          </div>

          <div className="m-main__my-service">
            <h2 className="m-main__my-service__title">我的服務</h2>

            <div className="m-main__my-service__buttons">
              <a href="http://localhost:3000/member/my-gift-card" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-gift mb-2"></i>
                禮物卡
              </a>
              <a href="http://localhost:3000/member/my-favorites" className="d-flex flex-column align-items-center">
                <i className="fa-solid fa-heart mb-2"></i>
                我的收藏
              </a>

              <a
                href="http://localhost:3000/member/user/change-password"
                className="d-flex flex-column align-items-center"
              >
                <i className="fa-solid fa-user-lock mb-2"></i>
                修改密碼
              </a>

              <a
                href="http://localhost:3000/member/m.user"
                className="d-flex flex-column align-items-center"
              >
                <i className="fa-solid fa-gear mb-2"></i>
                個人檔案
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberMobileView;
