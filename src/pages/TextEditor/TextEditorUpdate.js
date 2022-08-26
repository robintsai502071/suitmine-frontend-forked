// import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
// import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { useState, useRef, useEffect } from 'react';
import '../../style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3001/api/blogs/upload-post-image');
    // xhr.setRequestHeader("Authorization", "Client-ID e4b36e0d18413a5");
    const data = new FormData();
    data.append('photo', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      // 請修改字串
      response.data.link = 'http://localhost:3001' + response.data.link;
      console.log(response);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const TextEditorUpdate = () => {
  // ------------------將文字編輯器所有欄位內容撈回文字編輯器----------------------------------
  // const textTag = useRef();
  const [throwBackText, setThrowback] = useState('');
  const { blogId } = useParams();
  console.log('blogId', blogId);

  // // useEffect(() => {
  // //   let throwBackText = async () => {
  // //     // axios.get(URL, config)
  // //     let response = await axios.get("http://localhost:3001/api/blogs/19");
  // //     // setThrowback(response.blog.content);
  // //     const str = response.data.blog[0].content;
  // //     // console.log(str);
  // //     setThrowback("`" + `${response.data.blog[0].content}` + "`");
  // //   };
  // //   throwBackText();
  // // }, []);

  // // // console.log("throwBackText", throwBackText);

  // // // let overview = "`" + `${throwBackText}` + "`";
  // // // console.log("overview", overview);

  // // const contentBlock = htmlToDraft(throwBackText);
  // // // console.log("contentBlock", contentBlock);
  // // //if (contentBlock) {
  // // const contentState = ContentState.createFromBlockArray(
  // //   contentBlock.contentBlocks
  // // );
  // // const editorDataState = EditorState.createWithContent(contentState);

  useEffect(() => {
    const getBlog = async () => {
      // 我把path改成get
      let response = await axios.get(
        `http://localhost:3001/api/blogs/${blogId}`
      );
      // console.log(response.data.blog[0].content);
      // console.log(response.data);
      // setThrowback(response.data.blog[0].content);
      setMainArea({
        ...mainArea,
        title: response.data.blog[0].title,
        category: response.data.blog[0].category_id,
        // images: response.data.blog[0].images,
      });
      setThrowback(response.data.blog[0].content);
    };
    getBlog();
  }, []);

  useEffect(() => {
    // let overview = `<p>333</p>`;
    // const contentBlock = htmlToDraft("`"+`${throwBackText}`+"`");
    const contentBlock = htmlToDraft(throwBackText);

    //if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorDataState = EditorState.createWithContent(contentState);
    setEditorState(editorDataState);
  }, [throwBackText]);

  // const contentBlock = htmlToDraft("`"+`${throwBackText}`+"`");
  let initialContentBlock = htmlToDraft(``);

  //if (contentBlock) {
  let initialContentState = ContentState.createFromBlockArray(
    initialContentBlock.contentBlocks
  );
  let initialEditorDataState =
    EditorState.createWithContent(initialContentState);

  //}

  // ------------------將所有欄位放進form表單傳入資料庫----------------------------------
  const [editorState, setEditorState] = useState(initialEditorDataState);
  const categorySelect = ['西裝穿搭', '穿搭新聞', '名人穿搭', '西裝配件'];
  // 縮圖(bad way)
  // const [miniPhoto, setMiniPhoto] = useState({
  //   // 上傳api回傳ㄉ
  //   photo: "",
  // });

  const [mainArea, setMainArea] = useState({
    title: '',
    images: '',
    // textEditorMainText: "",
    category_id: '',
  });
  // 文字編輯器內文
  const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  // -------------------------------------------------

  // ---------------------------------------------------

  function handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    setMainArea({ ...mainArea, [e.target.name]: e.target.value });
  }

  // 請呼叫一隻縮圖api!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // 注意生命週期與非同步問題!!!不要用useState可直接解決
  async function handlePhoto(e) {
    // e.preventDefault();
    try {
      console.log(e.target.files);
      // setMiniPhoto({ photo: e.target.files[0] });
      let photo = e.target.files[0];
      // console.log("photo", photo);
      // console.log(miniPhoto);
      // 如果表單有圖片，會用 FormData 的方式來上傳

      let formData = new FormData();

      formData.append('photo', photo);
      // console.log(
      //   `縮圖:${miniPhoto.photo}`
      // );

      let response = await axios.post(
        `http://localhost:3001/api/blogs/upload-thumbnail`,
        formData
      );
      setMainArea({ ...mainArea, images: response.data.data.link });
      // console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
  // console.log(mainArea);
  async function handleSubmit(e) {
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
      let response = axios.patch(`http://localhost:3001/api/blogs/${blogId}`, {
        ...mainArea,
        content: data,
      });
      // console.log(response.data);
      setTimeout(async () => {
        await swal({
          title: '修改成功',
          text: '為您跳轉頁面中',
          buttons: false,
          timer: 1500,
          icon: 'success',
        });
        history.push('/blog-dashboard');
      }, 300);
    } catch (e) {
      console.error(e);
    }
  }

  const history = useHistory();
  function handleCancel() {
    swal({
      title: '取消',
      text: '取消後將遺失目前修改',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('為您跳轉頁面', {
          buttons: false,
          timer: 1200,
          icon: 'success',
        }).then(() => {
          history.push('/blog-dashboard');
          // history.push({
          //   pathname: '/blog',
          //   state: {
          //     name: '3333',
          //   },
          // });
        });
      }
    });
  }

  return (
    <div>
      <form className="text-editor-form" action="">
        <div className="main-area">
          {/* 縮圖標題 */}
          <section>
            <label>縮圖標題</label>
            <input
              type="text"
              name="title"
              value={mainArea.title}
              onChange={handleChange}
            />
            {/* {console.log(mainArea.title)} */}
          </section>
          {/* 文章分類 */}
          <section>
            <label>文章分類</label>
            <select
              name="category_id"
              value={mainArea.category}
              onChange={handleChange}
            >
              <option value="">請選擇</option>
              {categorySelect.map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </section>
          {/* 縮圖 */}
          <section>
            <label htmlFor="photo">縮圖</label>
            <input
              type="file"
              id="photo"
              name="images"
              onChange={handlePhoto}
            />
          </section>
          {/* 文字編輯器抓到的主要內容 */}
          <section>
            <input
              className="text-editor-main-text"
              type="text"
              name="textEditorMainText"
              value={data}
              // onChange={handleChange}
              onChange={() => {}}
            />
            {/* {console.log(data)} */}
          </section>
        </div>

        <Editor
          editorState={editorState}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              // alt: { present: true, mandatory: true },
              previewImage: true,
            },
          }}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />

        {/* 試抓html文字檔 */}
        {/* <textarea
          disabled
          ref={textTag}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea> */}

        {/* 送出文字檔 */}
        <div className="d-flex justify-content-center">
          <button className="px-3 py-1 me-3" onClick={handleSubmit}>
            送出
          </button>

          {/* <Link
            to="/blog-dashboard"
            className="d-block main__sidebar__list__link"
          > */}
          <button className="px-3 py-1" onClick={handleCancel} type="button">
            取消
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default TextEditorUpdate;
