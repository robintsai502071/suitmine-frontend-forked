import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoulderVideo from '../components/images/MeasurementTeaching/shoulder3.mp4';
import armsVideo from '../components/images/MeasurementTeaching/arms3.mp4';
import chestVideo from '../components/images/MeasurementTeaching/chest3.mp4';
import legVideo from '../components/images/MeasurementTeaching/leg3.mp4';
import waistVideo from '../components/images/MeasurementTeaching/waist3.mp4';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', marginTop: '2px' }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', marginTop: '2px' }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  afterChange: (current) => {
    console.log(current);
  },
};
let inputFontSize = {
  fontSize: '65px',
  textAlign: 'center',
};
function MeasurementTeaching() {
  return (
    <>
      <Slider {...settings} className="lapel">
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={true}
            controls={true}
            url={shoulderVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的肩寬(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="shoulder_width"
              style={inputFontSize}
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={true}
            controls={true}
            url={chestVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的胸圍(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="shoulder_width"
              style={inputFontSize}
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={true}
            controls={true}
            url={armsVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的臂長(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="shoulder_width"
              style={inputFontSize}
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={true}
            controls={true}
            url={waistVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的腰圍(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="shoulder_width"
              style={inputFontSize}
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={true}
            controls={true}
            url={legVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的腿長(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="shoulder_width"
              style={inputFontSize}
            />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default MeasurementTeaching;
