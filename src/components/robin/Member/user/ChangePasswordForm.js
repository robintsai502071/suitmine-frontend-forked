import { Form, Input, Button } from 'antd';
import React from 'react';

function ChangePasswordForm() {
  return (
    <>
      <a href="http://localhost:3000/member/user" className="goBackBtn">
        <i className="fa-solid fa-arrow-left-long me-2"></i>
        回上一頁
      </a>
      <div className="main__form shadow custom-width-change-password">
        <Form
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          autoComplete="off"
          colon={false}
        >
          <Form.Item
            label="目前密碼"
            name="password"
            className="custom-width-change-password"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="新的密碼"
            name="new_password"
            className="custom-width-change-password"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="確認密碼"
            name="new_password"
            className="custom-width-change-password"
          >
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

export default ChangePasswordForm;
