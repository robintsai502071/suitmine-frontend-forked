// import logo from "./logo.svg";
import '../../src/App.css';
import TextEditor from './TextEditor/TextEditor';

import React from 'react';

function TextEditorWysiwyg() {
  return (
    <div className="App">
      <div className="editor">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3 className="mt-3 mb-3 fw-bolder">SUITMINE文章後台</h3>
        </div>
        <TextEditor />

      </div>
    </div>
  );
}

export default TextEditorWysiwyg;
