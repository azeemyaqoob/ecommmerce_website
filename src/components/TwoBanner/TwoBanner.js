import React from "react";
import "./Style.css";
const TwoBanner = (props) => {
  return (
    <div className="main_div">
      <div className="main">
        <div className="child">
          <img
            src={props?.data?.first_banner?.desktop_img}
            className="bimg1"
            alt={props?.data?.first_banner?.banner_alt_text}
          />
        </div>
        <div className="child">
          <img
            src={props?.data?.second_banner?.desktop_img}
            className="bimg2"
            alt={props?.data?.second_banner?.banner_alt_text}
          />
        </div>
      </div>
    </div>
  );
};

export default TwoBanner;
