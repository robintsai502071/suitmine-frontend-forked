import React, { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import giftCard from '../../images/robert/giftCard/gift_card.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
function GiftCard() {
  // --------------------------------------------------------------------
  // 撈姓名資料
  // const [nameGet, setNameGet] = useState([]);
  // useEffect(() => {
  //   let getName = async () => {
  //     // http://localhost:3001/stocks/2330?page=1
  //     // http://localhost:3001/api/auth/checkIsLogin
  //     let response = await axios.get(
  //       `http://localhost:3001/api/auth/checkIsLogin`
  //     );
  //     setNameGet(response.name);
  //     // console.log(response);
  //   };
  //   getName();
  // }, []);

  // --------------------------------------------------------------------
  // input的type為text
  const chooseOption = ['50', '100', '150', '200', '250'];
  const [content, setContent] = useState({
    // 不需要giver: '',
    receiver: '',
    amount: '',
    receiver_email: '',
    message: '',
    amount: '',
  });

  // input的type為text onchange setting
  function handleChange(e) {
    const newContent = { ...content, [e.target.name]: e.target.value };
    setContent(newContent);
  }

  // ------------------------------------------------------------------------
  // 表單提交
  function giftCardSubmit(e) {
    e.preventDefault();
    console.log(content);
    setContent({
      giver: '',
      // giver_user_id:'',
      receiver: '',
      // receiver_user_id:'',
      amount: '',
      receiver_email: '',
      message: '',
      // amount:choose,
      amount: '',
    });
  }
  // -------------------------------------------------------------------------

  return (
    <div>
      <div className="container">
        <div className="row flex-row-reverse">
          <div
            className="col-md-6 col-12 text-center d-md-flex  justify-content-center align-items-center mt-5"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <figure>
              <img src={giftCard} alt="" />
            </figure>
          </div>
          <Form
            className="col-md-6 col-12 p-3"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="giver"
                // 記得打開
                // value={nameGet}
                placeholder="您的姓名"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="receiver"
                placeholder="被贈者的姓名"
                value={content.receiver}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="被贈者的信箱"
                onChange={handleChange}
                value={content.receiver_email}
                name="receiver_email"
              />
              <Form.Text className="text-muted">
                注意！我們的禮物卡將於1天工作天內送達指定信箱，立即輸入信箱製造驚喜吧！
              </Form.Text>
            </Form.Group>

            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              value={content.amount}
              name="amount"
              onChange={handleChange}
            >
              <option value="">請選擇贈送價錢</option>
              {chooseOption.map((chooseOptionValue, index) => {
                return (
                  <option key={index} value={chooseOptionValue}>
                    {chooseOptionValue}
                  </option>
                );
              })}
            </Form.Select>

            <Form.Group className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="訊息(限300字)"
                name="message"
                value={content.message}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <button type="submit" variant="dark" onClick={giftCardSubmit}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
