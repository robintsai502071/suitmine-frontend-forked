import { Form, Input, Radio, Button } from 'antd';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import swal from 'sweetalert';

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
  const [reuploadPhoto, setReuploadPhoto] = useState(null);
  const [initialPhoto, setInitialPhoto] = useState('');
  const [memberId, setMemberId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [profileEditMode, setProfileEditMode] = useState(false);
  const [bodyInfoEditMode, setBodyInfoEditMode] = useState(false);

  // 點選編輯檔案自動 focus 第一個 Input
  const nameInputRef = useRef();
  // ANTD 還原 memberData 預設值用
  const formRef = useRef();

  async function handleSubmit(values) {
    // let response = await axios.patch(`${API_URL}/member/${memberId}`, {
    //   ...values,
    //   photo: reuploadPhoto || memberData.photo,
    // });
    // swal({
    //   // title: '修改密碼成功',
    //   text: '修改個人檔案成功',
    //   icon: 'success',
    //   buttons: false,
    //   timer: 1500,
    // }).then(() => {
    //   props.setGivenMemberData({ ...memberData, photo: reuploadPhoto });
    //   setEditMode(false);
    // });
  }
  async function handleUploadPhoto(e) {
    let formData = new FormData();
    formData.append('photo', e.target.files[0]);
    let response = await axios.post(`${API_URL}/reupload/avatar`, formData);

    // setReuploadPhoto(response.data.data.link);
    // setMemberData({ ...memberData, photo: response.data.data.link });
  }

  // 切換編輯模式
  useEffect(() => {
    if (profileEditMode === true) {
      nameInputRef.current.focus({
        cursor: 'end',
      });
    }
  }, [profileEditMode]);

  return (
    <>
      <div className="main__form member-profile">
        <div className="main__form__header d-flex justify-content-between mb-2">
          <h4 className="main__form__title">個人檔案</h4>
          <a
            className="main__form__edit-btn"
            href="#"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setProfileEditMode(true)
            }}
          >
            <i className="fa-solid fa-pen-to-square me-1"></i>編輯
          </a>
        </div>

        <Form
          // key={memberData.id}
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
          disabled={!profileEditMode}
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

          <div className="row">
            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
              <div className="main__form__avatar">
                <figure className="main__form__avatar__wrapper mx-auto">
                  <input
                    type="file"
                    id="avatarInput"
                    hidden
                    onChange={handleUploadPhoto}
                  />
                  <img
                    className="main__form__avatar__image"
                    src={`https://fakeimg.pl/250x100/`}
                    alt="..."
                  />
                </figure>
              </div>
              {profileEditMode && (
                <label htmlFor="avatarInput" className="upload-avatar-btn">
                  上傳圖片
                </label>
              )}
            </div>

            <div className="col-8">
              <Form.Item label="中文姓名">
                <Form.Item
                  name="username"
                  // style={{
                  //   display: 'inline-block',
                  //   width: 'calc(50% - 8px)',
                  // }}
                  rules={[
                    {
                      required: true,
                      message: '此欄位為必填欄位',
                    },
                  ]}
                >
                  <Input {...{ ref: nameInputRef }} />
                </Form.Item>
              </Form.Item>
            </div>
          </div>
          <Form.Item name="gender" label="性別">
            <Radio.Group>
              <Radio value={0}>先生</Radio>
              <Radio value={1}>小姐</Radio>
              <Radio value={2}>不透露</Radio>
            </Radio.Group>
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

          {profileEditMode && (
            <div className="d-flex editModeBtns mt-3">
              <Form.Item className="me-2">
                <Button
                  onClick={() => {

                    setProfileEditMode(false)
                    // setMemberData({ ...memberData, photo: initialPhoto });
                    formRef.current.resetFields();
                  }}
                >
                  取消
                </Button>
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" className="save-profile-btn">
                  儲存修改
                </Button>
              </Form.Item>
            </div>
          )}
        </Form>
      </div>

      <div className="main__form body-info">
        <div className="main__form__header d-flex justify-content-between mb-2">
          <h4 className="main__form__title">身體資訊</h4>
          <a
            className="main__form__edit-btn"
            href="#"
            role="button"
            onClick={(e) => {
              e.preventDefault();
              setBodyInfoEditMode(true)

            }}
          >
            <i className="fa-solid fa-pen-to-square me-1"></i>編輯
          </a>
        </div>

        <Form
          // key={memberData.id}
          ref={formRef}
          className="body-info-form"
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
          disabled={!bodyInfoEditMode}
          // onValuesChange={(changedValue, allChangedValues) => {
          //   console.log(allChangedValues);
          //   setMemberData(allChangedValues);

          // }}
          onFinish={handleSubmit}
        >
          <Form.Item label="會員Id" name="memberId" hidden>
            <Input />
          </Form.Item>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="height" label="身高">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="weight" label="體重">
                <Input type="number" suffix="kg" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="shoulder_width" label="肩寬">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="chest_width" label="胸寬">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="waist_width" label="腰寬">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="butt_width" label="臀圍">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="leg_length" label="腿長">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <Form.Item name="arm_length" label="臂長">
                <Input type="number" suffix="cm" />
              </Form.Item>
            </div>
          </div>

          {bodyInfoEditMode && (
            <div className="d-flex editModeBtns mt-3">
              <Form.Item className="me-2">
                <Button
                  onClick={() => {
                    setBodyInfoEditMode(false)
                    // setMemberData({ ...memberData, photo: initialPhoto });
                    formRef.current.resetFields();
                  }}
                >
                  取消
                </Button>
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" className="save-profile-btn">
                  儲存修改
                </Button>
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </>
  );
}

export default MainForm;