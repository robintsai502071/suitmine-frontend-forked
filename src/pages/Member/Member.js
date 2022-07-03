import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MainForm from '../../components/robin/Member/user/MainForm';
import SideBar from '../../components/robin/Member/SideBar';
import MemberMobileView from './MemberMobileView';

function Member() {
  const [memberData, setMemberData] = useState([]);

  //錯誤訊息用
  const [error, setError] = useState('');

  // const { memberId } = useParams();
  let memberId = 1;
  // 拿會員資料
  useEffect(() => {
    let getMemberData = async () => {
      //try catch 做錯誤處理

      // axios.get(URL, config)
      let response = await axios.get(`${API_URL}/member/${memberId}`);

      // console.log(response);
      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤

      setMemberData(response.data.data);
      console.log('aaaaaaaaa', response.data.data);
      // totalProduct = response.data;
      // console.log([...totalProduct].length);
    };

    getMemberData();
  }, []);
  return (
    <>
      <LayoutHeader />
      <div className="container member-container d-none d-lg-block">
        <div className="row">
          <div className="col-2">
            <SideBar sidebarActiveNumber={'0'} />
          </div>
          <div className="col-8 offset-1">
            <MainForm memberData={memberData} />
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <MemberMobileView />
      </div>

      <LayoutFooter />
    </>
  );
}

export default Member;
