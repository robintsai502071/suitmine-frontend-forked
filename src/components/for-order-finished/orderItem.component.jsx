import { Link } from 'react-router-dom';

const OrderItem = ({ stepStatus, orderItem }) => {
  const { product_name, product_price, product_photo, quantity } =
    orderItem ;
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
          <Link to={`/product-detail/`} className="cart__content__item__title ">
            {product_name}
          </Link>
        </div>

        {/* 數量 */}
        <div className="col-6 col-md-2 mt-2 mt-md-0 order-md-3 d-flex align-items-md-center">
          <div className="cart__content__item__quantity d-flex">
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
          </div>
        </div>

        {/* 價格 */}
        <div className="col-6 col-md-2 order-md-2 mt-2 mt-md-0 d-flex align-items-md-center justify-content-end justify-content-md-start">
          <div className="cart__content__item__price">
            ${product_price.toLocaleString()}
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
          ${(product_price * quantity).toLocaleString()}
        </div>
      </div>
    </li>
  );
};
export default OrderItem;
