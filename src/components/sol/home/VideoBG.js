import React from 'react';
import Videobg from '../../../images/sol/header_video.mp4';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function VideoBG() {
  return (
    <>
      <div className="main1">
        <div className="overlay">
          <video className="video1" src={Videobg} autoPlay loop muted />
          <div className="content">
            <h3 className="text-white1 text-white">為您剪裁出獨特魅力</h3>
            <h3 className="text-white2 text-white">40年專業西裝經驗</h3>
            <Link to={`/measurement`} className="button1 h2">
              {/* <div> */}
              READ MORE
              {/* </div> */}
            </Link>
            {/* <a href="#/" className="button1 h2">
              READ MORE
            </a> */}
          </div>
        </div>
      </div>

      {/* <div className="content">
        <h1 className="text-white1">為您剪裁出獨特魅力</h1>
        <h1 className="text-white2">40年專業西裝經驗</h1>
        <a href="#/" className="button1 h2">
          READ MORE
        </a>
      </div>

      <div className="overlay">
        <video className="video1" src={Videobg} autoPlay loop muted />
      </div> */}
    </>
  );
}

export default VideoBG;
