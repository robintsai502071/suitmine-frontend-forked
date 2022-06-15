import React from 'react';

const LayoutFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer bg-dark row justify-content-between">
        <ul className="col-md-3 text-center text-md-start">
          <li>
            <a href="" className="btn footer-btn-title text-white">
              關於我們
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              品牌概念
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              品牌故事
            </a>
          </li>
        </ul>
        <ul className="col-md-3 text-center text-md-start">
          <li>
            <a href="" className="btn footer-btn-title text-white ">
              聯絡我們
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              門市資訊
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              聯絡客服
            </a>
          </li>
        </ul>
        <ul className="col-md-3 text-center text-md-start">
          <li>
            <a href="" className="btn footer-btn-title text-white">
              會員制度
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              會員制度
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              會員回饋
            </a>
          </li>
        </ul>
        <ul className="col-3 d-none d-md-block">
          <li>
            <a href="" className="btn footer-btn-title text-white">
              聯絡客服
            </a>
          </li>
          <li>
            <a href="" className="btn text-white ">
              客服信箱：ispan@ggmail.com
            </a>
          </li>
          <li>
            <a href="" className="btn text-white">
              客服時間：週一 ～ 週五 9:00-18:00
            </a>
          </li>
        </ul>
        <ul className="footer-icon nav mt-4 justify-content-center justify-content-md-start">
          <li className="mx-2">
            <a href="#">
              <img
                src="https://candace802.github.io/RWD-homework/images/fb_icon.png"
                alt="facebook"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                src="https://candace802.github.io/RWD-homework/images/tw_icon.png"
                alt="twitter"
              />
            </a>
          </li>
          <li className="mx-2">
            <a href="#">
              <img
                src="https://candace802.github.io/RWD-homework/images/ig_icon.png"
                alt="instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutFooter;
