import React from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MainForm from '../../components/robin/Member/user/MainForm';
import SideBar from '../../components/robin/Member/SideBar';
import MemberMobileView from './MemberMobileView';

function Member() {
  const [memberData, setMemberData] = useState([]);

  const { memberId } = useParams();
  const locationInfo = useLocation()
  // 拿會員資料
  useEffect(() => {
    let getMemberData = async () => {
      // 防止使用者直接從瀏覽器改 memberId
      if (!locationInfo.state.memberId) return;
      let response = await axios.get(`${API_URL}/member/${memberId}`);
      setMemberData(response.data.data);
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
