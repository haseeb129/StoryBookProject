import React from "react";
import PropTypes from "prop-types";
import image from "../images/page 1.png";
import image1 from "../images/image1.png";
import "./Mainpage.css";
import { Form, Button } from "react-bootstrap";

export const MainPage = () => (
  <div className="pageSize">
    <div className="main">
      <div className="innerdiv">
        <img src={image1} />
      </div>
    </div>
    <div className="main2">
      <h2>Subscribe & Learn</h2>
      <h2>All About Essential Oils</h2>

      <p style={{ marginBottom: "0px" }}>Be the first to know about new </p>

      <p style={{ marginTop: "0px" }}>products & special offers!</p>

      <Form.Control className="input" placeholder="Enter your email" />

      <Button className="storybook-button" variant="primary">
        SIGN UP!
      </Button>
    </div>
  </div>
);
