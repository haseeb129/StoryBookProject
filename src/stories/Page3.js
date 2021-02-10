import React from "react";
import "./Page3.css";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";

import image3 from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.png";
import image4 from "../images/Capture4.png";
import image5 from "../images/Capture5.png";

export const Page3 = () => (
  <div>
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
      <br />
    </div>
    <div className="page3div2">
      <div className="page3div2Starting"></div>

      <div className="image3div">
        <img src={image4} />
        <h1>DIY RECIPE</h1>
        <img src={image5} style={{ marginTop: "-30px" }} />
        <h2>Scholary Inhaler</h2>
        <div
          style={{
            // backgroundColor: "black",
            paddingLeft: "23%",
            paddingRight: "23%",
            paddingBottom: "60px",
          }}
        >
          <p>
            7 drops of Rosemary
            <br />7 Drops of White Grapefruit <br />6 Drops of Eucalyptus <br />
            Safety: Do not apply to or near
            <br /> the face of children
          </p>
        </div>
      </div>
    </div>
  </div>
);
