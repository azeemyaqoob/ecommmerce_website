import React from "react";
const Banner = (props) => {
  // console.log(props, "Bannner");
  // const Banner = [
  //   {
  //     img: img,
  //     id: 12,
  //   },
  // ];
  return (
    <div className="main_div">
      <div className="banner_main_div">
        {/* {console.log(Banner)} */}
        <img
          src={props?.data?.desktop_img}
          style={{ width: "100%" }}
          alt={props?.data?.single_banner_text_alt}
        />
      </div>
    </div>
  );
};

export default Banner;
