import React from 'react';
import MyFavoritesDisplayItem from './MyFavoritesDisplayItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useParams } from 'react-router-dom';

function MyFavoritesDisplay() {
  let [arr, setArr] = useState([]);
  //從後端撈資料
  const [getMyfavorite, setGetMyfavorite] = useState([]);
  const useId = useParams();
  useEffect(() => {
    let getStocks = async () => {
      console.log('useId', useId.memberId);
      let response = await axios.get(`${API_URL}/myFavorite/${useId.memberId}`);
      setGetMyfavorite(response.data);
      console.log(response.data.my_favorites);
      setArr(response.data.my_favorites);
    };
    getStocks();
  }, []);

  // useEffect(() => {
  //   console.log('useId', useId);
  //   let getStocks = async () => {
  //     let response = await axios.get(`${API_URL}/myFavorite/28`);
  //     setGetMyfavorite(response.data);
  //     console.log(response.data.my_favorites);
  //     setArr(response.data.my_favorites);
  //   };
  //   getStocks();
  // }, [arr]);

  const newGetMyfavorite = getMyfavorite.my_favorites;
  //刪除
  async function handleDelete(e) {
    let response = await axios.delete(
      `${API_URL}/myFavorite/1?product_id=${e}`
    );
    let newGetMyfavoriteDEL = [...newGetMyfavorite].filter((v) => {
      // console.log('新陣列', v.product_id);
      // console.log('舊陣列', e);
      return v.product_id !== e;
    });
    // console.log('newGetMyfavoriteDEL', newGetMyfavoriteDEL);
    setArr(newGetMyfavoriteDEL);
  }

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
            const { name, price, product_photo, product_id } = v;
            return (
              <div className="col-6 col-lg-3">
                <MyFavoritesDisplayItem
                  name={name}
                  price={price}
                  product_photo={product_photo}
                  handleDelete={handleDelete}
                  product_id={product_id}
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
