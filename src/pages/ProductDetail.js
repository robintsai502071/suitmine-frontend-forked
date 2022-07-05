import React, { useEffect, useState } from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import AddInCart from '../components/alden/ProductDetail/AddInCart';
import AddDetail from '../components/alden/ProductDetail/AddDetail';
import Comment from '../components/alden/ProductDetail/Comment/Comment';
import axios from 'axios';
import { Image } from 'antd';
import Slider from 'react-slick';
import { API_URL } from '../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SampleNextArrow(props) {
  // --------- 商品資訊狀態(待用) ---------
  const [product, setProduct] = useState({});

  // ========== 從後端傳送單筆商品資料過來(待用) ==========
  const productAxios = async () => {
    const responseProduct = await axios.get(`${API_URL}/prodetail/`);
    setProduct(responseProduct.data);
    console.log(responseProduct.data);
  };

  // ----- 刷新頁面 -----
  useEffect(() => {
    //呼叫productAxios
    productAxios();
  }, []);

  // --------- slider設定檔 ---------
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

function ProductDetail() {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="container-fluid ProductDetailmain">
        {/* header */}
        <div>
          <LayoutHeader />
        </div>
        {/* 背景圖片 */}
        <div className="container-fluid productDetailBanner">
          <img
            src={require('../images/alden/ProductDetail/productDetailBannerImg.png')}
            alt=""
          />
          <div className="fliter"></div>
          <div className="productName">
            <h1>Harrogate Gray Suit</h1>
          </div>
        </div>
        {/* 背景圖片(手機板) */}
        <div className="container-fluid productDetailBannerMobile imgControl">
          <img
            src={require('../images/alden/ProductDetail/productDetailBannerImgMobile.png')}
            alt=""
          />
          <div className="productName text-center">
            <h4>Harrogate Gray Suit</h4>
          </div>
        </div>
        {/*---------- 商品內容 ----------*/}
        <div className="container-fluid productContentBox">
          <div className="productContent row">
            {/*---------- 左邊照片樣式(電腦版) ----------*/}
            <div className="col-5 imgControl d-none d-sm-block">
              <img
                src={require('../images/alden/ProductDetail/productDetailMainImg.png')}
                alt=""
              />
              <Image.PreviewGroup>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs1.png')}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs2.png')}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs3.png')}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs4.png')}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs5.png')}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('../images/alden/ProductDetail/productDetailSideImgs6.png')}
                    alt=""
                  />
                </div>
              </Image.PreviewGroup>
            </div>
            {/*---------- 左邊照片樣式(手機板) ----------*/}
            <div className="sliderMobile d-block d-sm-none">
              <Slider {...settings}>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailMainImg.png')}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailSideImgs1.png')}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailSideImgs2.png')}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailSideImgs3.png')}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailSideImgs4.png')}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={require('../images/alden/ProductDetail/productDetailSideImgs5.png')}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            {/*---------- 右邊產品細節 ----------*/}
            <div className="col-sm-7 d-flex flex-column justify-content-md-between">
              {/* 右上方區塊 */}
              <div className="topSection">
                {/* 商品名 */}
                <div className="d-none d-sm-block">
                  <h4 className="text-nowrap">Harrogate Gray Suit</h4>
                </div>
                {/* 商品名 */}
                <div className="d-flex justify-content-center d-sm-none ">
                  <h2 className="d-md-flex d-none">產品介紹</h2>
                  <h3 className="d-flex d-md-none">產品介紹</h3>
                </div>
                {/* 商品敘述 */}
                <div className=" productNarrative">
                  <h6>
                    現在，正視羅蘭特灰西裝的問題，是非常非常重要的。因為，羅蘭特灰西裝勢必能夠左右未來。羅蘭特灰西裝絕對是史無前例的。我們需要淘汰舊有的觀念，羅蘭特灰西裝似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。
                  </h6>
                </div>
                {/* 單價 */}
                <div className="d-none d-sm-block">
                  <h4>NT $3500</h4>
                </div>
              </div>
              {/* 右下方區塊 */}
              <div className="bottomSection">
                {/* 材質 */}
                <div className="texture">
                  <div className="textureTitle">
                    <div>
                      <h4>商品細節</h4>
                    </div>
                  </div>
                  {/* 顏色 */}
                  <div>
                    <div>
                      <h6>顏色</h6>
                    </div>
                    <div>
                      <h6>灰</h6>
                    </div>
                  </div>
                  {/* 花紋 */}
                  <div>
                    <div>
                      <h6>花紋</h6>
                    </div>
                    <div>
                      <h6>線條</h6>
                    </div>
                  </div>
                  {/* 材質 */}
                  <div>
                    <div>
                      <h6>材質</h6>
                    </div>
                    <div>
                      <h6>95%羊毛，5%克什米爾</h6>
                    </div>
                  </div>
                </div>
                {/* 按鈕 */}
                <div className="btns">
                  {/* 客製化細節 */}
                  <div className="addDetail">
                    <AddDetail />
                  </div>
                  {/* 加入購物車 */}
                  <div className="addInCart">
                    <AddInCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------- 評論 ----------*/}
        <Comment />
        {/* footer */}
        <div>
          <LayoutFooter />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
