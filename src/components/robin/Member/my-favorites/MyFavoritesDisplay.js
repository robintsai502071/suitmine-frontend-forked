import React from 'react';
import MyFavoritesDisplayItem from './MyFavoritesDisplayItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

function MyFavoritesDisplay() {
  //從後端撈資料
  const [getMyfavorite, setGetMyfavorite] = useState([]);
  useEffect(() => {
    let getStocks = async () => {
      let response = await axios.get(`${API_URL}/myFavorite/1`);
      setGetMyfavorite(response.data);
    };
    getStocks();
  }, []);
  const newGetMyfavorite = getMyfavorite.giftCards;

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
          {newGetMyfavorite?.map((v, i) => {
            const { name, price, product_photo } = v;
            return (
              <div className="col-6 col-lg-3">
                <MyFavoritesDisplayItem
                  name={name}
                  price={price}
                  product_photo={product_photo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyFavoritesDisplay;
