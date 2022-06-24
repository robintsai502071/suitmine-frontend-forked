import React from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import giftCard from '../../images/robert/giftCard/gift_card.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function GiftCard() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row flex-row-reverse" >
        <div className="col-md-6 col-12 text-center d-md-flex  justify-content-center align-items-center mt-5" data-aos="fade-left" data-aos-duration="1000">
            <figure>
              <img src={giftCard} alt="" />
            </figure>
          </div>
          <Form
            className="col-md-6 col-12 p-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="您的姓名" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="被贈者的姓名" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                className="form-control"
                placeholder="被贈者的信箱"
              />
              <Form.Text className="text-muted">
                注意！我們的禮物卡將於1天工作天內送達指定信箱，立即輸入信箱製造驚喜吧！
              </Form.Text>
            </Form.Group>

            <Form.Select className="mb-3" aria-label="Default select example">
              <option>請選擇贈送價錢</option>
              <option value="1">$500</option>
              <option value="2">$1000</option>
              <option value="3">$1500</option>
              <option value="4">$2000</option>
              <option value="5">$2500</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="訊息(限300字)"
              ></textarea>
            </Form.Group>

            <button type="submit" variant="dark">
              Submit
            </button>
          </Form>
          
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
