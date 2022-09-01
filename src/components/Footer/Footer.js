import React from "react";
import Contact from "../Contact/Contact";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContact">
        <div className="contactPlace">
          <Contact />
        </div>
      </div>
      <div className="footerContact">
        <div className="mapPlace">
          {/* <div className="info">
            Ne znam
            <br />
            Ne znam
            <br />
            Beograd
          </div> */}
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1179854929387!2d20.466550315813382!3d44.79878408561571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700b6670bcf3%3A0x8e4492403446569d!2z0KHQstC10YLQuCDQodCw0LLQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1659459756100!5m2!1ssr!2srs"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
