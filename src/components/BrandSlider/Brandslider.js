import React from "react";

import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";
import Slider from "react-slick";
import "./Style.css";

const Brandslider = (props) => {
  //   console.log(props, " received");
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <img className="brands_arrow" src={arrowLeft} alt="" />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <img className="brands_arrow" src={arrowRight} alt="" />
    </button>
  );

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  // console.log(props, "zainab2");
  return (
    <div className="brands">
      <div className="brand_title">
        <h1>{props?.data?.title}</h1>
      </div>
      <Slider {...settings}>
        {props?.data?.brands?.map((brandslider, index) => (
          <div key={index}>
            <div className="brand_section_top">
              <img
                src={brandslider?.logo}
                className="brands_image"
                alt={brandslider?.handle}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brandslider;

{
  /* <div className="outer_div">
<div className="inner_div">
  <img
    src={brandslider?.logo}
    className="brands_image"
    alt={brandslider?.handle}
  />
</div>
</div> */
}
