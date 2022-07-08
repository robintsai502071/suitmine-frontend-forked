import React, { useEffect, useState, useParams } from 'react';
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
import AOS from 'aos';
function SampleNextArrow(props) {
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
  // --------- slider設定檔 ---------
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // --------- 商品資訊狀態 ---------
  const [product, setProduct] = useState([]);

  // --------- 商品資訊狀態 ---------
  const [productDetails, setProductDetails] = useState({
    collar: '',
    pocket: '',
    button: '',
  });

  // const { stockId } = useParams();

  // ========== 從後端傳送單筆商品資料過來(待用) ==========
  const productAxios = async () => {
    const responseProduct = await axios.get(
      `${API_URL}/prodetail/products/1`
      // , { params: { product }},
    );
    // console.log(product[0].productDetailPhoto1);
    console.log(responseProduct.data);

    setProduct(responseProduct.data);
  };
  console.log(product[0]?.productDetailPhoto1);

  // ----- 刷新頁面 -----
  useEffect(() => {
    //呼叫productAxios
    productAxios();
  }, []);

  // ----- 刷新一次 -----
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
            {/* 調用一個東西的時候 */}
            <h1>{product[0]?.productName}</h1>
          </div>
        </div>
        {/* 背景圖片(手機板) */}
        <div className="container-fluid productDetailBannerMobile imgControl">
          <img
            src={require('../images/alden/ProductDetail/productDetailBannerImgMobile.png')}
            alt=""
          />
          <div className="productName text-center">
            <h4>{product[0]?.productName}</h4>
          </div>
        </div>
        {/*---------- 商品內容 ----------*/}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="container-fluid productContentBox "
        >
          <div className="productContent row">
            {/*---------- 左邊照片樣式(電腦版) ----------*/}
            <div className="col-5 imgControl d-none d-sm-block">
              {/* ------ 大圖 ------*/}
              <img
                src={`http://localhost:3001/${product[0]?.productPhoto}`}
                alt=""
              />
              <Image.PreviewGroup>
                {/* ------ 細節小圖 ------*/}
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto1}`}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto2}`}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto3}`}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto4}`}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto5}`}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto6}`}
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
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto1}`}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto2}`}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto3}`}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto4}`}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto5}`}
                    alt=""
                  />
                </div>
                <div className="RwdImg">
                  <img
                    src={`http://localhost:3001/${product[0]?.productDetailPhoto6}`}
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
                  <h4 className="text-nowrap">{product[0]?.productName}</h4>
                </div>
                {/* 商品名 */}
                <div className="d-flex justify-content-center d-sm-none ">
                  <h2 className="d-md-flex d-none">產品介紹</h2>
                  <h3 className="d-flex d-md-none">產品介紹</h3>
                </div>
                {/* 商品敘述 */}
                <div className=" productNarrative">
                  <h6>{product[0]?.productContent}</h6>
                </div>
                {/* 單價 */}
                <div className="my-3 priceTextBox">
                  <h4>NTD $ {product[0]?.price}</h4>
                </div>
                <div
                  // 如果商品客製化都為空字串就不顯示
                  className={`customized ${
                    productDetails.collar === '' &&
                    productDetails.pocket === '' &&
                    productDetails.button === '' &&
                    'd-none'
                  }`}
                >
                  <h6>
                    商品客製化細節 : {productDetails.collar} /
                    {productDetails.pocket} / {productDetails.button}
                  </h6>
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
                      <h6>{product[0]?.color}</h6>
                    </div>
                  </div>
                  {/* 花紋 */}
                  <div>
                    <div>
                      <h6>花紋</h6>
                    </div>
                    <div>
                      <h6>{product[0]?.pattern}</h6>
                    </div>
                  </div>
                  {/* 材質 */}
                  <div>
                    <div>
                      <h6>材質</h6>
                    </div>
                    <div>
                      <h6>{product[0]?.texture}</h6>
                    </div>
                  </div>
                </div>
                {/* 按鈕 */}
                <div className="btns">
                  {/* 客製化細節 */}
                  <div className="addDetail">
                    <AddDetail
                      product={product}
                      setProductDetails={setProductDetails}
                      productDetails={productDetails}
                    />
                  </div>
                  {/* 加入購物車 */}
                  <div className="addInCart">
                    {/* 傳送資料給AddInCart */}
                    <AddInCart
                      productDetails={productDetails}
                      product={product}
                    />
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
