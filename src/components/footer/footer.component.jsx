import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">ANJALI YADLA &nbsp; {new Date().getMonth()}, {new Date().getDate()}, {new Date().getUTCFullYear()}</div>
    </div>
  );
};

export default FooterPanel;