import React, { Fragment } from 'react';
import MainForm from '../components/robin/Member/MainForm';
import SideBar from '../components/robin/Member/SideBar';

function Member() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
            <MainForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
