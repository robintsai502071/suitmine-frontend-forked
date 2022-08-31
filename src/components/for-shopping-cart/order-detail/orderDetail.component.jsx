const OrderDetail = () => {
  return (
    <div className="card order-detail mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="order-detail__order-info">
            <h6 className="order-detail__order-info__title">訂單資訊</h6>
            <ul>
              <li>
                <p>訂單號碼：1111111111</p>
              </li>
              <li>
                <p>訂單信箱：a093773582@gmail.com</p>
              </li>
              <li>
                <p>訂單日期：2022-06-18 01:45PM</p>
              </li>
              <li>
                <p>訂單狀態：已完成</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__customer-info">
            <h6 className="order-detail__customer-info__title">顧客資訊</h6>
            <ul>
              <li>
                <p>姓名：蔡娓娓</p>
              </li>
              <li>
                <p>電話號碼：08888888888</p>
              </li>
              <li>
                <p>生日日期：1997-01-08</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__shipping-info">
            <h6 className="order-detail__shipping-info__title">送貨資訊</h6>
            <ul>
              <li>
                <p>送貨方式：宅配</p>
              </li>
              <li>
                <p>送貨狀態：未取貨</p>
              </li>
              <li>
                <p>收件人：蔡娓娓</p>
              </li>
              <li>
                <p>收件人電話：0999999999</p>
              </li>
              <li>
                <p>收件人地址：蔡娓娓</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="order-detail__payment-info">
            <h6 className="order-detail__payment-info__title">送貨資訊</h6>
            <ul>
              <li>
                <p>付款方式：線上信用卡</p>
              </li>
              <li>
                <p>付款狀態：已付款</p>
              </li>
              <li>
                <p>發票狀態：處理中</p>
              </li>
              <li>
                <p>發票申請類型：雲端發票</p>
              </li>
              <li>
                <p>發票類型：二聯式發票</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
