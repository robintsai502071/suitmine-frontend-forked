import React from 'react';
import axios from 'axios';
import LastPageBgc from '../../images/register/1200x675_cmsv2_7231199b-0615-5f96-b27d-5592c25881cc-3115386.png';
import { useLocation } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';

function LastPageSubmit(props) {
  // -------------------錯誤訊息狀態-----------------------
  const [errorMessage, seterrorMessage] = useState('');

  // ----giver---------------useLocation-----------------------
  // 將history傳送過來的資料取下來
  const location = useLocation();

  // -------------------useLocation-----------------------
  // 將history傳送過來的資料取下來
  const history = useHistory();

  // -------------------阻擋非正當管道進入的人(打網址會直接空白)-----------------------
  if (location.state === undefined) {
    return;
  }
  // 接受測量的身體資訊數據
  const { fields, handleFieldChange } = props;
  // 將身體測量資訊數據跟註冊的使用者id傳送給後端
  const newFields = { ...fields, memberId: location.state.insertId };
  console.log(newFields);

  // 使用者ID
  const memberId = location.state.insertId;

  // -------------------處理表單送出的函示-----------------------
  const handleSubmit = async (e) => {
    // 阻擋表單送出
    e.preventDefault();
    try {
      // 當你的表單沒有圖片的時候，可以直接傳輸 json 到後端去
      // axios.post(URL, data, config)
      let response = await axios.patch(
        `http://localhost:3001/api/member/${memberId}/body-info`,
        newFields,
        {
          // 如果想要跨源讀寫 cookie
          withCredentials: true,
        }
      );
      console.log('登入成功', response.data);
    } catch (e) {
      console.error('登入失敗', e.response.data);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <div className=" submitPage position-relative">
          <div className="submitPageImgBox">
            <img src={LastPageBgc} alt="" className="d-md-flex d-none" />
            <div className="positionBox d-flex justify-content-center">
              <div className="registerInputBox  d-flex flex-column justify-content-center ">
                <div className="mx-auto pb-md-5 pb-3">
                  <p className="h3">請再次確認測量資訊</p>
                </div>
                <div
                  action=""
                  className=" mx-auto d-flex flex-column justify-content-center"
                >
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      身高
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.height}
                      name="height"
                      placeholder="請輸入身高"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      體重
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.weight}
                      name="weight"
                      placeholder="請輸入體重"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      肩寬
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.shoulder_width}
                      name="shoulder_width"
                      placeholder="請輸入肩寬"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      胸圍
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.chest_width}
                      name="chest"
                      placeholder="請輸入胸圍"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      臂長
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.arm_length}
                      name="arm_length"
                      placeholder="請輸入臂長"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      腰圍
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.waist_width}
                      name="waist"
                      placeholder="請輸入腰圍"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-md-3 mb-1 mx-1">
                    <label for="exampleFormControlInput1" class="form-label">
                      腿長
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={fields.leg_length}
                      name="leg_length"
                      placeholder="請輸入腿長"
                      onChange={handleFieldChange}
                      required
                    ></input>
                  </div>
                  <button
                    onClick={() => {
                      // 此為套件sweetAleartAPI
                      Swal.fire({
                        icon: 'success',
                        title: '註冊成功',
                        // 按鈕api
                        confirmButtonText: '確認',
                        // 假如按下確認
                      }).then((result) => {
                        // 就連接至/login
                        if (result.isConfirmed) {
                          history.push('/login');
                        }
                      });
                    }}
                    type="submit"
                    className="btn registerBtn mx-auto mt-3"
                  >
                    <p>送出</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LastPageSubmit;
