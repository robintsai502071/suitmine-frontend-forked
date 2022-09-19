import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// cart action
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../../store/cart/cart.slice';

// cart selector
import { selectCartItems } from '../../../store/cart/cart.selector';

const ShoppingCartItem = ({ stepStatus, cartItem }) => {
  const dispatch = useDispatch();
  const { id, product_photo, product_name, product_price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const handleAddItemToCart = (cartItems, productToAdd) => () => {
    dispatch(addItemToCart({ cartItems, productToAdd }));
  };
  const handleRemoveItemFromCart = (cartItems, productToRemove) => () => {
    dispatch(removeItemFromCart({ cartItems, productToRemove }));
  };
  const handleClearItemFromCart = (cartItems, productToClear) => () => {
    dispatch(clearItemFromCart({ cartItems, productToClear }));
  };

  return (
    <li className="list-group-item cart__content__item">
      <div className="row">
        <div className="col-4 col-md-2 order-md-0 text-center">
          <img
            className="cart__content__item__image"
            src={product_photo}
            alt={product_name}
          />
        </div>
        <div className="col-6 col-md-3 order-md-1 d-flex justify-content-center align-items-center">
          <Link
            to={`/product-detail/${id}`}
            className="cart__content__item__title "
          >
            {product_name}
          </Link>
        </div>

        {/* X 按鈕 => 點擊將此商品從購物車移除 */}
        <div
          className={`col-2 col-md-1 d-flex justify-content-center align-items-center order-md-5 ${
            stepStatus === 'checkout' || stepStatus === 'order-finished'
              ? 'd-none'
              : ''
          }`}
          onClick={handleClearItemFromCart(cartItems, cartItem)}
        >
          <div className="col-2 cart__content__item__remove-btn">&#10005;</div>
        </div>

        {/* 數量 */}
        <div className="col-6 col-md-2 mt-2 mt-md-0 order-md-3 d-flex align-items-md-center">
          <div className="cart__content__item__quantity d-flex">
            {/* < 按鈕 => 點擊將此商品數量 - 1，若只剩一筆會從購物車直接移除 */}
            <div
              className={`cart__content__item__quantity__arrow ${
                stepStatus === 'checkout' || stepStatus === 'order-finished'
                  ? 'd-none'
                  : ''
              }`}
              onClick={handleRemoveItemFromCart(cartItems, cartItem)}
            >
              &#10094;
            </div>
            <div className="cart__content__item__quantity__value px-2">
              <span
                className={`d-md-none ${
                  stepStatus === 'checkout' || stepStatus === 'order-finished'
                    ? 'd-inline'
                    : ''
                }`}
              >
                數量：
              </span>
              {quantity}
            </div>

            {/* > 按鈕 => 點擊將此商品數量 + 1 */}
            <div
              className={`cart__content__item__quantity__arrow ${
                stepStatus === 'checkout' || stepStatus === 'order-finished'
                  ? 'd-none'
                  : ''
              }`}
              onClick={handleAddItemToCart(cartItems, cartItem)}
            >
              &#10095;
            </div>
          </div>
        </div>

        {/* 價格 */}
        <div className="col-6 col-md-2 order-md-2 mt-2 mt-md-0 d-flex align-items-md-center justify-content-end justify-content-md-start">
          <div className="cart__content__item__price">
            ${(product_price || '').toLocaleString()}
          </div>
        </div>

        {/* 小計 */}
        <div
          className={`col-md-2 cart__content__item__subtotal  ${
            stepStatus === 'checkout' || stepStatus === 'order-finished'
              ? 'mt-3'
              : 'd-none'
          } d-md-flex order-md-4 align-items-md-center text-end`}
        >
          <span
            className={`d-md-none ${
              stepStatus === 'checkout' || stepStatus === 'order-finished'
                ? 'd-inline'
                : ''
            }`}
          >
            小計：
          </span>
          ${(product_price * quantity || '').toLocaleString()}
        </div>
      </div>
    </li>
  );
};
export default ShoppingCartItem;
