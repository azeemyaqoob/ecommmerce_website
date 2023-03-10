import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HeaderStyle.scss";
const Header = () => {
  const [headerdata, setheaderdata] = useState("");
  useEffect(() => {
    return () => {
      getHeaderData();
    };
  }, []);
  const getHeaderData = () => {
    axios.get(`https://backend.kees.qa/storefront/header`).then((res) => {
      setheaderdata(res?.data?.header?.announcement_bar);
    });
  };
  // console.log(headerdata, "headerdata");
  return (
    <div className="header_backgroumd" style={{ backgroundColor: "black" }}>
      <div className="header_div">
        <div className="d-flex justify-content-between header_main_div">
          <div>
            <p className="headingfirst">{headerdata.phone_number}</p>
          </div>
          <div>
            <p className="headingfirst">{headerdata.announcement_text}</p>
          </div>
          <div className="headingfirst">
            {headerdata.show_language ? "English" : "Urdu"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
