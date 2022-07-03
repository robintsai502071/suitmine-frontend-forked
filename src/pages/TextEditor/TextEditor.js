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
// import toast, { Toaster } from "react-hot-toast";

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

const TextEditor = () => {
  // ------------------將文字編輯器所有欄位內容撈回文字編輯器----------------------------------
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
      // const notify = () => toast('新增完成');
      let response = axios.post(`http://localhost:3001/api/blogs`, {
        ...mainArea,
        content: data,
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
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
            history: { inDropdown: true },
            link: { inDropdown: true },
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
        <button className="px-3 py-1 me-3" onClick={handleSubmit}>
          送出
        </button>
        <button className="px-3 py-1">取消</button>
      </form>
    </div>
  );
};

export default TextEditor;
