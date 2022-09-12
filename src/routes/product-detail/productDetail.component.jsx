import RelatedProductItem from '../../components/for-product-detail/related-product-item.component';
import { Image } from 'antd';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductDetailAsync,
  fetchProductsAsync,
} from '../../store/product/product.slice';
import {
  selectCurrentProductDetail,
  selectRelatedProductsArray,
} from '../../store/product/product.selector';
const ProductDetail = () => {
  const dispatch = useDispatch();
  const [componentDidUpdate, setComponentDidUpdate] = useState(false);
  const { productId } = useParams();

  // 取得商品細節
  useEffect(() => {
    dispatch(fetchProductDetailAsync(productId));
    setComponentDidUpdate(true);
  }, []);
  const currentProductDetail = useSelector(selectCurrentProductDetail);

  // currentProductDetail 解構
  const {
    name,
    product_category_id,
    product_photo,
    price,
    description,
    color_spec,
    pattern_spec,
    fabric_spec,
    fabric_weight_spec,
    productDetailImages,
  } = currentProductDetail;

  // 取得此商品細節之後，利用取回的 product_category_id 再去 fetch 相同類別的產品
  // 因為要從中亂數取得 4 筆產品做為相關產品 RelatedProduct Item
  useEffect(() => {
    // 確保商品細節已 fetch 完成再 fetch 相同類別的產品
    if (componentDidUpdate) {
      const fetchSameCategoryProducts = (product_category_id) => {
        switch (product_category_id) {
          case 5:
          case 6:
            dispatch(
              fetchProductsAsync({
                product_category_id: 0,
                product_category_level: 1,
              })
            );
            break;

          case 7:
          case 8:
            dispatch(
              fetchProductsAsync({
                product_category_id: 0,
                product_category_level: 2,
              })
            );
            break;

          case 11:
          case 12:
            dispatch(
              fetchProductsAsync({
                product_category_id: 0,
                product_category_level: 4,
              })
            );
            break;
        }
      };
      fetchSameCategoryProducts(product_category_id);
    }
  }, [product_category_id]);
  const relatedProductsArray = useSelector(selectRelatedProductsArray);

  return (
    <div className="product-detail mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-start align-items-center">
            <img
              src={product_photo}
              alt={name}
              className="product-detail__image"
            />
            <div className="preview-group">
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
          <div className="col-12 mt-3 mt-md-0 col-md-6">
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
            {relatedProductsArray?.map((relatedProduct) => (
              <div className="col-6 col-md-3" key={relatedProduct.id}>
                <RelatedProductItem relatedProduct={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
