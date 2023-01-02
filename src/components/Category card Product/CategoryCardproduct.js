import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Style.css";
import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";

import { Link } from "react-router-dom";
import Product from "../Products/Product";
import { Alert } from "react-bootstrap";

const CategoryCardproduct = (props) => {
  const [datareceived, setdatareceived] = useState([]);

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

  const alertfunction = (event, item) => {
    // console.log(item, "item");
    // setdatareceived(item);
    datareceived.unshift(item);
    // console.log(datareceived, "local");
    // console.log(datareceived, " data is here");
    // const datareceived = [...item];
    localStorage.setItem("cart", JSON.stringify(datareceived));
    // console.log(props, "local");
    alert("product", props?.type?.handle);
  };

  return (
    <div className="main_div">
      {/* {console.log(props, "==================")} */}
      <Slider {...settings}>
        {props.type?.map((item, index) => (
          <div key={index}>
            <Link to={"/product/" + item?.handle}>
              <div className="main_product_card">
                <div>
                  <img
                    src={item.image}
                    width="100%"
                    height="200px"
                    alt="categoryproductimage"
                  />
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
                  {/* {console.log(item,"handle")} */}
                  {/* <Link to={`/product${"/"+item.handle}`}> */}

                  <button
                    className="product_button"
                    onClick={(event) => alertfunction(event, item)}
                  >
                    BUY IT NOW
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCardproduct;
