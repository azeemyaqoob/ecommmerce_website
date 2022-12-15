import React from "react";
import CategoryCardproduct from "../Category card Product/CategoryCardproduct";
import "./Style.css";
const Categories_carousel = (props) => {
  return (
    <div className="catagory_main_div">
      <div className="brand_title_category">
        <h6>{props?.data?.title}</h6>
      </div>

      {props?.data?.categories.map((categoryslider, index) => (
        <div key={index}>
          <p style={{ textAlign: "right" }}> {categoryslider?.name}</p>
          <CategoryCardproduct type={categoryslider?.products} />
        </div>
      ))}
    </div>
  );
};

export default Categories_carousel;
