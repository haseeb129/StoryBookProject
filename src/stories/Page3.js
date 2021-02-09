import React from "react";
import "./Page3.css";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";

import image3 from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.png";

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

    <div className="inner3">
      <span style={{ fontSize: "24px" }}>Blends Well With Others</span>
      <br />
      <Row style={{ marginTop: "20px" }}>
        <Col xs={6} sm={6}>
          <img src={image3} className="roundImage" />
          <span style={{ fontSize: "20px" }}>Lavender</span>
          <div className="afterImageButton">View</div>
        </Col>
        <Col xs={6} sm={6}>
          <img src={image3} className="roundImage" />
          <span style={{ fontSize: "20px" }}>Lavender</span>

          <div className="afterImageButton">View</div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Col xs={6} sm={6}>
          <img src={image3} className="roundImage" />
          <span style={{ fontSize: "20px" }}>Lavender</span>

          <div className="afterImageButton">View</div>
        </Col>
        <Col xs={6} sm={6}>
          <img src={image3} className="roundImage" />
          <span style={{ fontSize: "20px" }}>Lavender</span>

          <div className="afterImageButton">View</div>
        </Col>
      </Row>
    </div>
  </div>
);
