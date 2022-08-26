// import React from 'react';
import VideoBG from '../components/sol/home/VideoBG';
import ProductCategory from '../components/sol/home/ProductCategory';
import SuitStyle from '../components/sol/home/SuitStyle';
import PointArticle from '../components/sol/home/PointArticle';
import Fabric from '../components/sol/home/Fabric';
// import SuitDisplay from '../components/sol/home/SuitDisplay';
import SimpleSlider from '../components/sol/home/SimpleSlider';
import Meature from '../components/sol/home/Meature';
import LayoutHeader from '../components/robert/LayoutHeader';
import LayoutMain from '../components/robert/LayoutMain';
import LayoutFooter from '../components/robert/LayoutFooter';

function Home() {
  return (
    <>
      <LayoutHeader />
      <VideoBG />
      <LayoutMain />

      <div className="home-main-bg2">
        <div className="home-main-mobile-bg">
          <ProductCategory />
          {/* <Meature /> */}
          <SuitStyle />
          <PointArticle />
          <Fabric />
          <SimpleSlider  className="simple-slider-home"/>
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}

export default Home;
