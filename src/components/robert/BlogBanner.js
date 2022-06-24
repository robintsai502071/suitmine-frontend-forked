import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/robert/blog/blog-banner1.png';
import banner2 from '../../images/robert/blog/blog-banner2.png';
import banner3 from '../../images/robert/blog/blog-banner3.png';

function BlogBanner() {
  return (
    <div className="blog-banner">
      <Carousel variant="dark">
        <Carousel.Item>
           <img className="d-block w-100 " src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="text-white ">新季節 新時尚</h1>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="text-white ">我們的西裝 你的晚禮服</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h1 className="text-white ">為什麼不一開始就買好一點</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BlogBanner;
