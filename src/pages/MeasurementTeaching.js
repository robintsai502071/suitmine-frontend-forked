import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoulderVideo from '../components/images/MeasurementTeaching/shoulder3.mp4';
import armsVideo from '../components/images/MeasurementTeaching/arms3.mp4';
import chestVideo from '../components/images/MeasurementTeaching/chest3.mp4';
import legVideo from '../components/images/MeasurementTeaching/leg3.mp4';
import waistVideo from '../components/images/MeasurementTeaching/waist3.mp4';
// -----------------------------------------------------------------

//------------------- 下一頁 -------------------
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    //1.判斷input欄位是否有值
    //2.判斷現在在第幾頁
    //3.有值就到下一頁
    //4.沒值就顯示錯誤不給去下一頁
    <div
      className={className}
      style={{ ...style, display: 'block', marginTop: '2px' }}
      onClick={onClick}
    />
  );
}
//------------------- 上一頁 -------------------
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

//------------------- input-style -------------------
const inputFontSize = {
  fontSize: '65px',
  textAlign: 'center',
};

function MeasurementTeaching() {
  // -------------------測量狀態-----------------------
  const [fields, setFields] = useState({
    shoulder_width: '',
    chest: '',
    arm_length: '',
    waist: '',
    leg_length: '',
  });
  // -------------------perPage-----------------------
  const [perPage, setperPage] = useState(0);

  // -------------------專門處理每個欄位的輸入用函示-----------------------
  let handleFieldChange = (e) => {
    const updatedFields = { ...fields, [e.target.name]: e.target.value };
    // 3. 設定回狀態
    setFields(updatedFields);
  };

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      // ----------- 設定現在頁數 -----------
      setperPage(current + 1);
      console.log(current);
    },
  };

  return (
    <>
      <Slider {...settings} className="lapel">
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={false}
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
              onChange={handleFieldChange}
              value={fields.shoulder_width}
              required
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={false}
            controls={true}
            url={chestVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的胸圍(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="chest"
              style={inputFontSize}
              onChange={handleFieldChange}
              value={fields.chest}
              required
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={false}
            controls={true}
            url={armsVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的臂長(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="arm_length"
              style={inputFontSize}
              onChange={handleFieldChange}
              value={fields.arm_length}
              required
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={false}
            controls={true}
            url={waistVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的腰圍(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="waist"
              style={inputFontSize}
              onChange={handleFieldChange}
              value={fields.waist}
              required
            />
          </div>
        </div>
        <div className="vedio position-relative">
          <ReactPlayer
            className="reactPlayer"
            playing={false}
            controls={true}
            url={legVideo}
          />
          <div className="InputBox position-absolute ">
            <p>請填入您的腿長(CM)</p>
            <input
              placeholder="0"
              type="number"
              name="leg_length"
              style={inputFontSize}
              onChange={handleFieldChange}
              value={fields.leg_length}
              required
            />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default MeasurementTeaching;
