import React, { Fragment } from 'react';
import LayoutFooter from '../../components/robert/LayoutFooter';
import LayoutHeader from '../../components/robert/LayoutHeader';

import SideBar from '../../components/robin/Member/SideBar';
import ChangePasswordForm from '../../components/robin/Member/user/ChangePasswordForm';

function Member() {
  return (
    <>
      <LayoutHeader />
      <div className="container member-container">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-8 offset-1">
            <ChangePasswordForm />
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default Member;
