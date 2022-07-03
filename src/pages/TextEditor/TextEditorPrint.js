import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function TextEditorPrint() {
  const [throwBackText, setThrowback] = useState([]);

  useEffect(() => {
    let getdata = async () => {
      // axios.get(URL, config)
      let response = await axios.get('http://localhost:3001/api/blogs/31');
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
