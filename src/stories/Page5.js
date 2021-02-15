import React from "react";
// import "./Page5.css";
// FaArrowsAltH
import { FaArrowsAltH } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import image6 from "../images/c5984bc07b9264ee5565163d69da584896232dca.jpg";

import image3 from "../images/c6e3fc38f9022f95d56c7c9bb1886b587cd1156e.jpg";
import image4 from "../images/46fcdfed797809f888b54a211cd00c4c0d6ad136.jpg";
import image5 from "../images/Capture5.jpg";

import styled from "styled-components";

const PageSize5 = styled.div`
  background-color: #5a7d62;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "pill-gothic";
  color: white;
  align-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: -8px;
  color: white;
`;

const ImageDiv5 = styled.div`
  min-height: 50vh;
  color: white;
  background-color: white;
  border-radius: 30px;
  color: black;
  font-family: "pill-gothic";
  margin-bottom: 60px;
`;

const PageSize5Div2 = styled.div`
  background-color: #6b8d73;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: "pill-gothic";
`;

const ImageDiv2_5 = styled.div`
  background-image: url(${image6});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  min-height: 30vh;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const PageSize5Div3 = styled.div`
  background-color: #5a7d62;
  border-radius: 30px;
  min-height: 30vh;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const Page5 = () => (
  <div>
    <PageSize5>
      <div style={{ paddingTop: "60px", marginBottom: "50px" }}>
        <h2>Similar Scenting Notes</h2>
      </div>

      {/* <Carousel
        className="fontclass"
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
      >
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

        </Row>
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


        </Row>
      </Carousel> */}

      <Row>
        <Col sm={6} xs={6}>
          <ImageDiv5>
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
          </ImageDiv5>
        </Col>
        <Col sm={6} xs={6}>
          <ImageDiv5>
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
          </ImageDiv5>
        </Col>

        {/* <Col sm={4} xs={4}>
        <div className="imageDiv5"></div>
      </Col> */}
      </Row>
    </PageSize5>

    <PageSize5Div2>
      <ImageDiv2_5>
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
      </ImageDiv2_5>

      <PageSize5Div3>
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
      </PageSize5Div3>
    </PageSize5Div2>
  </div>
);
