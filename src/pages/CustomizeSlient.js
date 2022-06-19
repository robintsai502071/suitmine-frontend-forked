import React, { Component, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useEffect } from 'react';
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

  // lightbox
  const images = [
    'https://source.unsplash.com/I1ASdgphUH4/800x599',
    'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
    'https://source.unsplash.com/Dm-qxdynoEc/800x799',
    'https://source.unsplash.com/qDkso9nvCg0/600x799',
    'https://source.unsplash.com/iecJiKe_RNg/600x799',
    'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    'https://source.unsplash.com/zh7GEuORbUw/600x799',
    'https://source.unsplash.com/PpOHJezOalU/800x599',
    'https://source.unsplash.com/I1ASdgphUH4/800x599',
  ];
  // lightbox hooks
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    
    return () => {
      /* 下面是 componentWillUnmount */
      /* 上面是 componentWillUnmount */
      setIsOpen(false)
    };
  }, [
    [isOpen]
  ]); /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */

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

      {/*  intro1  */}
      <div className="container my-5">
        <div className="intro1">
          <div className="row">
            <div className="col-lg-6">
              <div className="intro1__info px-4 px-lg-0 d-lg-flex flex-lg-column justify-content-lg-center h-100">
                <h2 className="mb-3">您的選擇</h2>
                <h4 className="mb-5">
                  我們獨特的定制流程允許您為您的西裝選擇您想要的確切定制。從鈕扣和開衩到口袋和翻領，你可以說出你想要的樣子，這就是我們將如何建造它。
                </h4>

                <h2 className="mb-3">多項選擇</h2>
                <h4>
                  我們所有的定制選項都是免費的，並包含在您的西裝價格中。個性化您的購買，直至最後一個細節，以便您獲得您想要的確切服裝。
                </h4>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex">
              <div className="intro1__lightbox w-100">
                <div className="intro1__lightbox__thumb position-relative">
                  <img
                    className="w-100"
                    // src="./images/intro1/lightbox_thumb.webp"
                    src={require('../images/robin/Custom//intro1/lightbox_thumb.webp')}
                    alt=""
                  />

                  <button
                    type="button"
                    className="btn position-absolute intro1__lightbox__thumb__btn"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <i className="fa-solid fa-images text-white"></i>
                  </button>

                  {isOpen && (
                    <Lightbox
                      mainSrc={images[photoIndex]}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      onCloseRequest={() => setIsOpen(false)}
                      onMovePrevRequest={() =>
                        setPhotoIndex(
                          (photoIndex + images.length - 1) % images.length
                        )
                      }
                      onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                      }
                      key={images[photoIndex]}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomizeSlient;
