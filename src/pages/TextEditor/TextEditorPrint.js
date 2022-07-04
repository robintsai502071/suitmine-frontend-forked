import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// 從網址上把 :blog的id 拿下來

function TextEditorPrint() {
  const { blogId } = useParams();
  const [throwBackText, setThrowback] = useState([]);

  useEffect(() => {
    let getdata = async () => {
      // axios.get(URL, config)
      // http://localhost:3001/blogs?id=1
      let response = await axios.get(
        `http://localhost:3001/api/blogs/${blogId}`
      );
      setThrowback(response.data.blog[0].content);
      console.log(response.data.blog[0]);
    };
    getdata();
  }, []);

  const stringToObject = {
    __html: throwBackText,
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div dangerouslySetInnerHTML={stringToObject} />
            {/* {dangerouslySetInnerHTML(throwBackText)} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TextEditorPrint;
