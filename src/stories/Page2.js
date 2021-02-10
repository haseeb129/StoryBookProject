import React from "react";
import PropTypes from "prop-types";
import image from "../images/page 1.png";
import image2 from "../images/image2.png";
import "./Page2.css";
import { Row, Col } from "react-bootstrap";
import image3 from "../images/28e14bac811214045b5a82a171894e78e1ab6496.png";
import image4 from "../images/93b8e4a0296a80ba74440cdfa983a5d83190ad1b.png";

import tempIcon from "../images/temIcon.png";
export const Page2 = () => (
  <div className="pageSize main">
    <div className="div1">
      NEW TO ESSENTIAL OILS?
      <span style={{ float: "right", marginRight: "20px" }}>X</span>
    </div>
    <div className="div2">
      <img src={image2} />
    </div>

    <div className="div3">
      EUCALYPTUS
      <p style={{ fontSize: "16px" }}>eucalyptus globulus</p>
    </div>
    <div
      style={{
        backgroundColor: "#ef8e48",
        width: "20%",
        height: "80px",
        borderRadius: "50%",
        marginLeft: "70%",
        position: "absolute ",
        marginTop: "-11%  ",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <img
        src={image4}
        style={{
          width: "50%",
          paddingTop: "29%",
          paddingRight: "4%",
          zIndex: "1",
        }}
      />
    </div>
    <div className="div4">
      <div className="innerdiv1">
        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
          A classic oil with a fresh, green aromatic{" "}
        </p>
        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
          and a rich balsamic undertone
        </p>
      </div>
      <Row
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>
        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>

        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>
        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>

        <Col xs={4} sm={4}>
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </Col>
      </Row>

      <div className="innerdiv2">
        <img src={image3} style={{ width: "50%" }} />
        <br />
        <h2 style={{ color: "#ef8e48" }}>Therapeutic Benefits</h2>

        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p style={{ fontWeight: "bold" }}>
            Eucalyptus has been used historically to encourage open breathing
            and to clear the mind and improve concentration
          </p>

          <p>
            Eucalyptus has been used historically to encourage open breathing
            and to clear the mind and improve concentration. has been used
            historically to encourage open
          </p>
          <br />
          <p className="mutedText">
            Eucalyptus has been used historically to encourage open breathing
            and to clear the and improve concentration.
          </p>
        </div>
      </div>
      <br />
    </div>
  </div>
);
