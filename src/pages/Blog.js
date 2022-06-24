import React from 'react';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';
import BlogBanner from '../components/robert/BlogBanner';
import Bloglist from '../components/robert/BlogList';
import BlogSidebar from '../components/robert/BlogSidebar';
function Blog() {
  return (
    <div>
      <LayoutHeader />
      <BlogBanner />
      <LayoutMain />
      <div class="blog container mt-3 text-center">
          <h2>SUITMINE BLOG</h2>
        <div class="row">
          <div class="blog-list col-md-9 col-12">
            <Bloglist />
          </div>
          <div class="col-md-3 col-12">
            <BlogSidebar/>
          </div>
        </div>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default Blog;
