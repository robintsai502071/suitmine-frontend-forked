import { Form, Input, Radio, Button } from 'antd';
import React from 'react';

function MainForm() {
  return (
    <>
      <a href="http://localhost:3000/member/user" className="goBackBtn m-user-position">
        <i className="fa-solid fa-arrow-left-long me-2"></i>
        回上一頁
      </a>

      <div className="main__form shadow">
        <div className="main__form__avatar">
          <figure className="main__form__avatar__wrapper mb-4">
            <img
              className="main__form__avatar__image"
              src="https://fakeimg.pl/250x100/"
              alt="..."
            />
          </figure>
          <h4 className="main__form__title">
            個人檔案
            <a href="#/" className="main__form__edit-btn ms-2">
              <i className="fa-solid fa-pen-to-square me-1"></i>編輯檔案
            </a>
          </h4>
        </div>
        <Form
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          autoComplete="off"
          colon={false}
          initialValues={{
            username: '123',
            gender: '1',
            email: 'test@gmail.com',
            phone: '0963252525',
            address: '334 桃園市中壢區新生路二段421號',
          }}
          disabled
        >
          <Form.Item label="中文姓名">
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}
            >
              <Radio.Group>
                <Radio value="0">先生</Radio>
                <Radio value="1">小姐</Radio>
                <Radio value="2"> 不透露 </Radio>
              </Radio.Group>
            </Form.Item>
          </Form.Item>

          <Form.Item label="電子郵件" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="手機號碼" name="phone">
            <Input />
          </Form.Item>

          <Form.Item label="聯絡地址" name="address">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button>送出</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default MainForm;
