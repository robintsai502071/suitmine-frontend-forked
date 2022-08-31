import CartReconfirmAccordion from '../../components/for-shopping-cart/cart-reconfirm-accordion/cartReconfirmAccordion.component';
import OrderDetail from '../../components/for-shopping-cart/order-detail/orderDetail.component';
import Steps from '../../components/for-shopping-cart/steps/steps.compoent';
const stepStatus = 'order-finished';
const OrderFinshed = () => {
  return (
    <>
      <Steps stepStatus={stepStatus} />

      <main className="mt-3">
        <div className="container">
          <CartReconfirmAccordion stepStatus={stepStatus} />
          <OrderDetail />
        </div>
      </main>
    </>
  );
};

export default OrderFinshed;
