// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Component } from 'react';
import suit_style1 from '../../../assests/images/simple-slider/suit-style1.svg';
import suit_style2 from '../../../assests/images/simple-slider/suit-style2.svg';
import suit_style3 from '../../../assests/images/simple-slider/suit-style3.svg';
import suit_style4 from '../../../assests/images/simple-slider/suit-style4.svg';

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div
        className="container simpleStyle-container"
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
      >
        <div className="row justify-content-center align-items-center simpleStyle-container-inner">
          <div className="simpleStyle-slider-outer-wrap-outside">
            <h4 className="simpleStyle-title"> Suit Style</h4>
          </div>
          <div className="col-md-8 col-12">
            <Slider {...settings}>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img1"
                    src={suit_style1}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img2"
                    src={suit_style2}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img3"
                    src={suit_style3}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img4"
                    src={suit_style4}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img5"
                    src={suit_style2}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img6"
                    src={suit_style1}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img7"
                    src={suit_style4}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
              <div className="slider-outer-wrap">
                <figure className="slider-outer">
                  <img
                    className="slider-img slider-img8"
                    src={suit_style3}
                    alt=""
                  />
                </figure>
                <h5 className="text-center slider-text">123456</h5>
                <h5 className="text-center slider-text">123456</h5>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
