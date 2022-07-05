import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MyFavoritesDisplay from '../../components/robin/Member/my-favorites/MyFavoritesDisplay';
import SideBar from '../../components/robin/Member/SideBar';

function MyFavorites() {
  // const [favoritesData, setFavoritesData] = useState('');
  // let memberId = 2;
  // // 拿訂單資料
  // useEffect(() => {
  //   let getFavoritesData = async () => {
  //     // axios.get(URL, config)
  //     let response = await axios.get(`${API_URL}/member/${memberId}/my-favorites`);

  //     setFavoritesData(response.data);
  //     console.log('ccccccc', response.data);
  //   };

  //   getFavoritesData();
  // }, []);

  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row justify-content-center">
          <div className="col-2 d-none d-lg-block">
            <SideBar sidebarActiveNumber={'3'} />
          </div>
          <div className="col-12 col-lg-8 offset-lg-1">
            <MyFavoritesDisplay />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default MyFavorites;
