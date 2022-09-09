import { Link } from 'react-router-dom';
const ProductListItem = ({ product }) => {
  const { id, product_photo, product_name, product_price } = product;
  return (
    <a
      href="#/"
      className="col-6 col-md-4 col-lg-3 px-3 cardBottomMargin product-list-item d-block"
    >
      <div className="card cardStyle">
        <div className="imgBox position-relative">
          <img
            className="imgSize card-img-top position-relative"
            src={product_photo}
            alt={product_name}
          />
          <button className="add-to-cart-btn position-absolute for-pc">
            加到購物車<i className="fa-solid fa-cart-shopping ms-1"></i>
          </button>
        </div>
        <div className="card-body cardPadding text-center">
          <h6 className="card-title  ">{product_name}</h6>
          <p className="h6 price card-text  CardP_Padding">
            ${product_price.toLocaleString()}
          </p>
          <button className="add-to-cart-btn w-100 d-lg-none mt-2">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </a>
  );
};

export default ProductListItem;
