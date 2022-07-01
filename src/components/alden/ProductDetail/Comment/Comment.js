import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../../utils/config';
// ----- 假資料 -----

function Comment() {
  // ----- 全部評論狀態 -----
  const [comment, setComment] = useState([]);

  // ----- 全部評論狀態 -----
  const [error, setError] = useState('');

  // ----- 從後端傳送資料評論過來 -----
  const commentAxios = async () => {
    try {
      const response = await axios.get(`${API_URL}/prodetail/`);
      console.log('response', response);
      //確保資料一定是陣列
      setComment(response.data);
    } catch (e) {
      setError(e.message);
    }
  };
  // ----- 刷新頁面 -----
  useEffect(() => {
    // 呼叫 commentAxios 像伺服器要資料
    commentAxios();
  }, []);
  console.log(comment);
  return (
    <>
      <div className="container-fluid comment ">
        <div className="commentTitle">
          <div className="commentTitleBottomBorder">
            <h3>顧客評論</h3>
            <div>
              <i class="fa-solid fa-sort-up"></i>時間
              <i class="fa-solid fa-sort-down"></i>
            </div>
          </div>
        </div>
        {/* 評論區塊 */}
        {comment.map((v, i) => {
          return (
            <div key={v.id} className="commentContainer">
              <div className="commentBlock">
                {/* 使用者訊息 */}
                <div className="topSection">
                  {/* 使用者照片ID */}
                  <div>
                    <div className="photo"></div>
                    <div className="userName">
                      <h4>{v.name}</h4>
                    </div>
                  </div>
                  {/* 評論建立時間 */}
                  <div className="date">
                    <h4 className="d-none d-sm-block">{v.commentCreateTime}</h4>
                    <h5 className="d-block d-sm-none">{v.commentCreateTime}</h5>
                  </div>
                </div>
                {/* 評論內容 */}
                <div className="buttonSection">
                  <h5>{v.commentContent}</h5>
                </div>
              </div>
            </div>
          );
        })}

        {/*------------ 頁數 ------------*/}
        <div className="commentPager d-flex justify-content-center">
          <nav>
            <ul className="pager">
              <li className="pager__item pager__item--prev">
                <a className="pager__link" href="#/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewbox="0 0 8 12"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#33313C"
                        d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="pager__item active">
                <a className="pager__link fs-6" href="#/">
                  1
                </a>
              </li>
              <li className="pager__item">
                <a className="pager__link " href="#/">
                  2
                </a>
              </li>
              <li className="pager__item pager__item--next">
                <a className="pager__link" href="#/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewbox="0 0 8 12"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#33313C"
                        d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Comment;
