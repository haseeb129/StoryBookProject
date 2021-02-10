import React from "react";
import "./Page6.css";
// FaArrowsAltH
// import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import { FiMail, FiInstagram } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { Row, Col } from "react-bootstrap";

import image3 from "../images/c6e3fc38f9022f95d56c7c9bb1886b587cd1156e.png";
import image4 from "../images/46fcdfed797809f888b54a211cd00c4c0d6ad136.png";
import image5 from "../images/Capture5.png";
import image1 from "../images/image1.png";
import image2 from "../images/page 1.png";
import image7 from "../images/Capture7.png";

export const Page6 = () => (
  <div className="fontclass">
    <div className="main6">
      <div className="innerdiv6">
        <img src={image1} />
      </div>
    </div>

    <div className="innerdiv6_2">
      <h2 style={{ color: "#ef8e48" }}>
        Experience the
        <br />
        Soli di!erence
      </h2>

      <div
        style={{ paddingRight: "12%", paddingLeft: "12%", marginTop: "15px" }}
      >
        <p>
          We believe that our planet's biodiversity is <b />
          beautiful, and that each plant and subsequent
          <b />
          single (solo) essential oil has a unique purity
          <b />
          and story worth sharing and experiencing.
          <b />
        </p>

        <p style={{ marginTop: "15px" }}>
          To learn more about our mission and the
          <b />
          importance of regenerative practices, visit
        </p>
      </div>
      <button className="storybook-button6" variant="primary">
        SOLIESSENTIALS.COM
      </button>
    </div>

    <div className="pageSizeDiv2">
      <h2>
        PURE INGREDIENTS.
        <br />
        PURE PURPOSE.
      </h2>
      <div
        style={{
          backgroundColor: "#6b8d73",
          borderTop: "2px solid #5a7d62 ",
          marginTop: "60px",
          marginBottom: "60px",
          marginLeft: 20,
          marginRight: 20,
        }}
      ></div>
      <div className="imageDiv6">
        <div style={{ paddingTop: "50px", color: "white" }}>
          <h2>
            Sign up for 15%
            <br />
            off your next order
          </h2>
          <p>
            Be the first to know about new
            <br />
            products & special o!ers!
          </p>
        </div>

        <div className="divinputField">
          <FiMail color="black" size={30} />
          <input
            className="input6"
            placeholder="Enter your email"
            type="text"
          />
          <button className="storybook-button6_2">Submit</button>
        </div>
      </div>
      <div style={{ alignContent: "center" }}>
        <span>
          <FaFacebook
            color="#5a7d62"
            size={50}
            style={{ fill: "white", marginRight: "10px", marginLeft: "10px" }}
          />
          <FiInstagram
            color="#5a7d62"
            size={55}
            style={{ fill: "white", marginRight: "10px", marginLeft: "10px" }}
          />
        </span>
      </div>
    </div>

    <div style={{ backgroundColor: "black" }}>
      <div className="page6div2Starting"></div>
      <div className="main6">
        <div
          className="innerdiv6"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <img src={image7} style={{ width: "50%" }} />
        </div>
      </div>

      <div style={{ backgroundColor: "#3d5b50", minHeight: "100px" }}>
        <Row>
          <Col sm={4} xs={4}>
            <div className="audioDiv">
              <img src={image2} style={{ width: "100%" }} />
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <div className="innnerdiv6_3">
      <div className="innnerdiv6_3_1">
        <div className="crossdiv">
          <GrClose color="black" size={20} style={{ marginRight: "15px" }} />
        </div>
        <div className="innnerdiv6_3_1_pinkBackground"></div>

        <h2 style={{ color: "#ef8e48" }}>Inhalation</h2>

        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <p>
            Add recommended drops on a tissue,
            <br />
            cotton ball or in a nasal inhaler. Deeply
            <br />
            inhale for 2-4 minutes and alternate
            <br />
            between nostrils every minute. Do not
            <br />
            continuously inhale longer than 30
            <br />
            minutes. Wait at least 1 hour between
            <br />
            sessions. Use as needed.
            <br />
          </p>
        </div>

        <div className="downdiv">
          Always follow safety statements on all essential oils.
        </div>
      </div>
    </div>

    <div className="innnerdiv6_3">
      <div className="innnerdiv6_3_1">
        <div className="crossdiv">
          <GrClose color="black" size={20} style={{ marginRight: "15px" }} />
        </div>

        <h2 style={{ color: "#ef8e48" }}>Did You Know?</h2>

        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
          }}
        >
          <p>
            The use of aromatic plants can be traced back
            <br />
            thousands of years, used for their healing
            <br />
            therapeutics in the form of crushing, burning,
            <br />
            eating, and in bathing practices. Thanks to the
            <br />
            many years of science and cultures who have
            <br />
            perfected the art of distillation, we are now
            <br />
            able to access the therapeutic and healing
            <br />
            benefits of essential oils.
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
);
