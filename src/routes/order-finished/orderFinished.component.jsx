import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// components
import OrderItemsAccordion from '../../components/for-order-finished/orderItemsAccordion.component';
import OrderDetail from '../../components/for-shopping-cart/order-detail/orderDetail.component';
import Steps from '../../components/for-shopping-cart/steps/steps.compoent';

// user selector
import { selectCurrentUser } from '../../store/user/user.selector';
// api
import { fetchOneOrderAsync } from '../../utils/axiosApi';

const stepStatus = 'order-finished';
const OrderFinshed = () => {
  const dispatch = useDispatch();

  const { orderId } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  const { user_id } = currentUser || {};

  useEffect(() => {
    if (!user_id) return;
    dispatch(fetchOneOrderAsync({ memberId: user_id, orderId }));
  }, [user_id]);

  return (
    <>
      <Steps stepStatus={stepStatus} />

      <main className="mt-3">
        <div className="container">
          <div className="card order-finished-result py-3 mb-4 text-center">
            <i className="fa-regular fa-circle-check check-sign"></i>
            <p>您的訂單已提交成功！</p>
          </div>
          <OrderItemsAccordion stepStatus={stepStatus} />
          <OrderDetail />
        </div>
      </main>
    </>
  );
};

export default OrderFinshed;
