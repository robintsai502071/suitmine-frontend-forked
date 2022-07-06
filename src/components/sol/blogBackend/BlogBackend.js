import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LayoutHeader from '../../robert/LayoutHeader';
import LayoutMain from '../../robert/LayoutMain';
import LayoutFooter from '../../robert//LayoutFooter';
import BlogBanner from '../../robert/BlogBanner';
import Bloglist from '../../robert/BlogList';
import BlogSidebar from '../../robert/BlogSidebar';
import { Link } from 'react-router-dom';
// import logo from '../../images/robert/layout/LOGO.svg';

function BlogBackend() {
  const { blogId } = useParams();
  // 撈資料
  const [dataGet, setDataGet] = useState([]);
  useEffect(() => {
    let dataGet = async () => {
      // http://localhost:3001/stocks/2330?page=1
      // http://localhost:3001/api/auth/checkIsLogin
      let response = await axios.get(
        // `http://localhost:3001/api/blogs/${blogUpdateId}`
        `http://localhost:3001/api/blogs`
      );
    //   console.log(response.data.results);
      // 抓出資料
      let allData = response.data.blogs.map((value) => {
        return {
          title: value.title,
          //   images: value.images,
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
    // offset += 6;
    // window.addEventListener('scroll', handleScroll);
  }, []);


  // ----------------刪除一筆
    // ------------------------------刪除特定資料-----------------------------------------
    // const [mainArea, setMainArea] = useState({
    //   title: '',
    //   images: '',
    //   // textEditorMainText: "",
    //   category_id: '',
    // });
    async function handleDelete(e) {
      // 停掉預設行為
      e.preventDefault();
      try {
        // // 如果表單有圖片，會用 FormData 的方式來上傳
        // let formData = new FormData();
        // formData.append("title", mainArea.title);
        // formData.append("category_id", mainArea.category);
        // formData.append("images", mainArea.photo);
        // formData.append("content", data);
        // console.log(
        //   `標題:${mainArea.title}, 文章分類:${mainArea.category}, 主要內文:${data}, 縮圖:${mainArea.photo}`
        // );
        let response = axios.delete(`http://localhost:3001/api/blogs/${blogId}`);
        // console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    }
  return (
    <>
      <div className="header bg-dark d-flex justify-content-between p-2">
        <div className="logo ms-5 d-flex">
          {/* <img src={logo} alt="" /> */}
          <h2 className="text-white">SUITMINE後臺文章管理</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            {dataGet.map((v, i) => {
              return (
                <div className="article-back-end mb-3 d-flex justify-content-between">
                  <div className="title-backend">{v.title}</div>
                  <div className="button-outter d-flex">
                  <div className="time-backend">{v.create_time}</div>
                    <Link
                      to={`/text-editor-update/${v.id}`}
                      className="d-block"
                    >
                      <div className="button" >修改</div>
                    </Link>
                    <Link
                      to={`/text-editor-update/${v.id}`}
                      className="d-block"
                    > 
                      <div className="button" onClick={handleDelete}>刪除</div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogBackend;
