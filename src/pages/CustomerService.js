import React from 'react';
import Form from 'react-bootstrap/Form';
import InputHere from '../components/alden/InputHere';

function CustomerService() {
  const labelName = ['您的Email地址', '主旨'];
  return (
    <>
      {/* <!-- container --> */}
      <div class="container">
        <div className="row">
          {/* <!-- main --> */}
          <main class="col-7 m-auto ">
            <form action="">
              {/* <!--選擇問題--> */}
              <div>
                <div>
                  <label for="exampleFormControlInput1" class="form-label ">
                    請在下方選擇你的問題
                  </label>
                </div>
                <select
                  class="form-select rounded-0"
                  aria-label="Default select example rounded-0"
                >
                  <option selected>一般諮詢</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              {/* <!--Email--> */}
              <InputHere labelName={labelName[0]} />

              {/* <!--主旨--> */}
              <InputHere labelName={labelName[1]} />

              {/* <!--請描述你的問題--> */}
              <div>
                <div>
                  <label for="exampleFormControlTextarea1" class="form-label">
                    請描述你的問題
                  </label>
                </div>
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="9"
                ></textarea>
              </div>

              {/* <!-- 上傳附件 --> */}
              <Form.Group controlId="formFileMultiple" className="mb-5">
                <Form.Label>上傳附件(非必要)</Form.Label>
                <Form.Control type="file" multiple className="mt-3" />
              </Form.Group>

              {/* <!-- 送出button --> */}
              <div class="button">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="inputGroupFileAddon04"
                >
                  送出
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default CustomerService;
