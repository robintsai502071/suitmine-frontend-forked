import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import AddInCart from '../components/alden/ProductDetail/AddInCart';
import AddDetail from '../components/alden/ProductDetail/AddDetail';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
        <div className="productName">
          <h2>Harrogate Gray Suit</h2>
        </div>
      </div>
      {/* 商品內容 */}
      <div className="container-fluid productContentBox">
        <div className="productContent row">
          {/* 左邊照片樣式(電腦版) */}
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
          {/* 左邊照片樣式(手機板) */}
          <div className="sliderMobile d-block d-sm-none">
            <Slider {...settings}>
              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailMainImg.png')}
                  alt=""
                />
              </div>

              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailSideImgs1.png')}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailSideImgs2.png')}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailSideImgs3.png')}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailSideImgs4.png')}
                  alt=""
                />
              </div>
              <div>
                <img
                  src={require('../images/alden/ProductDetail/productDetailSideImgs5.png')}
                  alt=""
                />
              </div>
            </Slider>
          </div>

          {/* 右邊產品細節 */}
          <div className="col-sm-7">
            {/* 右上方區塊 */}
            <div className="topSection">
              {/* 商品名 */}
              <div className="d-none d-sm-block">
                <h2>Harrogate Gray Suit</h2>
              </div>
              {/* 商品名 */}
              <div className="d-flex justify-content-center d-sm-none ">
                <h2>產品介紹</h2>
              </div>
              {/* 商品敘述 */}
              <div>
                <h5>
                  現在，正視羅蘭特灰西裝的問題，是非常非常重要的。因為，羅蘭特灰西裝勢必能夠左右未來。羅蘭特灰西裝絕對是史無前例的。我們需要淘汰舊有的觀念，羅蘭特灰西裝似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。
                </h5>
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
                    <h5>顏色</h5>
                  </div>
                  <div>
                    <h5>灰</h5>
                  </div>
                </div>
                {/* 花紋 */}
                <div>
                  <div>
                    <h5>花紋</h5>
                  </div>
                  <div>
                    <h5>線條</h5>
                  </div>
                </div>
                {/* 材質 */}
                <div>
                  <div>
                    <h5>材質</h5>
                  </div>
                  <div>
                    <h5>95%羊毛，5%克什米爾</h5>
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

      {/* 評論  */}
      <div className="container-fluid comment">
        {/* 評論區塊 */}
        <div className="commentContainer">
          <div className="commentBlock">
            {/* 使用者訊息 */}
            <div className="topSection">
              {/* 使用者照片ID */}
              <div>
                <div className="photo"></div>
                <div className="userName">
                  <h3>cklasjl23412341</h3>
                </div>
              </div>
              {/* 評論建立時間 */}
              <div className="date">
                <h3 className="d-none d-sm-block">2022/06/06</h3>
                <h5 className="d-block d-sm-none">2022/06/06</h5>
              </div>
            </div>
            {/* 評論內容 */}
            <div className="buttonSection">
              <h3>
                問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。{' '}
              </h3>
            </div>
          </div>
          <div className="commentBlock">
            {/* 使用者訊息 */}
            <div className="topSection">
              {/* 使用者照片ID */}
              <div>
                <div className="photo"></div>
                <div className="userName">
                  <h3>cklasjl23412341</h3>
                </div>
              </div>
              {/* 評論建立時間 */}
              <div className="date">
                <h3 className="d-none d-sm-block">2022/06/06</h3>
                <h5 className="d-block d-sm-none">2022/06/06</h5>
              </div>
            </div>
            {/* 評論內容 */}
            <div className="buttonSection">
              <h3>
                問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。{' '}
              </h3>
            </div>
          </div>
          <div className="commentBlock">
            {/* 使用者訊息 */}
            <div className="topSection">
              {/* 使用者照片ID */}
              <div>
                <div className="photo"></div>
                <div className="userName">
                  <h3>cklasjl23412341</h3>
                </div>
              </div>
              {/* 評論建立時間 */}
              <div className="date">
                <h3 className="d-none d-sm-block">2022/06/06</h3>
                <h5 className="d-block d-sm-none">2022/06/06</h5>
              </div>
            </div>
            {/* 評論內容 */}
            <div className="buttonSection">
              <h3>
                問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。{' '}
              </h3>
            </div>
          </div>
          <div className="commentBlock">
            {/* 使用者訊息 */}
            <div className="topSection">
              {/* 使用者照片ID */}
              <div>
                <div className="photo"></div>
                <div className="userName">
                  <h3>cklasjl23412341</h3>
                </div>
              </div>
              {/* 評論建立時間 */}
              <div className="date">
                <h3 className="d-none d-sm-block">2022/06/06</h3>
                <h5 className="d-block d-sm-none">2022/06/06</h5>
              </div>
            </div>
            {/* 評論內容 */}
            <div className="buttonSection">
              <h3>
                問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。
              </h3>
            </div>
          </div>
        </div>
        {/* 頁數 */}
        <div className="pages"></div>
      </div>

      {/* footer */}
      <div>
        <LayoutFooter />
      </div>
    </>
  );
}

export default ProductDetail;
