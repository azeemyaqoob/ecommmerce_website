import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FooterStyle.scss";
import support from "./../../Assets/support.png";
import badgesuccess from "./../../Assets/badgesucesss.png";
const Footer = () => {
  const [footerdata, setfooterdata] = useState("");
  useEffect(() => {
    getfooterdata();
  }, []);
  const getfooterdata = () => {
    axios.get(`https://backend.kees.qa/storefront/footer`).then((res) => {
      setfooterdata(res?.data?.footer);
    });
  };
  // {
  //   console.log(footerdata.footer_logo, "logo data");
  // }

  // var Str = footerdata.contact_information;
  // var newStr = Str.replace("<p>", " ");

  // console.log(newStr);
  // {
  //   footerdata.contact_information.replace("<p>", " ");
  // }
  // var str = footerdata.contact_information;
  // var par = str.slice(str.indexOf("<p>") + 3, str.lastIndexOf("</p>"));
  // var par = str.replaceAll("<p>", " ");
  // var par = par.replaceAll("</p>", " ");
  // console.log(par);

  // console.log(
  //   (dangerouslySetInnerHTML = { __html: footerdata ? "hy" : "bye" }),
  //   "data"
  // );

  return (
    <>
      <div className="main_footer_div">
        <div className="col-sm-3 first_footer_div">
          <img className="logokees" src={footerdata?.footer_logo?.logo_image} />

          <div className="row mt-3">
            <div className="col-sm-3">
              <img src={support} className="support_image" />
            </div>
            <p
              className="col-sm-9 contact_info_footer"
              dangerouslySetInnerHTML={{
                __html: footerdata.contact_information
                  ? footerdata.contact_information
                  : null,
              }}
            ></p>
          </div>

          <p className="contact_phone mt-0 ">{footerdata.phone_number}</p>
        </div>

        <div className="col-sm-6 footer_colour ">
          {footerdata?.navigations?.map((navigationdata, index) => (
            <div key={index} className="row ">
              {/* {console.log(navigationdata, "navi")} */}
              <div className="navigation_div">
                <h6>{navigationdata.title}</h6>
                {navigationdata?.menu?.map((menudata, index) => (
                  <div key={index}>
                    <p href={menudata.link}>{menudata.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-sm-3 subscribe_us">
          <h3>Subscribe Us</h3>
          <p>we dont send spam do dont worry</p>
          <div className="email_placeholder">
            <input
              type="text"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
              className="inputemail"
            />
            <button className="input-group-text button_email" id="basic-addon2">
              <i className="far fa-envelope"></i>
            </button>
          </div>
          <a
            href="https://theqa.qa/certificates/details/f11cd127-ef14-4366-afdd-441ef7f1f11f"
            target="blank"
          >
            <img
              src={badgesuccess}
              width="70%"
              height="80px"
              className="pt-4"
            />
          </a>
        </div>
      </div>

      <div className="row justify-content-between main_footer_div">
        <hr className="hrtag"></hr>
        <div className="col-3 mb-3 footertext">
          © 2021 KEES. All Right Reserved.
        </div>
        <div className="col-2 iconsdiv mb-3">
          <i className="fab fa-whatsapp "></i>
          <i className="fab fa-linkedin "></i>
          <i className="fab fa-facebook-square "></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
