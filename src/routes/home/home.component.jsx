import React from 'react';
import VideoBG from '../../components/for-home/video-bg/videoBg.component';
import ProductCategory from '../../components/for-home/product-category/productCategory.component';
import SuitStyle from '../../components/for-home/suit-style/suitStyle.component';
import PointArticle from '../../components/for-home/point-article/pointArticle.component';
import Fabric from '../../components/for-home/fabic/fabric.component';
import SimpleSlider from '../../components/for-home/simple-slider/simpleSlider.component';
import LayoutMain from '../../components/layout/layout-main/layoutMain.component';
import LayoutFooter from '../../components/layout/layout-footer/layoutFooter.component';

function Home() {
  return (
    <>
      <VideoBG />
      <LayoutMain />

      <div className="home-main-bg2">
        <div className="home-main-mobile-bg">
          <ProductCategory />
          <SuitStyle />
          <PointArticle />
          <Fabric />
          <SimpleSlider className="simple-slider-home" />
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}

export default Home;
