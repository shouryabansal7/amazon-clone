import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_backToTop">
        <span className="footer_backToTopText">
          <a href="#">Back To Top</a>
        </span>
      </div>
      <div className="footer_linksCon">
        <div className="footer_links">
          <div className="footer_col">
            <div className="footer_colHead">Get to know Us</div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Release</li>
              <li>Amazon Cars</li>
              <li>Gift a Smile</li>
            </ul>
          </div>
          <div className="footer_colInner" />
          <div className="footer_col">
            <div className="footer_colHead">Connect</div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer_colInner" />
          <div className="footer_col">
            <div className="footer_colHead">Make Money with us</div>
            <ul>
              <li>Sell On Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchant</li>
            </ul>
          </div>
          <div className="footer_colInner" />
          <div className="footer_col">
            <div className="footer_colHead">Let Us Help You</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_lineSpace" />
      <div className="footer_line">
        <span>
          <div className="footer_lineImg">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          </div>
        </span>
        <div className="footer_contries">
          <ul>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherland</li>
            <li>Poland</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div className="footer_details">
        <ul>
          <li>Conditions of Use & Sale</li>
          <li>Privacy Notices</li>
          <li>Interest-Based Ads</li>
        </ul>
        <div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
}

export default Footer;
