import React from "react";
import img from "./../../Assets/1.jpg";
const Banner = (props) => {
  // console.log(props, "Bannner");
  const Banner = [
    {
      img: img,
      id: 12,
    },
  ];
  return (
    <div className="banner_main_div">
      {/* {console.log(Banner)} */}
      <img
        src={props?.data?.desktop_img}
        style={{ width: "100%" }}
        alt={props?.data?.single_banner_text_alt}
      />
    </div>
  );
};

export default Banner;
