import { Link } from 'react-router-dom';
const RelatedProductItem = ({ relatedProduct }) => {
  const { id, product_photo, product_name, product_price } = relatedProduct;
  return (
    <Link
      to={`/product-detail/${id}`}
      className="col-6 col-md-3 related-product-item"
      // 這邊加上 reloadDocument 是因為要讓 Link 重新 render，不然在 product-detail/* 路由下再點擊
      // 其他 Link 到 product-detail/* 不會重新 render 頁面
      reloadDocument
    >
      <div className="card cardStyle">
        <div className="imgBox position-relative">
          <img
            className="card-img-top "
            src={product_photo}
            alt={product_name}
          />
          <button
            className="add-to-cart-btn position-absolute for-pc"
            type="button"
          >
            加到購物車<i className="fa-solid fa-cart-shopping ms-1"></i>
          </button>
        </div>
        <div className="card-body text-center">
          <h6 className="card-title">{product_name}</h6>
          <p className="card-price price">${product_price.toLocaleString()}</p>
          <button className="add-to-cart-btn w-100 d-lg-none mt-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductItem;
