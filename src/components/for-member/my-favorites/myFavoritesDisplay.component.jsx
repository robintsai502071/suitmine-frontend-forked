import React from 'react';
import MyFavoritesDisplayItem from './myFavoritesDisplayItem.component';
import { useState } from 'react';

function MyFavoritesDisplay() {
  let [arr, setArr] = useState([]);

  return (
    <>
      <div className="my-favorites position-relative">
        <a href="http://localhost:3000/member/user" className="goBackBtn">
          <i className="fa-solid fa-arrow-left-long me-2"></i>
          回上一頁
        </a>

        <div className="my-favorites__header d-flex justify-content-between align-items-center">
          <h5 className="my-favorites__header__title">我的收藏</h5>
        </div>

        <div className="my-favorites__display row">
          {arr?.map((v, i) => {
            return (
              <div className="col-6 col-lg-3">
                <MyFavoritesDisplayItem />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyFavoritesDisplay;
