import React from "react";
import Slider from "react-slick";
import "./Style.css";
import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";
const CategoryCardproduct = (props) => {
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
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.type?.map((item, index) => (
          <div key={index}>
            <div className="main_product_card">
              <div>
                <img src={item.image} width="100%" height="200px" />
              </div>
              <div>
                <p className="product_title">{item.title}</p>
              </div>
              <div>
                <p className="product_price">
                  PKR: {item.price.original_price}
                </p>
              </div>
              <div>
                <button className="product_button">BUY IT NOW</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCardproduct;
