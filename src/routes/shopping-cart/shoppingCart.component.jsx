import ShoppingCartItem from '../../components/shopping-cart-item/shopping-cart-item.component';
import Steps from '../../components/for-shopping-cart/steps/steps.compoent';
const ShoppingCart = () => {
  return (
    <>
      <Steps />
      <main className="mt-4">
        <div className="container">
          <div className="card cart">
            <div className="card-header cart__title">購物車</div>

            <ul className="list-group list-group-flush cart__content">
              <li className="list-group-item cart__content__title d-none d-md-block">
                <div className="row">
                  <div className="col-4">商品資訊</div>
                  <div className="col-2">單件價格</div>
                  <div className="col-2">數量</div>
                  <div className="col-2">小計</div>
                </div>
              </li>
              <ShoppingCartItem />
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default ShoppingCart;
