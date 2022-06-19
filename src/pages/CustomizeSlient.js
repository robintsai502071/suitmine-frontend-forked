import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function CustomizeSlient() {
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
  };
  return (
    <>
      {/* 桌機板 banner */}
      <div className="banner d-none d-lg-block">
        <div className="banner__wrapper mx-auto position-relative">
          <figure className="banner__wrapper__model position-relative">
            <img
              src={require('../images/robin/Custom/banner/main.png')}
              alt=""
              className="banner__wrapper__model__image"
            />
            <h1 className="banner__wrapper__model__title text-white position-absolute">
              你的風格<span className="d-block">自己作主</span>
            </h1>
          </figure>

          <div className="banner__wrapper__controller position-absolute">
            <Slider {...settings} className="lapel">
              <div>
                <h4 className="text-white">標準領</h4>
              </div>
              <div>
                <h4 className="text-white">修身領</h4>
              </div>
              <div>
                <h4 className="text-white">劍領</h4>
              </div>
            </Slider>
            <Slider {...settings} className="buttons my-4">
              <div>
                <h4 className="text-white">單鈕扣</h4>
              </div>
              <div>
                <h4 className="text-white">雙鈕扣</h4>
              </div>
              <div>
                <h4 className="text-white">雙排扣</h4>
              </div>
            </Slider>
            <Slider {...settings} className="pockets">
              <div>
                <h4 className="text-white">標準口袋</h4>
              </div>
              <div>
                <h4 className="text-white">斜蓋口袋</h4>
              </div>
              <div>
                <h4 className="text-white">無蓋斜口袋</h4>
              </div>
              <div>
                <h4 className="text-white">無蓋口袋</h4>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* 手機板 banner */}
      <div className="container d-lg-none banner-rwd-bg">
        <div className="banner-rwd">
          <Slider {...settings} className="banner-rwd__slider">
            <div className="position-relative">
              <img
                src={require('../images/robin/Custom/banner/RWD/1.png')}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="text-white mb-3">經典</h1>
                <h4 className="text-white">標準領 | 雙鈕扣 | 標準口袋</h4>
              </div>
            </div>
            <div className="position-relative">
              <img
                src={require('../images/robin/Custom/banner/RWD/2.png')}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="text-white mb-3">經典</h1>
                <h4 className="text-white">修身領 | 單鈕扣 | 斜蓋口袋</h4>
              </div>
            </div>
            <div className="position-relative">
              <img
                src={require('../images/robin/Custom/banner/RWD/3.png')}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption">
                <h1 className="text-white mb-3">經典</h1>
                <h4 className="text-white">劍領 | 雙排扣 | 無蓋口袋</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CustomizeSlient;
