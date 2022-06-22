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
import IntroductoryVideo from '../components/images/MeasurementTeaching/介紹影片.mp4';
import { notification } from 'antd';
import LastPageSubmit from '../components/bao/MeasurementTeaching/LastPageSubmit';

//------------------- 未填寫，彈跳窗 -------------------
const openNotification = (placement) => {
  notification.info({
    message: `請輸入欄位`,
    placement,
  });
};
//------------------- 下一頁函示 -------------------
function SampleNextArrow(props) {
  // 傳入 fields, perPage
  const { className, style, onClick, fields, perPage } = props;
  return (
    //1.判斷input欄位是否有值
    //2.判斷現在在第幾頁
    //3.有值就到下一頁
    //4.沒值就顯示錯誤不給去下一頁
    <div
      className={className}
      style={
        perPage === 6
          ? { ...style, display: 'none', marginTop: '2px' }
          : { ...style, display: 'block', marginTop: '2px' }
      }
      onClick={() => {
        console.log(fields, perPage, !fields.shoulder_width && perPage === 0);
        //判斷現在"input欄位有沒有填寫"和"確認現在頁數" 如果兩邊為真就直接return
        if ((!fields.height || !fields.weight) && perPage === 0) {
          openNotification();
          return;
        }
        if (!fields.shoulder_width && perPage === 1) {
          openNotification();
          return;
        }
        if (!fields.chest && perPage === 2) {
          openNotification();
          return;
        }
        if (!fields.arm_length && perPage === 3) {
          openNotification();
          return;
        }
        if (!fields.waist && perPage === 4) {
          openNotification();
          return;
        }
        if (!fields.leg_length && perPage === 5) {
          openNotification();
          return;
        }
       
        //如果以上為真就不執行onClick()
        onClick();
      }}
    />
  );
}
//------------------- 上一頁函示 -------------------
function SamplePrevArrow(props) {
  const { className, style, onClick, perPage } = props;
  return (
    <div
      className={className}
      style={
        perPage === 0
          ? { ...style, display: 'none', marginTop: '2px' }
          : { ...style, display: 'block', marginTop: '2px' }
      }
      onClick={() => {
        if (perPage === 0) return;
        onClick();
      }}
    ></div>
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
    height: '',
    weight: '',
    shoulder_width: '',
    chest: '',
    arm_length: '',
    waist: '',
    leg_length: '',
  });
  // -------------------現在在第幾頁狀態-----------------------
  const [perPage, setperPage] = useState(0);

  // -------------------錯誤訊息狀態狀態-----------------------
  // const [fieldErrors, setFieldErrors] = useState('請填寫欄位');

  // -------------------影片播放狀態-----------------------
  const [playing, setPlaying] = useState(false);

  // -------------------專門處理每個欄位的輸入用函示-----------------------
  let handleFieldChange = (e) => {
    const updatedFields = { ...fields, [e.target.name]: e.target.value };
    // 設定回狀態
    setFields(updatedFields);
  };
  // -------------------處理表單送出的函示-----------------------
  let handleSubmit = (e) => {
    e.preventDefault();
  };

  // -------------------Slider設定檔-----------------------
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    //向下一頁傳入測量狀態、現在第幾頁狀態
    nextArrow: (
      <SampleNextArrow
        setPlaying={setPlaying}
        fields={fields}
        perPage={perPage}
      />
    ),
    prevArrow: <SamplePrevArrow perPage={perPage} />,
    afterChange: (current) => {
      // ----------- 設定現在頁數 -----------
      setperPage(current);
      console.log(current);
    },
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <Slider {...settings} className="lapel">
          {/* -------------------身高體重影片欄位----------------------- */}
          <div className="vedio position-relative">
            <ReactPlayer
              className="reactPlayer"
              playing={playing}
              controls={true}
              url={IntroductoryVideo}
            />
            <div className="heightAndWeightBox d-flex position-absolute">
              <div className="InputBox me-2">
                <p>請填入身高(CM)</p>
                <input
                  placeholder="0"
                  type="number"
                  name="height"
                  style={inputFontSize}
                  onChange={handleFieldChange}
                  value={fields.height}
                  required
                />
              </div>
              <div className="InputBox ms-2">
                <p>請填入體重(KG)</p>
                <input
                  placeholder="0"
                  type="number"
                  name="weight"
                  style={inputFontSize}
                  onChange={handleFieldChange}
                  value={fields.weight}
                  required
                />
              </div>
            </div>
          </div>
          {/* -------------------肩寬影片欄位----------------------- */}
          <div className="vedio position-relative">
            <ReactPlayer
              className="reactPlayer"
              playing={playing}
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
          {/* -------------------胸圍影片欄位----------------------- */}
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
          {/* -------------------臂長影片欄位----------------------- */}
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
          {/* -------------------腰圍影片欄位----------------------- */}
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
          {/* -------------------腿長影片欄位----------------------- */}
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
          {/* -------------------最後一頁展現+送出buton----------------------- */}
          <LastPageSubmit
            fields={fields}
            handleFieldChange={handleFieldChange}
          />
        </Slider>
      </form>
    </>
  );
}

export default MeasurementTeaching;
