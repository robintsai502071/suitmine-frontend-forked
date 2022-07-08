// import logo from "./logo.svg";
import '../../src/App.css';

import TextEditorUpdate from './TextEditor/TextEditorUpdate';

import React from 'react';

function TextEditorUpdateWysiwyg() {
  return (
    <div className="App">
      <div className="editor">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3 className="mt-3 mb-3 fw-bolder">SUITMINE文章後台</h3>
        </div>

        <TextEditorUpdate />

      </div>
    </div>
  );
}

export default TextEditorUpdateWysiwyg;
