// import React from 'react';
import VideoBG from '../components/sol/home/VideoBG';
import ProductCategory from '../components/sol/home/ProductCategory';
import SuitStyle from '../components/sol/home/SuitStyle';
import PointArticle from '../components/sol/home/PointArticle';
import Fabric from '../components/sol/home/Fabric';
// import SuitDisplay from '../components/sol/home/SuitDisplay';
import SimpleSlider from '../components/sol/home/SimpleSlider';

function Home() {
  return (
    <>
      <VideoBG />
      <ProductCategory />
      <SuitStyle />
      <PointArticle />
      <Fabric />
      {/* <SuitDisplay /> */}
      <SimpleSlider />
    </>
  );
}

export default Home;
