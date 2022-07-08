import { Form, Input, Button } from 'antd';
import axios from 'axios';
import React from 'react';
import { API_URL } from '../../../../utils/config';
function ChangePasswordForm(props) {
  const { givenMemberData } = props;

  const handleSubmit = async (values) => {
    // 新密碼與確認密碼不相同時
    if (values.new_password !== values.comfirm_new_password) {
      // weitodo 跳出失敗訊息 記得要 return
      return console.log('新密碼與確認密碼不相同');
    }

    const formData = {
      currentPassword: values.password,
      newPassword: values.new_password,
      confirmNewPassword: values.comfirm_new_password,
      user_id: givenMemberData.id,
    };

    let response = await axios.post(
      `${API_URL}/auth/change-password`,
      formData
    );

    if (response.data.success) {
      // weitodo
      console.log('修改成功' + response.data.success);
    }
  };
  
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
          onFinish={handleSubmit}
        >
          <Form.Item
            label="目前密碼"
            name="password"
            className="custom-width-change-password"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
              {
                min: 8,
                message: '此欄位為最少需填入 8 碼',
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item
            label="新的密碼"
            name="new_password"
            className="custom-width-change-password"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
              {
                min: 8,
                message: '此欄位為最少需填入 8 碼',
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item
            label="確認密碼"
            name="comfirm_new_password"
            className="custom-width-change-password"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
              {
                min: 8,
                message: '此欄位為最少需填入 8 碼',
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">送出</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default ChangePasswordForm;
