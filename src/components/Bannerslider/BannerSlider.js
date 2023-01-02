import React from "react";
import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";
import Slider from "react-slick";

const bannerslider = (props) => {
  // console.log(props, "bannerslider");

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
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="mt-3">
      <Slider {...settings}>
        {props?.data?.slides?.map((sliderdata, index) => {
          return (
            <div key={index}>
              {/* {console.log(sliderdata?.desktop_img,"imageslide")} */}
              <img
                src={sliderdata?.desktop_img}
                alt={sliderdata?.banner_slider_alt_text}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default bannerslider;
