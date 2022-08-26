import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import BlogBanner from '../components/robert/BlogBanner';
import Bloglist from '../components/robert/BlogList';
import BlogSidebar from '../components/robert/BlogSidebar';
import { useState } from 'react';
function Blog() {
  // 載入更多頁面
  // function handleScroll(e) {
  //   const [scrollTop, clientHeight, scrollHeight] = e.currentTarget;
  //   console.log('scrollTop:', scrollTop);
  //   console.log('clientHeight:', clientHeight);
  //   console.log('scrollHeight:', scrollHeight);
  // }
  const [searchWord, setSearchWord] = useState('');
  const [selectOption, setSelectOption] = useState('');
  return (
    // <div className="Blog" onScroll={handleScroll}>
    <div className="Blog">
      <LayoutHeader />
      <BlogBanner />
      <LayoutMain />
      <div className="blog container mt-3 text-center">
        {/* <h2>SUITMINE BLOG</h2> */}
        <div className="row">
          <div className="blog-list col-md-9 col-12">
            <Bloglist searchWord={searchWord} selectOption={selectOption} />
          </div>
          <div className="col-md-3 col-12">
            <BlogSidebar
              setSearchWord={setSearchWord}
              setSelectOption={setSelectOption}
            />
          </div>
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default Blog;
