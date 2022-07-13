import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="map">
        <iframe
          title="Gornji prisjan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11661.244681909999!2d22.215975559886196!3d43.05592264037126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755728f51aa33e5%3A0xed8c5a2ec874a5b0!2z0JPQvtGA0ZrQuCDQn9GA0LjRgdGY0LDQvQ!5e0!3m2!1ssr!2srs!4v1645775752254!5m2!1ssr!2srs"
          width="400"
          height="200"
          style={{ border: "0px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
