import React, { Fragment } from 'react';
import LayoutFooter from '../components/robert/LayoutFooter';
import LayoutHeader from '../components/robert/LayoutHeader';
import MainForm from '../components/robin/Member/MainForm';
import SideBar from '../components/robin/Member/SideBar';

function Member() {
  return (
    <>
      <LayoutHeader></LayoutHeader>
      <div className="container member-container">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-8 offset-1">
            <MainForm />
          </div>
        </div>
      </div>
      <LayoutFooter></LayoutFooter>
    </>
  );
}

export default Member;
