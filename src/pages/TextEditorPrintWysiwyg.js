// import logo from "./logo.svg";
// import '../../src/App.css';
import TextEditorPrint from './TextEditor/TextEditorPrint';
import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import BlogBanner from '../components/robert/BlogBanner';
import BlogSidebar from '../components/robert/BlogSidebar';

function TextEditorPrintWysiwyg() {
  return (
    <div className="Blog">

      <LayoutHeader />
      <BlogBanner />
      <LayoutMain />

        {/* <div className="blog-print-bg">

</div> */}
      <div className=" container blog blog-print-container text-center">
        {/* <h2>SUITMINE BLOG</h2> */}
        <div className="row justify-content-center blog-print-row">
          {/* <div className="col-md-3 col-12">
            <BlogSidebar />
          </div> */}
          <div className="blog-list col-md-9 col-12">
            <TextEditorPrint />
          </div>
        </div>
        {/* <div className="blog-print-bg">

        </div> */}
      </div>

      <LayoutFooter />
    </div>
  );
}

export default TextEditorPrintWysiwyg;
