import React, { useState } from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutFooter from '../components/robert/LayoutFooter';
import AddInCart from '../components/alden/ProductDetail/AddInCart';
import AddDetail from '../components/alden/ProductDetail/AddDetail';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function ProductDetail() {
  // --------- 照片光箱狀態 ---------
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* --------- 商品描述 ---------*/}
      <div className="container productDescribe">
        <div className="row productDetailRow d-flex justify-content-between">
          {/* --------- 商品照片光箱 ---------*/}
          <div className="col-5 productDetailImgBox">
            <div className="productImgBox">
              <Image
                preview={{
                  visible: false,
                }}
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                onClick={() => setVisible(true)}
              />
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
                  <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                  <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                  <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                </Image.PreviewGroup>
              </div>
              {/* --------- 商品照片小光箱 ---------*/}
              <div className="row">
                <Image.PreviewGroup>
                  <div className="col-3 productLightBox-sm">
                    <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                  </div>
                  <div className="col-3 productLightBox-sm">
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                  </div>
                  <div className="col-3 productLightBox-sm">
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                  </div>
                  <div className="col-3 productLightBox-sm">
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                  </div>
                </Image.PreviewGroup>
              </div>
            </div>
          </div>
          {/* --------- 商品描述 ---------*/}
          <div className="col-6 productDetailTextBox d-flex flex-column justify-content-between ps-5">
            <div className="text-Box">
              <div className="title my-5">
                <h2>Harrogate Gray Suit</h2>
              </div>
              <div className="detailText my-5">
                <h6>
                  現在，正視羅蘭特灰西裝的問題，是非常非常重要的。因為，羅蘭特灰西裝勢必能夠左右未來。羅蘭特灰西裝絕對是史無前例的。我們需要淘汰舊有的觀念，羅蘭特灰西裝似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。
                </h6>
              </div>
              <div className="detailPrice my-5">
                <h4>$9999</h4>
              </div>
            </div>
            <div className="productDescription d-flex flex-column">
              <div className="my-2">
                <h6>顏色</h6>
              </div>
              <div className="my-2">
                <h6>花紋</h6>
              </div>
              <div className="my-2">
                <h6>材質</h6>
              </div>
            </div>
            <div className="btn-Box d-flex ">
              <div className="btn my-2"></div>
              <div className="btn my-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
