import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HeaderStyle.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const SecondHeaderBar = () => {
  const [secondheader, setsecondheader] = useState("");
  useEffect(() => {
    getsecondheader();
  }, []);
  const getsecondheader = () => {
    axios.get(`https://backend.kees.qa/storefront/header`).then((res) => {
      setsecondheader(res?.data?.header?.header);
    });
  };

  return (
    <>
      <div className="main_header">
        <div className="first_portion">
          <a href="http://localhost:3000/">
            <img src={secondheader?.logo_image} className="logo_kees" />
          </a>
        </div>
        <div className="second_portion">
          <div className="email_div">
            <DropdownButton
              key="Secondary"
              variant="Secondary"
              title="All categories"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            <input
              type="text"
              // className="form-control"
              placeholder="What are you looking for?"
              aria-label="Email"
              aria-describedby="basic-addon2"
              className="seacrhbar"
              // style={{display: 'none'}}
            />
            <button className="input-group-text button_email" id="basic-addon2">
              <i className="far fa-envelope"></i>
            </button>
          </div>
        </div>
        <div className="third_portion">
          <div>SELL WITH US</div>
          <div className="cart_icons">
            <i className="far fa-user mt-1"></i>
            <i className="fas fa-shopping-bag mt-1"></i>
            <p className="qatarcurrency">QAR 0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondHeaderBar;
