import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';

// components
import { Form, Input, Button } from 'antd';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';

// user selector
import { selectCurrentUser } from '../../store/user/user.selector';

// api
import { changePasswordAxios } from '../../utils/axiosApi';

function ChangePassword() {
  const currentUser = useSelector(selectCurrentUser);
  const { user_id } = currentUser || {};

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
      // console.log('新密碼與確認密碼不相同');
      return;
    }
    // console.log('values', values);
    const formData = {
      currentPassword: values.password,
      newPassword: values.new_password,
      confirmNewPassword: values.comfirm_new_password,
      user_id,
    };

    changePasswordAxios(formData, formRef);
  };

  return (
    <>
      <div className="main__form change-password-form mt-3">
        <div className="container">
          <Form
            autoComplete="off"
            colon={false}
            onFinish={handleSubmit}
            ref={formRef}
          >
            <Form.Item
              label="目前密碼"
              name="password"
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
              <Button htmlType="submit" className="change-password-btn">
                送出
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}

export default ChangePassword;
