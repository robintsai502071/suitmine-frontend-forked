import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// 抓瀏覽上的
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BlogBackBar from '../../sol/blogBackend/BlogBackBar';
import swal from 'sweetalert';

function BlogBackend() {
  const [newData, setNewData] = useState([]);
  const [pageNow, setPageNow] = useState(1);
  const [perData, setPerData] = useState([]);
  const [dataGet, setDataGet] = useState([]);
  let total = dataGet.length;
  let perpage = 10;
  let lastPage = Math.ceil(total / perpage);
  // console.log('allPage', allPage);

  const { blogId } = useParams();
  // 撈資料
  useEffect(() => {
    let dataGet = async () => {
      let response = await axios.get(`http://localhost:3001/api/blogs`);
      //   console.log(response.data.results);
      // 抓出資料
      let allData = response.data.blogs.map((value) => {
        return {
          title: value.title,
          images: value.images,
          //   content: value.content,
          create_time: value.create_time,
          id: value.id,
        };
      });
      // console.log('所有data要的', allData);
      // console.log('將資料拆借', allData[0].content);

      setDataGet(allData);
      // console.log(stringToHtml.__html[0].title);
      // console.log(allData[0].content);
    };
    dataGet();
  }, []);

  // ----------------刪除一筆-----------------
  function handleDelete(e) {
    // 停掉預設行為
    // e.preventDefault();

    try {
      swal({
        title: '刪除',
        text: '確認刪除本筆資料',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal('刪除單筆文章成功', {
            icon: 'success',
          });
          let response = axios.delete(
            `http://localhost:3001/api/blogs/${e.target.dataset.id}`
          );

          let newDataGet = [...dataGet].filter((v) => {
            return v.id != e.target.dataset.id;
          });
          // console.log('新的', newDataGet);
          setDataGet(newDataGet);
        }
      });

      // --------------alert---------------
    } catch (e) {
      console.error(e);
    }
  }
  // console.log('11111', dataGet);

  // ------------------------------分頁-----------------------------------------
  useEffect(() => {
    // let firstItemIndex = (pageNow - 1) * perpage * pageNow;
    // let lastItemIndex = (pageNow - 1) * perpage * pageNow + perpage;
    let firstItemIndex = (pageNow - 1) * perpage;
    // console.log('第一1筆數', firstItemIndex);
    let lastItemIndex = pageNow * perpage - 1;
    // console.log('最後筆數', lastItemIndex);

    setPerData(dataGet.slice(firstItemIndex, lastItemIndex + 1));
  }, [pageNow, dataGet]);
  console.log('perData', perData);

  let getPage = () => {
    let pages = [];
    for (let i = 0; i < lastPage; i++) {
      pages.push(
        <li
          className={`pager__item ${i + 1 === pageNow ? 'active' : ''}`}
          key={i}
        >
          <a
            className="pager__link fs-6"
            href="#/"
            onClick={() => {
              setPageNow(i + 1);
            }}
          >
            {i + 1}
          </a>
        </li>
        // ------------------------------------------------------------------------------
      );
    }
    return pages;
  };
  console.log('dc', getPage());
  return (
    <>
      <div className="blog-backend-header bg-dark d-flex justify-content-between p-2">
        <div className="logo ms-5 d-flex">
          {/* <img src={logo} alt="" /> */}
          <Link to="/blog">
            <h2 className="text-white">SUITMINE後台文章管理</h2>
          </Link>
        </div>
      </div>
      <div className="container blog-backend-container ">
        <div className="row ">
          <div className="col-2">
            <BlogBackBar />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-9 d-flex justify-content-center blog-backend-blog-item-bar">
                <section className="">文章標題</section>
              </div>
              <div className="col-3 d-flex justify-content-between blog-backend-blog-item-bar">
                <section className="blog-backend-b1 ms-5">建立時間</section>
                <section className="blog-backend-b2">調整</section>
              </div>
              {perData.map((v, i) => {
                return (
                  <div className="article-back-end mb-3 d-flex justify-content-between">
                    {/* <div className="images-backend">
                      <img
                        src={v.images}
                        className="images-backend-inside"
                        alt="..."
                      />
                    </div> */}
                    <div className="title-backend">{v.title}</div>
                    <div className="button-outter d-flex">
                      <div className="time-backend">{v.create_time}</div>
                      <Link
                        to={`/text-editor-update/${v.id}`}
                        className="d-block"
                      >
                        <div className="button mx-3">
                          <i class="fa-solid fa-pencil"></i>
                        </div>
                      </Link>
                      {/* <Link
                        to={`/text-editor-update/${v.id}`}
                        className="d-block"
                      > */}
                      <div className="button">
                        {/* onClick事件要綁在點選的tag */}
                        <i
                          class="fa-solid fa-trash-can blog-backend-trash"
                          onClick={handleDelete}
                          data-id={v.id}
                        ></i>
                        {/* 刪除 */}
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 text-center">
            <nav>
              <ul className="pager">
                <li className="pager__item pager__item--prev">
                  <a className="pager__link" href="#/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#33313C"
                          d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>

                {/* 創造一個依照pageTotal長度的陣列，來呈現目前的分頁元件項目 */}
                {/* 切換分頁都是在設定pageNow狀態而已 */}

                {/* {pages.map((v, i) => {
                  return v
                })} */}
                {getPage()}

                <li className="pager__item pager__item--next">
                  <a className="pager__link" href="#/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                    >
                      <g fill="none" fillRule="evenodd">
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
        {/* ------------------------------------------------------------- */}
      </div>
    </>
  );
}

export default BlogBackend;
