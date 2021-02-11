import React from "react";
import "./Page4.css";
import Carousel, { Crousal } from "./Crousal";
import { Form, Button } from "react-bootstrap";
// import image3 from "../images/28e14bac811214045b5a82a171894e78e1ab6496.png";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

import image3 from "../images/ebd74b60c4600aba8ea65fd29f684bc3052e79b4.png";

export const Page4 = () => (
  <div>
    <div className="pageSize4 ">
      <br />
      <div
        className="container"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        <div className=" ">
          <span
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              lineHeight: "1",
              position: "relative",
              left: "27px",
            }}
          >
            PLANET PROFILE
          </span>
        </div>
        <img
          src={image3}
          style={{ width: "100%", position: "relative", top: "-35px" }}
        />

        <div className="centered">
          Salvia Sclarea L. is a perennial or biennial plant with broad hairy
          green with a hint of purple leaves. The plant grows up to 3-4 feet at
          full maturity. Native to the Mediterranean. All parts of the plant are
          aromatic.
        </div>
      </div>
    </div>
    <Crousal />
  </div>
);
