import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../../utils/config';
// ----- 假資料 -----

function Comment() {
  // ----- 全部評論狀態 -----
  const [comment, setComment] = useState([]);

  // ----- 評論時間排序 -----
  const [order, setOrder] = useState('asc');

  // ----- 排序 -----
  const [error, setError] = useState('');

  // ========= 分頁用 =========
  //----- pageNow 目前在第幾頁 -----
  const [pageNow, setPageNow] = useState(1); //初始化1，至少會有1頁

  //----- perPage 每頁多少項目 -----
  const perPage = 6;

  //----- perPage 每頁多少項目 -----
  const [pageTotal, setPageTotal] = useState(1); //初始化1，至少會有1頁

  //----- 每頁第一筆商品索引與最後一筆商品索引 -----
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  // ========= 從後端傳送資料評論過來 =========
  const commentAxios = async () => {
    try {
      const response = await axios.get(`${API_URL}/prodetail/`);
      console.log('response', response.data);

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(response.data)) {
        setComment(response.data);

        //總頁數 = 資料的總長度/每頁有幾筆 EX:10筆/每頁5筆 = 2頁
        setPageTotal(Math.ceil(response.data.length / perPage));
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試');
      }
    } catch (e) {
      setError(e.message);
    }
  };
  // ----- 刷新頁面 -----
  useEffect(() => {
    // 呼叫 commentAxios 像伺服器要資料
    commentAxios();
  }, []);

  // ----- 刷新頁面(每頁第一筆商品索引與最後一筆商品索引,會帶進商品呈現的filter) -----
  useEffect(() => {
    // 第一筆商品索引
    setFirstIndex((pageNow - 1) * perPage);
    // 最後一筆商品索引
    setLastIndex(pageNow * perPage - 1);
  }, [pageNow]);

  console.log(comment);

  return (
    <>
      <div className="container-fluid comment ">
        <div className="commentTitle">
          <div className="commentTitleBottomBorder d-flex justify-content-between align-items-center">
            <div>
              <h3>顧客評論</h3>
            </div>
            <div className="arrowTimeAscBox d-flex align-items-center">
              <div className="btn" onClick={() => {}}>
                <i class=" fa-solid fa-sort-up arrowSize mt-2 "></i>
              </div>
              <p className="mx-3">依時間排序</p>
              <div className="btn " onClick={() => {}}>
                <i class=" fa-solid fa-sort-down arrowSize mb-2 "></i>
              </div>
            </div>
          </div>
        </div>
        {/* 評論區塊 */}
        {comment
          .filter((v, i) => {
            return i >= firstIndex && i <= lastIndex; // <--先篩選商品區間,再map出來
          })
          .map((v, i) => {
            return (
              <div key={v.id} className="commentContainer">
                <div className="commentBlock">
                  {/* 使用者訊息 */}
                  <div className="topSection">
                    {/* 使用者照片ID */}
                    <div>
                      <div className="photo"></div>
                      <div className="userName">
                        <h5>{v.name}</h5>
                      </div>
                    </div>
                    {/* 評論建立時間 */}
                    <div className="date">
                      <h5 className="d-none d-sm-block">
                        {v.commentCreateTime}
                      </h5>
                      <h6 className="d-block d-sm-none">
                        {v.commentCreateTime}
                      </h6>
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
              {/* 上一頁 */}
              <li
                onClick={() => {
                  setPageNow(pageNow <= 1 ? 1 : pageNow - 1);
                }}
                className="pager__item pager__item--prev"
              >
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
              {/* 頁碼 */}
              {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                  return (
                    <>
                      <li
                        key={i}
                        className={`pager__item ${
                          i + 1 === pageNow ? 'active' : ''
                        }
                        `}
                      >
                        {/* active */}
                        <a
                          onClick={() => {
                            // 將現在第幾頁設定回狀態
                            // 值為被點的頁碼的索引+1
                            setPageNow(i + 1);
                          }}
                          className="pager__link fs-6"
                          href="#/"
                        >
                          {/* 索引值+1就是頁碼 */}
                          {i + 1}
                        </a>
                      </li>
                    </>
                  );
                })}

              {/* 下一頁 */}
              <li
                onClick={() => {
                  setPageNow(pageNow + 1);
                }}
                className="pager__item pager__item--next"
              >
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
