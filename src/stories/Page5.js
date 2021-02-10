import React from "react";
import "./Page5.css";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";

import image3 from "../images/c6e3fc38f9022f95d56c7c9bb1886b587cd1156e.png";
import image4 from "../images/46fcdfed797809f888b54a211cd00c4c0d6ad136.png";
import image5 from "../images/Capture5.png";

export const Page5 = () => (
  <div>
    <div className="pageSize5 main5">
      <div style={{ paddingTop: "60px", marginBottom: "50px" }}>
        <h2>Similar Scenting Notes</h2>
      </div>

      <Row>
        <Col sm={6} xs={6}>
          <div className="imageDiv5">
            <img src={image3} width="100%" style={{ paddingTop: "20px" }} />
            <p style={{ marginBottom: "0px", height: "50px" }}>
              Hemus <br />
              Lavender
            </p>
            <p
              style={{
                color: "#ef8e48",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              VIEW
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <div className="imageDiv5">
            <img src={image4} width="100%" style={{ paddingTop: "20px" }} />
            <p style={{ marginBottom: "0px", height: "50px" }}>Vetiver</p>
            <p
              style={{
                color: "#ef8e48",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              VIEW
            </p>
          </div>
        </Col>

        {/* <Col sm={4} xs={4}>
        <div className="imageDiv5"></div>
      </Col> */}
      </Row>
    </div>

    <div className="pageSize5Div2">
      <div className="imageDiv2_5">
        <div style={{ paddingTop: "50px", color: "white" }}>
          <h2>Essential Oils Fun Facts!</h2>
          <p>
            Essential oils are an ancient remedy
            <br />
            that dates back to the Egyptians and
            <br />
            has stood the test of time.
          </p>
        </div>
      </div>

      <div className="pageSize5Div3">
        <div
          style={{ paddingTop: "50px", color: "white", paddingBottom: "50px" }}
        >
          <h2>Safe Use</h2>
          <p>
            For external use only. Keep out of reach <br />
            of children. Avoid contact with eyes,
            <br />
            mucus membranes and other sensitive
            <br />
            areas. If pregnant or nursing, undergoing
            <br />
            medical treatment, or if using for pets,
            <br />
            consult a certified professional before
            <br />
            use. If irritation occurs, discontinue use.
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
);
