import React from 'react';
import giftCard from '../../images/robert/giftCard/gift_card.png';
function GiftCard() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <form class="col-6 p-3">
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="您的姓名" />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="被贈者的姓名"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="被贈者的信箱"
              />
              <div class="form-text">
                注意！我們的禮物卡將於1天工作天內送達指定信箱，立即輸入信箱製造驚喜吧！
              </div>
            </div>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
            >
              <option selected>請選擇贈送價錢</option>
              <option value="1">$500</option>
              <option value="2">$1000</option>
              <option value="3">$1500</option>
              <option value="4">$2000</option>
              <option value="5">$2500</option>
            </select>
            <div class="mb-3">
              <textarea
                class="form-control"
                rows="3"
                placeholder="訊息(限300字)"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <figure>
              <img src={giftCard} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
