import React from 'react';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';

import SideBar from '../../components/robin/Member/SideBar';
import ChangePasswordForm from '../../components/robin/Member/user/ChangePasswordForm';

function Member() {
  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row justify-content-center">
          <div className="col-2 d-none d-lg-block">
            <SideBar />
          </div>
          <div className="col-10 col-lg-8 offset-lg-1 position-relative">
            <ChangePasswordForm />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default Member;
