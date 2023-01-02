import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Brandslider from "../BrandSlider/Brandslider";
import Categories_carousel from "../categories_carousel/Categories_carousel";
import FeatureIcons from "../Feature icons/FeatureIcons";
import Footer from "../Footer/Footer";
import TwoBanner from "../TwoBanner/TwoBanner";
import BannerSlider from "../Bannerslider/BannerSlider.js";
import "./Style.css";
const Home = (props) => {
  const [alldata, setalldata] = useState("");
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get(`https://backend.kees.qa/storefront/homepage`).then((res) => {
      setalldata(res.data.homepage);
      // console.log(alldata, "check");
    });
  };
  // console.log(alldata, "hoem");
  return (
    <div>
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
              {section.type === "features_icons" ? (
                <FeatureIcons data={section} />
              ) : null}
              {section.type === "banner_slider" ? (
                <BannerSlider data={section} />
              ) : null}
            </div>
          );
        })
      ) : (
        <div
          className="spinner-border"
          style={{
            // position: "absolute",
            position: "fixed",
            top: "25%",
            left: "50%",
          }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
};

export default Home;
