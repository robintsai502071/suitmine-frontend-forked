import { Form, Input, Radio, Button } from 'antd';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchUserData } from '../../../../utils/axiosApi';

import {
  fetchUserProfileAsync,
  setUserProfile,
} from '../../../../store/user/user.slice';

import {
  selectCurrentUser,
  selectUserProfile,
} from '../../../../store/user/user.selector';

function MainForm() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userProfile = useSelector(selectUserProfile);

  // 加上 || {} 是為了防止錯誤 Uncaught TypeError: Cannot destructure property ... 'currentUser' as it is null.
  const { user_id } = currentUser || {};

  // 取得會員資料
  useEffect(() => {
    if (user_id === '') return;
    dispatch(fetchUserProfileAsync(user_id));
  }, [user_id]);

  // 解構 userProfile
  const {
    id,
    email,
    username,
    gender,
    birth_date,
    phone,
    address,
    arm_length,
    chest_width,
    leg_length,
    shoulder_width,
    waist_width,
    butt_width,
    height,
    weight,
  } = userProfile || {};

  const [profileEditMode, setProfileEditMode] = useState(false);

  // 點選編輯檔案自動 focus 第一個 Input
  const nameInputRef = useRef();
  // ANTD 還原 memberData 預設值用
  const memberFormRef = useRef();

  async function handleSubmit(values) {
    patchUserData(id, values);
    dispatch(setUserProfile(values));
    setProfileEditMode(false);
  }

  const initialValuesForForm = {
    gender: gender,
    email: email,
    username: username,
    phone: phone,
    address: address,
    birth_date: birth_date,
    shoulder_width: shoulder_width,
    arm_length: arm_length,
    chest_width: chest_width,
    leg_length: leg_length,
    butt_width: butt_width,
    waist_width: waist_width,
    height: height,
    weight: weight,
  };

  // 切換編輯模式
  useEffect(() => {
    if (profileEditMode === true) {
      nameInputRef.current.focus({
        cursor: 'end',
      });
    }
  }, [profileEditMode]);

  return (
    <div className="member-profile-form">
      <Form
        key={id}
        ref={memberFormRef}
        className="member-form"
        autoComplete="off"
        colon={false}
        initialValues={initialValuesForForm}
        onFinish={handleSubmit}
      >
        <div className="main__form member-profile">
          <div className="main__form__header d-flex justify-content-between mb-2">
            <h4 className="main__form__title">個人檔案</h4>
            <a
              className="main__form__edit-btn"
              href="#"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                setProfileEditMode(true);
              }}
            >
              <i className="fa-solid fa-pen-to-square me-1"></i>編輯
            </a>
          </div>

          <Form.Item
            label="電子郵件"
            name="email"
            className="member-form__email"
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="username"
            label="姓名"
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
            ]}
            className="member-form__username"
          >
            <Input
              {...{ ref: nameInputRef }}
              disabled={!profileEditMode}
              placeholder={username ? '' : '尚未填寫'}
            />
          </Form.Item>

          <Form.Item
            label="生日"
            name="birth_date"
            className={`member-form__birth ${birth_date ? 'disabled' : ''}`}
            rules={[
              {
                required: true,
                message: '此欄位為必填欄位',
              },
            ]}
          >
            <Input
              type="date"
              disabled={birth_date}
              placeholder={birth_date ? '' : '尚未填寫'}
            />
          </Form.Item>

          <Form.Item name="gender" label="性別">
            <Radio.Group disabled={!profileEditMode}>
              <Radio value={0}>先生</Radio>
              <Radio value={1}>小姐</Radio>
              <Radio value={2}>不透露</Radio>
            </Radio.Group>
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
            className="member-form__phone"
          >
            <Input
              type="tel"
              pattern="[0-9]*"
              disabled={!profileEditMode}
              placeholder={phone ? '' : '尚未填寫'}
              maxLength={10}
            />
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
            className="member-form__address"
          >
            <Input
              disabled={!profileEditMode}
              placeholder={address ? '' : '尚未填寫'}
            />
          </Form.Item>
        </div>

        <div className="main__form body-info">
          <div className="main__form__header d-flex justify-content-between mb-2">
            <h4 className="main__form__title">
              身體資訊
              {height ? (
                ''
              ) : (
                <span className="body-info__reminder ms-2">
                  您尚未填寫身體資訊！
                </span>
              )}
            </h4>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="height"
                label="身高"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input
                  type="number"
                  suffix="cm"
                  disabled={!profileEditMode}
                  min={0}
                  step={0.1}
                />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="weight"
                label="體重"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="kg" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="shoulder_width"
                label="肩寬"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="chest_width"
                label="胸寬"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="waist_width"
                label="腰寬"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="butt_width"
                label="臀圍"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="leg_length"
                label="腿長"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Form.Item
                name="arm_length"
                label="臂長"
                rules={[
                  {
                    required: true,
                    message: '此欄位為必填欄位！',
                  },
                ]}
              >
                <Input type="number" suffix="cm" disabled={!profileEditMode} />
              </Form.Item>
            </div>
          </div>
          {profileEditMode && (
            <div className="d-flex editModeBtns mt-3">
              <Form.Item className="me-2">
                <Button
                  onClick={() => {
                    setProfileEditMode(false);

                    memberFormRef.current.resetFields();
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
        </div>
      </Form>
    </div>
  );
}

export default MainForm;
