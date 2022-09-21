import React from 'react';
import Videobg from '../../../assests/videos/header_video.mp4';
import { Link } from 'react-router-dom';

function VideoBG() {
  return (
    <>
      <div className="main1">
        <div className="overlay">
          <video className="video1 d-none d-lg-block" src={Videobg} autoPlay loop muted />
          <div className="content">
            <h3 className="text-white1 text-white">為您剪裁出獨特魅力</h3>
            <h3 className="text-white2 text-white">40年專業西裝經驗</h3>
            <Link to={`/measurement`} className="button1 h2">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBG;
