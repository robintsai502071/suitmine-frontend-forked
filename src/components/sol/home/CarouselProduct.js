import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import suit_style1 from '../../../images/sol/suit-style1.svg';
import suit_style2 from '../../../images/sol/suit-style2.svg';
import suit_style3 from '../../../images/sol/suit-style3.svg';
import suit_style4 from '../../../images/sol/suit-style4.svg';

function CarouselProduct() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      // showDots={true}
      infinite={true}
      ssr={true} // means to render carousel on server-side.
      // autoplay壞掉
      // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType壞掉
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <figure className="carouselProduct_pic_outer1">
          <img src={suit_style1} alt="" />
        </figure>
      </div>

      <div>
        <figure className="carouselProduct_pic_outer1">
          <img src={suit_style2} alt="" />
        </figure>
      </div>
      <div>
        <figure className="carouselProduct_pic_outer1">
          <img src={suit_style3} alt="" />
        </figure>
      </div>
      <div>
        <figure className="carouselProduct_pic_outer1">
          <img src={suit_style4} alt="" />
        </figure>
      </div>
    </Carousel>
  );
}

export default CarouselProduct;
