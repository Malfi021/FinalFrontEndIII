import "./Footer.css";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="footerWrapper">
        <button className="top" onClick={scrollToTop}>
          Ir al Principio de página
        </button>
        <div >
          <div className="footer icons">
            <img
              src="/images/DH.png"
              alt="ícono de dh"
              className="dhLogo smallLogo"
            />
            <div >
              <img
                src="./images/ico-facebook.png"
                alt="ícono de facebook"
                className="icon"
              />
              <img
                src="./images/ico-instagram.png"
                alt="ícono de instagram"
                className="icon"
              />
              <img
                src="./images/ico-whatsapp.png"
                alt="ícono de whatsapp"
                className="icon"
              />
              <img
                src="./images/ico-tiktok.png"
                alt="ícono de tiktok"
                className="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
