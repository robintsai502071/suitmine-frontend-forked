import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// for cart
import { selectCartItems } from '../../../store/cart/cart.selector';
import { addItemToCart } from '../../../store/cart/cart.slice';

const ProductListItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, product_photo, product_name, product_price } = product;

  // 購物車
  const cartItems = useSelector(selectCartItems);

  const handleAddItemToCart = (cartItems, productToAdd) => (e) => {
    e.preventDefault();
    // console.log('productToAdd', productToAdd);
    dispatch(addItemToCart({ cartItems, productToAdd }));
  };

  return (
    <Link
      to={`/product-detail/${id}`}
      className="col-6 col-md-4 col-lg-3 px-3 cardBottomMargin product-list-item d-block"
    >
      <div className="card cardStyle">
        <div className="imgBox position-relative">
          <img
            className="imgSize card-img-top position-relative"
            src={product_photo}
            alt={product_name}
          />
          <button
            className="add-to-cart-btn position-absolute for-pc"
            type="button"
            onClick={handleAddItemToCart(cartItems, product)}
          >
            加到購物車<i className="fa-solid fa-cart-shopping ms-1"></i>
          </button>
        </div>
        <div className="card-body cardPadding text-center">
          <h6 className="card-title  ">{product_name}</h6>
          <p className="h6 price card-text  CardP_Padding">
            ${product_price.toLocaleString()}
          </p>
          <button
            className="add-to-cart-btn w-100 d-lg-none mt-2"
            type="button"
            onClick={handleAddItemToCart(cartItems, product)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
