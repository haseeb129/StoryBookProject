import React from "react";
import "./Page3.css";
import { Form, Button } from "react-bootstrap";
import image3 from "../images/28e14bac811214045b5a82a171894e78e1ab6496.png";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

export const Page3 = () => (
  <div className="pageSize3 main3">
    <br />
    <div className="inner3">
      <h1>Method Of Use</h1>

      <p style={{ paddingRight: "50px", paddingLeft: "50px" }}>
        For recommended doses refer to our dosage calculator
      </p>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
      <div className="innerFields3">
        Inhalation{" "}
        <span className="arrowClass">
          <FaArrowsAltH />
        </span>
      </div>
    </div>
  </div>
);
