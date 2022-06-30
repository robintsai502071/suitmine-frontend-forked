import React from 'react';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';
import MainForm from '../../components/robin/Member/user/MainForm';
import SideBar from '../../components/robin/Member/SideBar';
import MemberMobileView from './MemberMobileView';

function Member() {
  return (
    <>
      <LayoutHeader />
      <div className="container member-container d-none d-lg-block">
        <div className="row">
          <div className="col-2">
            <SideBar sidebarActiveNumber={'0'} />
          </div>
          <div className="col-8 offset-1">
            <MainForm />
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
