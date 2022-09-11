import RelatedProductItem from '../../components/for-product-detail/related-product-item.component';
import { Image } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetailAsync } from '../../store/product/product.slice';
import {
  selectCurrentProductDetail,
  selectProductsArray,
} from '../../store/product/product.selector';
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  // 取得商品細節
  useEffect(() => {
    dispatch(fetchProductDetailAsync(productId));
  }, []);
  const currentProductDetail = useSelector(selectCurrentProductDetail);

  // currentProductDetail 解構
  const {
    id,
    name,
    product_photo,
    price,
    description,
    color_spec,
    pattern_spec,
    fabric_spec,
    fabric_weight_spec,
    productDetailImages,
  } = currentProductDetail;

  // 將目前的產品陣列取出（可能是套裝、外套或褲子）用此陣列隨機選擇 4 種作為相關產品 RelatedProductItem
  const productsArray = useSelector(selectProductsArray);
  // 從產品陣列排除此 product-detail 顯示的產品
  const DuplicatedProductsArray = productsArray.filter(
    (product) => product.id !== id
  );
  // console.log('DuplicatedProductsArray', DuplicatedProductsArray);
  const relatedProductsArray = [];
  // Math.floor(Math.random() * max) 可以從 0 ~ max-1 區間內取亂數
  for (let i = 0; i < 4; i++) {
    const chosenIndex = Math.floor(
      Math.random() * DuplicatedProductsArray.length - i
    );
    relatedProductsArray.push(
      DuplicatedProductsArray.find((_, index) => index === chosenIndex)
    );
  }
  console.log('relatedProductsArray', relatedProductsArray);
  return (
    <div className="product-detail mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 position-relative d-flex justify-content-center">
            <img
              src={product_photo}
              alt={name}
              className="product-detail__image"
            />

            <div className="preview-group position-absolute">
              <Image.PreviewGroup>
                {productDetailImages.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl}
                    alt={`${name}圖片細節 ${index}`}
                  />
                ))}
              </Image.PreviewGroup>
            </div>
          </div>
          <div className="col-12 mt-2 mt-md-0 col-md-6">
            <h1 className="product-detail__title">{name}</h1>
            <p className="product-detail__price">${price.toLocaleString()}</p>
            <p className="product-detail__description">{description}</p>
            <a className="product-detail__add-to-cart-btn mt-3">
              加入購物車<i className="fa-solid fa-cart-shopping ms-2"></i>
            </a>
            <div className="text-center p-3">
              <a className="product-detail__add-to-my-favorites-btn mt-2">
                加入我的收藏<i className="fa-regular fa-heart ms-2"></i>
              </a>
            </div>
            <div className="card product-detail__specification mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>顏色</strong>
                  <p>{color_spec}</p>
                </li>
                <li className="list-group-item">
                  <strong>花紋</strong>
                  <p>{pattern_spec}</p>
                </li>
                <li className="list-group-item">
                  <strong>材質</strong>
                  <p>{fabric_spec}</p>
                </li>
                <li className="list-group-item">
                  <strong>磅數</strong>
                  <p>{fabric_weight_spec}</p>
                </li>
              </ul>
            </div>
            <div className="product-detail__features">
              <h5 className="product-detail__features__title">
                <i className="fa-solid fa-pen-ruler me-2"></i>為您量身定制
              </h5>
              <p className="product-detail__features__description">
                我們根據您的獨特尺寸和規格定制每件服裝。我們掌握了細節，因此您可以自信地應對生活中的挑戰。
              </p>
              <h5 className="product-detail__features__title">
                <i className="fa-solid fa-pen-ruler me-2"></i>一次性測量過程
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
