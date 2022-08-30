const ShoppingCartItem = () => {
  return (
    <li className="list-group-item cart__content__item">
      <div className="row">
        <div className="col-4 col-md-2 order-md-0">
          <img
            className="cart__content__item__image"
            src="https://fakeimg.pl/250x100/"
            alt=""
          />
        </div>
        <div className="col-6 col-md-2 order-md-1 d-flex justify-content-center align-items-center">
          <div className="cart__content__item__title ">
            MAQuillAGE 心機彩妝 空氣蜜粉餅組
          </div>
        </div>
        <div className="col-2 col-md-2 d-flex justify-content-center align-items-center order-md-5">
          <div className="col-2 cart__content__item__remove-btn ">&#10005;</div>
        </div>
        <div className="col-6 col-md-2 mt-2 mt-md-0 order-md-3 d-flex align-items-md-center">
          <div className=" cart__content__item__quantity d-flex">
            <div className="cart__content__item__quantity__arrow">&#10094;</div>
            <span className="cart__content__item__quantity__value px-2">0</span>
            <div className="cart__content__item__quantity__arrow">&#10095;</div>
          </div>
        </div>
        <div className="col-6 col-md-2 order-md-2 mt-2 mt-md-0 d-flex align-items-md-center justify-content-end justify-content-md-start">
          <div className="cart__content__item__price">NT $1,215</div>
        </div>
        <div className="col-md-2 cart__content__item__subtotal d-none d-md-flex order-md-4 align-items-md-center">
          NT $1,215
        </div>
      </div>
    </li>
  );
};
export default ShoppingCartItem;
