import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./productStyle.scss";
import Dropdown from "react-bootstrap/Dropdown";
import arrowRight from "./../../Assets/arrowRight.svg";
import arrowLeft from "./../../Assets/arrowLeft.svg";
import Slider from "react-slick";
import CategoryCardproduct from "../Category card Product/CategoryCardproduct";

const Product = () => {
  const [state, setstate] = useState([]);
  const [datareceived, setdatareceived] = useState([]);
  const [counter, setCounter] = useState(1);
  const [productdata, setproductdata] = useState("");
  // const [pathchecked, setpathchecked] = useState("");
  // const [path, setpath] = useState("");
  const location = useLocation();
  // console.log(location?.pathname, "location");
  const locationpath = location?.pathname;
  let pathchecked = locationpath.replaceAll("/product/", "");
  console.log(pathchecked, "path");

  useEffect(() => {
    return () => {
      getProductData();
      console.log("jhy");
      console.log(pathchecked, "ii api call");
    };
  }, [pathchecked]);
  const getProductData = async () => {
    await axios
      .get(`https://backend.kees.qa/storefront/product/` + pathchecked)
      .then((res) => {
        setproductdata(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(productdata, "datareceived");

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

  const alertfunction = (event, relatedproduct) => {
    // console.log(relatedproduct, "item");
    datareceived.unshift(relatedproduct);
    // console.log(datareceived, "local");
    localStorage.setItem("cart", JSON.stringify(datareceived));
  };

  const sttings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-sm-2 mt-3 firstdivslider">
   
        {productdata?.images?.map((productslider, index) => {
          
       return (
          <div key={index} className="row">
            <div className="col-sm brand_section_top">
              {console.log(productslider?.file_path,"image")}
              <img
                src={productslider?.cdn_link}
                className="brands_image"
                alt={productslider?.alt_text}
              />
            </div>
          
          </div>
        )})}
  
    </div> */}
          <div className="col-sm-7 mt-3">
            <div>
              <Slider {...sttings}>
                {productdata?.images?.map((productslider, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="col-sm brand_section_top">
                        {/* {console.log(productslider?.file_path, "image")} */}
                        <img
                          src={productslider?.cdn_link}
                          className="brands_image"
                          alt={productslider?.alt_text}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="col-sm-5 mt-3 p-0">
            <div>
              {" "}
              <h5>{productdata.title}</h5>
            </div>
            <div className="container-fluid row p-0">
              <div className="col-sm-2">
                <p>
                  <b>Brand </b>
                </p>
              </div>
              <div className="col-sm-10 ">
                <p className="paragraphH">{productdata?.brand}</p>
              </div>
            </div>
            <div className="container-fluid p-0 row ">
              <div className="col-sm-2">
                <p>
                  <b>Vendor </b>
                </p>
              </div>
              <div className="col-sm-10">
                <p className="paragraphH"> {productdata?.vendor_name}</p>
              </div>
            </div>
            <div className="container-fluid p-0 row">
              <div className="col-sm-2">
                <p>
                  <b>Price </b>
                </p>
              </div>
              <div className="col-sm-10">
                <p className="paragraphH">
                  {productdata?.variants?.map((varirant) => {
                    return <p>{varirant?.price?.original_price} </p>;
                  })}
                </p>
              </div>
            </div>
            <div className="container-fluid p-0 row">
              <div className="col-sm-2">
                <p>
                  <b>Quantity </b>{" "}
                </p>
              </div>
              <div className="col-sm-10">
                <div className="row">
                  <button
                    style={{
                      width: "10%",
                      backgroundColor: "white",
                      textAlign: "center",
                      border: "1px solid rgba(34,36,38,.15)",
                    }}
                    onClick={() =>
                      counter > 0 ? setCounter(counter - 1) : counter
                    }
                  >
                    -
                  </button>
                  <div
                    className="col-2"
                    style={{
                      width: "10%",
                      border: "1px solid black",
                      textAlign: "center",
                      border: "1px solid rgba(34,36,38,.15)",
                    }}
                  >
                    {counter}
                  </div>
                  <button
                    style={{
                      width: "10%",
                      backgroundColor: "white",
                      textAlign: "center",
                      border: "1px solid rgba(34,36,38,.15)",
                    }}
                    onClick={() => setCounter(counter + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="container-fluid p-0 row mt-3">
              <div className="col-sm-6">
                <button className="productbtn btn-lg px-5">ADD TO CART</button>
              </div>
              <div className="col-sm-6">
                <button className="productbtn1 btn-lg px-5 ">BUY IT NOW</button>
              </div>
            </div>

            <div className="container-fluid p-0  row mt-3">
              <div className="col-sm">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <b>DESCRIPTION</b>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        <p
                          className="paragraphH"
                          dangerouslySetInnerHTML={{
                            __html: productdata?.description
                              ? productdata?.description
                              : null,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <b>SPECIFICATION </b>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {productdata?.features?.map((spec, index) => {
                          return (
                            <div className="row" key={index}>
                              <div className="col-sm-4">
                                <p>✔ {spec?.feature_title}</p>
                              </div>
                              <div className="col-sm-8">
                                <p className="paragraphH">
                                  {spec?.feature_details}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid p-0 mt-3">
                  <div className="ptoall">
                    <p className="paragraphH">Share this:</p>
                    <i className="fab fa-facebook-f iconsgap"></i>
                    <i className="fab fa-twitter iconsgap"></i>
                    <i className="fab fa-linkedin-in iconsgap"></i>
                    <i className="fab fa-whatsapp iconsgap"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid div2">
        <h5 className="relatedTitle"> RELATED PRODUCTS</h5>
        <hr className="hrtag"></hr>
        <CategoryCardproduct type={productdata?.related_products} />
        {/* <div className="main_div">
          <Slider {...settings}>
            {productdata?.related_products?.map((relatedproduct, index) => (
              <div key={index}>
                <Link to={"/product/" + relatedproduct?.handle}>
                  <div className="main_product_card">
                    <div>
                      <img
                        src={relatedproduct?.image}
                        width="100%"
                        height="200px"
                        alt="categoryproductimage"
                      />
                    </div>
                    <div>
                      <p className="product_title">{relatedproduct?.title}</p>
                    </div>
                    <div>
                      <p className="product_price">
                        PKR: {relatedproduct?.price?.original_price}
                      </p>
                    </div>
                    <div>
                      <button
                        className="product_button"
                        onClick={(event) =>
                          alertfunction(event, relatedproduct)
                        }
                      >
                        BUY IT NOW
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div> */}
      </div>
    </>
  );
};

export default Product;
