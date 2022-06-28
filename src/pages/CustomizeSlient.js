/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import LayoutFooter from '../components/robert/LayoutFooter';
import LayoutHeader from '../components/robert/LayoutHeader';
import { Image } from 'antd';
import { useState } from 'react';
import CollarImg1 from '../components/images/CustomizeSlient/領子/單排釦/標準領.png';
import CollarImg2 from '../components/images/CustomizeSlient/領子/單排釦/劍領.png';
import CollarImg3 from '../components/images/CustomizeSlient/領子/單排釦/修身領.png';
import CollarImg4 from '../components/images/CustomizeSlient/領子/雙排釦/標準領.png';
import CollarImg5 from '../components/images/CustomizeSlient/領子/雙排釦/劍領.png';
import CollarImg6 from '../components/images/CustomizeSlient/領子/雙排釦/修身領.png';
import CollarImg7 from '../components/images/CustomizeSlient/領子/雙鈕扣/標準領.png';
import CollarImg8 from '../components/images/CustomizeSlient/領子/雙鈕扣/劍領.png';
import CollarImg9 from '../components/images/CustomizeSlient/領子/雙鈕扣/修身領.png';
import ButtonImg1 from '../components/images/CustomizeSlient/鈕扣/單鈕扣.png';
import ButtonImg2 from '../components/images/CustomizeSlient/鈕扣/雙排扣.png';
import ButtonImg3 from '../components/images/CustomizeSlient/鈕扣/雙鈕扣.png';
import DoubleImg1 from '../components/images/CustomizeSlient/口袋/標準口袋.png';
import DoubleImg2 from '../components/images/CustomizeSlient/口袋/無蓋口袋.png';
import DoubleImg3 from '../components/images/CustomizeSlient/口袋/斜蓋口袋.png';

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

  const settingsCollar = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      setCollarPerPage(current);
    },
  };
  const settingsButton = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      setButtonPerPage(current);
    },
  };
  const settingsDouble = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      setDoublePerPage(current);
    },
  };
  const settingsRWD = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => {
      setCollarPerPage(current);
    },
  };

  // lightbox
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  // -------- slider現在頁數狀態 --------
  const [collarPerPage, setCollarPerPage] = useState(0);
  const [buttonPerPage, setButtonPerPage] = useState(0);
  const [doublePerPage, setDoublePerPage] = useState(0);

  // -------- 顏色點擊狀態 --------
  const [changeColor, setChangeColor] = useState([false, false, false]);
  return (
    <>
      <LayoutHeader />
      {/* 桌機板 banner */}
      <div className="banner d-none d-lg-block">
        <div className="banner__wrapper mx-auto position-relative">
          <figure className="banner__wrapper__model position-relative w-75 mx-auto position-relative">
            {/* ------------領子----------- */}
            {buttonPerPage === 0 ? (
              <img
                src={CollarImg1}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 0
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 0 ? (
              <img
                src={CollarImg2}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 1
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 0 ? (
              <img
                src={CollarImg3}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 2
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 1 ? (
              <img
                src={CollarImg4}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 0
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 1 ? (
              <img
                src={CollarImg5}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 1
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 1 ? (
              <img
                src={CollarImg6}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 2
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 2 ? (
              <img
                src={CollarImg7}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 0
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 2 ? (
              <img
                src={CollarImg8}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 1
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}
            {buttonPerPage === 2 ? (
              <img
                src={CollarImg9}
                alt=""
                style={{ zIndex: 2 }}
                className={
                  collarPerPage === 2
                    ? 'banner__wrapper__model__image position-absolute'
                    : 'banner__wrapper__model__image position-absolute d-none'
                }
              />
            ) : (
              ''
            )}

            {/* ------------鈕扣----------- */}
            <img
              src={ButtonImg1}
              alt=""
              style={{ zIndex: 1 }}
              className={
                buttonPerPage === 0
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />
            <img
              src={ButtonImg2}
              alt=""
              style={{ zIndex: 1 }}
              className={
                buttonPerPage === 1
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />
            <img
              src={ButtonImg3}
              alt=""
              style={{ zIndex: 1 }}
              className={
                buttonPerPage === 2
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />
            {/* ------------口袋----------- */}
            <img
              src={DoubleImg1}
              alt=""
              style={{ zIndex: 3 }}
              className={
                doublePerPage === 0
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />
            <img
              src={DoubleImg2}
              alt=""
              style={{ zIndex: 3 }}
              className={
                doublePerPage === 1
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />
            <img
              src={DoubleImg3}
              alt=""
              style={{ zIndex: 3 }}
              className={
                doublePerPage === 2
                  ? 'banner__wrapper__model__image position-absolute'
                  : 'banner__wrapper__model__image position-absolute d-none'
              }
            />

            {/* ------------最底層----------- */}
            <img
              src={require('../images/robin/Custom/banner/main.png')}
              alt=""
              className="banner__wrapper__model__image"
            />
            <h1
              style={{ zIndex: 5 }}
              className="banner__wrapper__model__title text-white position-absolute"
            >
              你的風格<span className="d-block">自己作主</span>
            </h1>
            <div className="banner__wrapper__controller position-absolute">
              <Slider {...settingsCollar} className="lapel">
                <div>
                  <h4 className="text-white">標準領</h4>
                </div>
                <div>
                  <h4 className="text-white">劍領</h4>
                </div>
                <div>
                  <h4 className="text-white">修身領</h4>
                </div>
              </Slider>
              <Slider {...settingsButton} className="buttons my-4">
                <div>
                  <h4 className="text-white">單鈕扣</h4>
                </div>
                <div>
                  <h4 className="text-white">雙排扣</h4>
                </div>
                <div>
                  <h4 className="text-white">雙鈕扣</h4>
                </div>
              </Slider>
              <Slider {...settingsDouble} className="pockets">
                <div>
                  <h4 className="text-white">標準口袋</h4>
                </div>
                <div>
                  <h4 className="text-white">無蓋口袋</h4>
                </div>
                <div>
                  <h4 className="text-white">斜蓋口袋</h4>
                </div>
              </Slider>
            </div>
          </figure>
        </div>
      </div>
      {/* 手機板 banner */}
      <div className="container d-lg-none banner-rwd-bg">
        <div className="banner-rwd">
          <Slider {...settingsRWD} className="banner-rwd__slider">
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
                <h4 className="mb-3">您的選擇</h4>
                <h6 className="mb-5">
                  我們獨特的定制流程允許您為您的西裝選擇您想要的確切定制。從鈕扣和開衩到口袋和翻領，你可以說出你想要的樣子，這就是我們將如何建造它。
                </h6>

                <h4 className="mb-3">多項選擇</h4>
                <h6>
                  我們所有的定制選項都是免費的，並包含在您的西裝價格中。個性化您的購買，直至最後一個細節，以便您獲得您想要的確切服裝。
                </h6>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex">
              <div className="intro1__lightbox w-100">
                <div className="intro1__lightbox__thumb position-relative">
                  <img
                    className="w-100"
                    src={require('../images/robin/Custom//intro1/lightbox_thumb.webp')}
                    alt=""
                  />

                  <button
                    type="button"
                    className="btn position-absolute intro1__lightbox__thumb__btn"
                    onClick={() => setVisible(true)}
                  >
                    <i className="fa-solid fa-images text-white"></i>
                  </button>

                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image
                        src={require('../images/robin/Custom//intro1/lightbox_1.jpg')}
                      />
                      <Image
                        src={require('../images/robin/Custom//intro1/lightbox_2.jpg')}
                      />
                      <Image
                        src={require('../images/robin/Custom//intro1/lightbox_3.jpg')}
                      />
                    </Image.PreviewGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- changeColorBlock --> */}
      <div className="container my-5">
        <div className="changeColorBlock position-relative">
          <div className="position-relative">
            {/* <!-- changeColorBlockRWD --> */}
            <img
              className="w-100 d-lg-none"
              src={require('../images/robin/Custom/changeFabricColor/main-mobile.png')}
              alt=""
            />
            <img
              className={
                changeColor[0] === true
                  ? 'h-100 position-absolute left-0'
                  : 'h-100 position-absolute left-0 d-none'
              }
              src={require('../components/images/CustomizeSlient/西裝顏色/黑色.png')}
              alt=""
            />
            <img
              className={
                changeColor[1] === true
                  ? 'h-100 position-absolute left-0'
                  : 'h-100 position-absolute left-0 d-none'
              }
              src={require('../components/images/CustomizeSlient/西裝顏色/藍色.png')}
              alt=""
            />
            <img
              className={
                changeColor[2] === true
                  ? 'h-100 position-absolute left-0'
                  : 'h-100 position-absolute left-0 d-none'
              }
              src={require('../components/images/CustomizeSlient/西裝顏色/灰色.png')}
              alt=""
            />
            {/* 原圖 */}
            <img
              className="w-100 d-none d-lg-block"
              src={require('../images/robin/Custom/changeFabricColor/main.png')}
              alt=""
            />
            <div className="changeColorBlock__wrapper position-absolute d-flex flex-column">
              <div className=" changeColorBtns d-flex justify-content-around">
                <div
                  onClick={() => {
                    // changeColor.fill(false);
                    const clolorArrA = [true, false, false];
                    setChangeColor(clolorArrA);
                  }}
                  className="btn changeColorBtns__link d-block ps-1"
                >
                  <img
                    className="w-100 changeColorBtns__link__image"
                    src={require('../images/robin/Custom/changeFabricColor/btns/black.webp')}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => {
                    // changeColor.fill(false);
                    const clolorArrB = [false, true, false];
                    setChangeColor(clolorArrB);
                  }}
                  className="btn changeColorBtns__link d-block ps-1 "
                >
                  <img
                    className="w-100 changeColorBtns__link__image"
                    src={require('../images/robin/Custom/changeFabricColor/btns/blue.webp')}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => {
                    // changeColor.fill(false);
                    const clolorArrC = [false, false, true];
                    setChangeColor(clolorArrC);
                  }}
                  className="btn changeColorBtns__link d-block ps-1 "
                >
                  <img
                    className="w-100 changeColorBtns__link__image"
                    src={require('../images/robin/Custom/changeFabricColor/btns/gray.webp')}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <h5 className=" changeColorBlock__title text-center mt-2">
            專注<span className="d-block d-lg-inline">所有細節</span>
          </h5>
        </div>
      </div>

      {/*  intro2  */}
      <div className="container my-5">
        <div className="intro2">
          <div className="row">
            <div className="col-lg-6">
              <div className="intro2__info px-4 px-lg-0 d-lg-flex flex-lg-column justify-content-lg-center h-100">
                <h4 className="mb-3">襯料</h4>
                <h6 className="mb-5">
                  用您選擇的襯料為您的夾克增添個性。我們的襯料有 50
                  多種顏色和獨家圖案可供選擇，不僅經久耐用，而且可以精美地垂掛在您的西裝內部。
                </h6>

                <h4 className="mb-3">添加個人風格</h4>
                <h6>
                  打造獨特的個人風格，我們在任何夾克或西裝外套的內側印上字母組合。盡情享受您的風格，讓您的西裝真正與眾不同。
                </h6>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex order-first">
              <div className="intro2__lightbox w-100">
                <div className="intro2__lightbox__thumb position-relative">
                  <img
                    className="w-100"
                    src={require('../images/robin/Custom//intro2/lightbox_thumb.webp')}
                    alt=""
                  />
                  <button
                    type="button"
                    className="btn position-absolute intro1__lightbox__thumb__btn"
                    onClick={() => setVisible2(true)}
                  >
                    <i className="fa-solid fa-images text-white"></i>
                  </button>

                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible: visible2,
                        onVisibleChange: (vis) => setVisible2(vis),
                      }}
                    >
                      <Image
                        src={require('../images/robin/Custom//intro2/lightbox_1.jpg')}
                      />
                      <Image
                        src={require('../images/robin/Custom//intro2/lightbox_2.jpg')}
                      />
                      <Image
                        src={require('../images/robin/Custom//intro2/lightbox_3.jpg')}
                      />
                    </Image.PreviewGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
}

export default CustomizeSlient;
