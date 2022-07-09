import React, { useState } from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import giftCard from '../../images/robert/giftCard/gift_card.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

function GiftCard() {
  // --------------------------------------------------------------------
  // 表單驗證
  const [validated, setValidated] = useState(false);

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
    giver: '',
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
    console.log('這裡是新資料', newContent);
    // input的type為text onchange setting
  }

  // ------------------------------------------------------------------------
  // 表單提交
  // function giftCardSubmit(e) {
  //   e.preventDefault();
  //   console.log(content);
  //   setContent({
  //     giver: '',
  //     // giver_user_id:'',
  //     receiver: '',
  //     // receiver_user_id:'',
  //     amount: '',
  //     receiver_email: '',
  //     message: '',
  //     // amount:choose,
  //     amount: '',
  //   });
  // }

  // 表單驗證+送出
  function handleFrom(e) {
    const form = e.currentTarget;
    console.log(form.checkValidity());
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
      // console.log(content.amount, content.receiver)
      setValidated(true);
    } else {
      console.log(
        content.giver,
        content.amount,
        content.receiver,
        content.receiver_email,
        content.message
      );
      // setValidated(false);
      setContent({
        // 不需要giver: '',
        giver: '',
        receiver: '',
        amount: '',
        receiver_email: '',
        message: '',
        amount: '',
      });
      //form.novalidate = 'novalidate';
      setValidated(false);
      //.validated = false;
    }
  }

  // 老師寫法
  // function handleFrom(e) {
  //   e.preventDefault();
  //  //
  //  //方法1:從state得到輸入的值
  // //console.log(content.amount, content.receiver...)
  //  //方法2:利用FormData
  // // 不可控元件用、上傳檔案用、單純的表單用(填完送出...etc)
  // const formData = new FormData(e.target)
  // console.log(
  //   //get裡面放input裡面的屬性name值
  //   formData.get('amount'),
  //   formData.get('receiver'),
  //   formData.get('...')
  // )
  //  //存進資料庫(這裡是localStorage)
  //   setContent({
  //     // 不需要giver: '',
  //     receiver: '',
  //     amount: '',
  //     receiver_email: '',
  //     message: '',
  //     amount: '',
  //   });
  // }
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
            noValidate
            validated={validated}
            onSubmit={handleFrom}
            className="col-md-6 col-12 p-3"
            // data-aos="fade-down"
            // data-aos-duration="800"
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="giver"
                value={content.giver}
                onChange={handleChange}
                // 記得打開
                // value={nameGet}
                placeholder="您的姓名"
                required
              />
              <Form.Control.Feedback>正確填寫</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                請輸入您的姓名
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="receiver"
                placeholder="被贈者的姓名"
                value={content.receiver}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback>正確填寫</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                請輸入被贈者姓名
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="被贈者的信箱"
                onChange={handleChange}
                value={content.receiver_email}
                name="receiver_email"
                required
              />
              <Form.Control.Feedback>正確填寫</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                請輸入正確被贈者信箱，需包含@
              </Form.Control.Feedback>
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
              required
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
                required
              ></textarea>
              <Form.Control.Feedback>正確填寫</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                請輸入留言
              </Form.Control.Feedback>
            </Form.Group>

            {/* button加上Type是好習慣 */}
            <button
              type="submit"
              variant="dark"
              onClick={() => {
                // ============== 判斷有沒有車因為沒有車會錯誤所以要先判斷 ===========
                let obj = {};
                obj = { ...content };
                if (localStorage.getItem('giftCard') == null) {
                  let arr = [];
                  localStorage.setItem('giftCard', JSON.stringify(arr));
                }
                let oldCart = JSON.parse(localStorage.getItem('giftCard'));
                var newArr = [...oldCart, obj];
                localStorage.setItem('giftCard', JSON.stringify(newArr));
              }}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
