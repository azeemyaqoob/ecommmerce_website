import React from "react";
import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";
import Slider from "react-slick";
import "./FeatureIconsStyle.css";

const FeatureIcons = (props) => {
  // console.log(props, "featureicons");

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
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="main_div">
      <h6 className="features_head_title">{props.data.title}</h6>
      <div>
        <Slider {...settings}>
          {props.data.features.map((featuresdata, index) => (
            <div key={index} className="feature_main_div">
              <div className="feature_image">
                <img
                  src={featuresdata?.icon_img}
                  className="features_image"
                  title={featuresdata?.title}
                />
                <p className="title_feature">{featuresdata?.title} </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureIcons;
