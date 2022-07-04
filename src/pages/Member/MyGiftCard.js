import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MyGiftCardDisplay from '../../components/robin/Member/my-gift-card/MyGiftCardDisplay';
import SideBar from '../../components/robin/Member/SideBar';

function MyGiftCard() {
  const [giftCardData, setGiftCardData] = useState('');
  let memberId = 2;
  // 拿訂單資料
  useEffect(() => {
    let getgiftCardData = async () => {
      // axios.get(URL, config)
      let response = await axios.get(`${API_URL}/member/${memberId}/giftcards`);

      setGiftCardData(response.data);
      // console.log('ccccccc', response.data);
    };

    getgiftCardData();
  }, []);
  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row justify-content-center">
          <div className="col-2 d-none d-lg-block">
            <SideBar sidebarActiveNumber={'2'} />
          </div>
          <div className="col-12 col-lg-8 offset-lg-1">
            <MyGiftCardDisplay giftCardData={giftCardData}/>
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default MyGiftCard;
