import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Brandslider from "../BrandSlider/Brandslider";
import Categories_carousel from "../categories_carousel/Categories_carousel";
import TwoBanner from "../TwoBanner/TwoBanner";
import "./Style.css";
const Home = (props) => {
  const [alldata, setalldata] = useState("");
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get(`https://backend.kees.qa/storefront/homepage`).then((res) => {
      setalldata(res.data.homepage);
    });
  };
  return (
    <div className="main_div">
      {alldata?.length ? (
        alldata.map((section, index) => {
          return (
            <div key={index}>
              {section.type === "brands_slider" ? (
                <Brandslider data={section} />
              ) : null}

              {section.type === "single_banner" ? (
                <Banner data={section} />
              ) : null}

              {section.type === "two_banners" ? (
                <TwoBanner data={section} />
              ) : null}

              {section.type === "categories_carousel" ? (
                <Categories_carousel data={section} />
              ) : null}
            </div>
          );
        })
      ) : (
        <div
          className="spinner-border"
          style={{ position: "absolute", top: "45%" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
};

export default Home;
