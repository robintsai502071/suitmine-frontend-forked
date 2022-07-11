import { Form, Input, Button } from 'antd';
import axios from 'axios';
import React from 'react';
import { API_URL } from '../../../../utils/config';
import swal from 'sweetalert';
import { useRef } from 'react';
function ChangePasswordForm(props) {
  const { givenMemberData } = props;
  // 清空 antd input 欄位用
  const formRef = useRef();
  const handleSubmit = async (values) => {
    // 新密碼與確認密碼不相同時
    if (values.new_password !== values.comfirm_new_password) {
      swal({
        title: '修改密碼失敗',
        text: '新密碼與確認密碼不相同，請您再試一次！',
        icon: 'error',
        button: '確認',
      });
      return console.log('新密碼與確認密碼不相同');
    }

    const formData = {
      currentPassword: values.password,
      newPassword: values.new_password,
      confirmNewPassword: values.comfirm_new_password,
      user_id: givenMemberData.id,
    };

    try {
      let response = await axios.post(
        `${API_URL}/auth/change-password`,
        formData
      );
      await swal({
        // title: '修改密碼成功',
        text: '修改密碼成功',
        icon: 'success',
        buttons: false,
        timer: 1500,
      });
      formRef.current.resetFields();
    } catch (err) {
      await swal({
        // title: '修改密碼成功',
        text: '目前密碼錯誤！',
        icon: 'error',
        button: '確認',
        // timer: 1500,
      });
    }

    // if (response.data.success) {

    //   // console.log('修改成功' + response.data.success);
    // }
    // console.log(response);
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
          ref={formRef}
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
