import { Form, Input, Radio, Button } from 'antd';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { API_URL } from '../../../../utils/config';

function MainForm(props) {
  const [memberData, setMemberData] = useState({
    address: '',
    email: '',
    gender: '',
    id: '',
    username: '',
    phone: '',
    photo: '',
    valid: '',
  });
  const [reuploadPhoto, setReuploadPhoto] = useState('');
  const [initialPhoto, setInitialPhoto] = useState('');
  const [memberId, setMemberId] = useState(39);
  const [isLogin, setIsLogin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const history = useHistory();
  // 點選編輯檔案自動 focus 第一個 Input
  const nameInputRef = useRef();
  // ANTD 還原 memberData 預設值用
  const formRef = useRef();

  async function handleSubmit(values) {
    let response = await axios.patch(`${API_URL}/member/${memberId}`, {
      ...values,
      photo: reuploadPhoto,
    });
    // weitodo=> 修改成功要跳 toast 重新 render
  }
  async function handleUploadPhoto(e) {
    let formData = new FormData();
    formData.append('photo', e.target.files[0]);
    let response = await axios.post(`${API_URL}/reupload/avatar`, formData);
    // console.log(response.data.data.link);
    setReuploadPhoto(response.data.data.link);
    setMemberData({ ...memberData, photo: response.data.data.link });
  }

  // 先確認是否登入
  useEffect(() => {
    const checkIsLogin = async () => {
      try {
        let response = await axios.get(`${API_URL}/auth/checkIsLogin`, {
          // 一定要把送 cookie 的選項打開，才能把 cookie 中的 session_id 送到後端去確認
          withCredentials: true,
        });
        setIsLogin(true);
        // console.log(response.data.user_id);
        setMemberId(response.data.user_id)
      } catch (err) {
        // 沒登入就導向登入頁面
        return history.push('/login');
      }
    };
    checkIsLogin();
  }, []);

  // 如果是登入狀態就撈取會員資料
  useEffect(() => {
    if (isLogin === true) {
      let getMemberData = async () => {
        let response = await axios.get(`${API_URL}/member/${memberId}`);

        setMemberData(response.data.data);
        props.setGivenMemberData(response.data.data)
        setInitialPhoto(response.data.data.photo);
      };

      getMemberData();
    }
  }, [memberId]);

  // 切換編輯模式
  useEffect(() => {
    if (editMode === true) {
      nameInputRef.current.focus({
        cursor: 'end',
      });
    }
  }, [editMode]);

  return (
    <>
      <a
        href="http://localhost:3000/member/user"
        className="goBackBtn m-user-position"
      >
        <i className="fa-solid fa-arrow-left-long me-2"></i>
        回上一頁
      </a>

      <div className="main__form shadow">
        <div className="main__form__avatar">
          <figure className="main__form__avatar__wrapper mb-4 position-relative">
            {editMode && (
              <>
                <label
                  htmlFor="avatarInput"
                  className="position-absolute w-100 h-100"
                ></label>
                <i className="fa-solid fa-cloud-arrow-up position-absolute main__form__avatar__wrapper__upload-icon"></i>
              </>
            )}

            <input
              type="file"
              id="avatarInput"
              hidden
              onChange={handleUploadPhoto}
            />
            <img
              className="main__form__avatar__image"
              src={memberData.photo}
              alt="..."
            />
          </figure>
          <h4 className="main__form__title">
            個人檔案
            <a
              className="main__form__edit-btn ms-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setEditMode(true);
              }}
            >
              <i className="fa-solid fa-pen-to-square me-1"></i>編輯檔案
            </a>
          </h4>
        </div>

        <Form
          key={memberData.id}
          ref={formRef}
          className="member-form"
          autoComplete="off"
          colon={false}
          initialValues={{
            username: memberData.username,
            gender: memberData.gender,
            email: memberData.email,
            phone: memberData.phone,
            address: memberData.address,
            memberId: memberData.id,
            photo: memberData.photo,
          }}
          disabled={!editMode}
          // onValuesChange={(changedValue, allChangedValues) => {
          //   console.log(allChangedValues);
          //   setMemberData(allChangedValues);

          // }}
          onFinish={handleSubmit}
        >
          <Form.Item label="會員Id" name="memberId" hidden>
            <Input />
          </Form.Item>

          <Form.Item label="photo" name="photo" hidden>
            <Input />
          </Form.Item>

          <Form.Item label="中文姓名">
            <Form.Item
              name="username"
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
              }}
              rules={[
                {
                  required: true,
                  message: '此欄位為必填欄位',
                },
              ]}
            >
              <Input {...{ ref: nameInputRef }} />
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
                <Radio value={0}>先生</Radio>
                <Radio value={1}>小姐</Radio>
                <Radio value={2}>不透露</Radio>
              </Radio.Group>
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="電子郵件"
            name="email"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
              {
                type: 'email',
                message: '請填入正確 Email 格式！',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="手機號碼"
            name="phone"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位！',
              },
              {
                len: 10,
                message: '手機號碼需輸入 10 位數字！',
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>

          <Form.Item
            label="聯絡地址"
            name="address"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位！',
              },
            ]}
          >
            <Input />
          </Form.Item>

          {editMode && (
            <div className="d-flex">
              <Form.Item className="me-2">
                <Button
                  onClick={() => {
                    setEditMode(false);
                    setMemberData({ ...memberData, photo: initialPhoto });
                    formRef.current.resetFields();
                  }}
                >
                  取消
                </Button>
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit">儲存修改</Button>
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </>
  );
}

export default MainForm;
