import RelatedProductItem from '../../components/for-product-detail/related-product-item.component';
import { Image } from 'antd';
import { useState, useEffect } from 'react';
const ProductDetail = () => {
  // const [visible, setVisible] = useState(false);
  return (
    <div className="product-detail mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 position-relative d-flex justify-content-center">
            <img
              src="https://fakeimg.pl/450x700/"
              alt=""
              className="product-detail__image"
            />
            {/* <button
              type="button"
              className="btn position-absolute intro1__lightbox__thumb__btn"
              onClick={() => setVisible(true)}
            >
              <i className="fa-solid fa-images me-2"></i>詳細展示
            </button> */}

            <div
            // style={{
            //   display: 'none',
            // }}
            className='preview-group position-absolute'
            >
              <Image.PreviewGroup
                // preview={{
                //   visible,
                //   onVisibleChange: (vis) => setVisible(vis),
                // }}

              >
                <Image src={'https://fakeimg.pl/250x100/ff0000/'} />
                <Image src={'https://fakeimg.pl/250x100/ff0000/'} />
                <Image src={'https://fakeimg.pl/250x100/ff0000/'} />
                <Image src={'https://fakeimg.pl/250x100/ff0000/'} />
                <Image src={'https://fakeimg.pl/250x100/ff0000/'} />
              </Image.PreviewGroup>
            </div>
          </div>
          <div className="col-12 mt-2 mt-md-0 col-md-6">
            <h1 className="product-detail__title">海爾鯊魚皮淺灰色西裝</h1>
            <p className="product-detail__price">$5,555</p>
            <p className="product-detail__description">
              脫穎而出並在海爾發表聲明。這款時尚、中等重量的淺灰色西裝外觀富有質感，手感柔軟。
            </p>
            <a className="product-detail__add-to-cart-btn mt-3">
              加入購物車<i class="fa-solid fa-cart-shopping ms-2"></i>
            </a>
            <div className="text-center p-3">
              <a className="product-detail__add-to-my-favorites-btn mt-2">
                加入我的收藏<i class="fa-regular fa-heart ms-2"></i>
              </a>
            </div>
            <div class="card product-detail__specification mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <strong>顏色</strong>
                  <p>灰色</p>
                </li>
                <li class="list-group-item">
                  <strong>花紋</strong>
                  <p>素色</p>
                </li>
                <li class="list-group-item">
                  <strong>材質</strong>
                  <p>100% 羊毛</p>
                </li>
                <li class="list-group-item">
                  <strong>磅數</strong>
                  <p>280</p>
                </li>
              </ul>
            </div>
            <div className="product-detail__features">
              <h5 className="product-detail__features__title">
                <i class="fa-solid fa-pen-ruler me-2"></i>為您量身定制
              </h5>
              <p className="product-detail__features__description">
                我們根據您的獨特尺寸和規格定制每件服裝。我們掌握了細節，因此您可以自信地應對生活中的挑戰。
              </p>
              <h5 className="product-detail__features__title">
                <i class="fa-solid fa-pen-ruler me-2"></i>一次性測量過程
              </h5>
              <p className="product-detail__features__description">
                按照我們的分步視頻指南設置您的測量配置文件。只需不到 10
                分鐘，您可以在舒適的家中完成。不需要裁縫。
              </p>
            </div>
          </div>
        </div>

        <div className="product-detail__related-products">
          <h6 className="product-detail__related-products__title mt-5">
            您可能會喜歡
          </h6>
          <div className="row mt-3">
            <div className="col-6 col-md-3">
              <RelatedProductItem />
            </div>
            <div className="col-6 col-md-3">
              <RelatedProductItem />
            </div>
            <div className="col-6 col-md-3">
              <RelatedProductItem />
            </div>
            <div className="col-6 col-md-3">
              <RelatedProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
