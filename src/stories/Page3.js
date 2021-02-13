import React from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import image3 from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.png";
import image4 from "../images/Capture4.png";
import image5 from "../images/Capture5.png";
import image6 from "../images/fe0ac09c80490c55e346aa02c537600dac723d2d.png";
import styled from "styled-components";

const PageSize = styled.div`
  @font-face {
    font-family: "pill-gothic";
    src: url("../Fonts/Pill Gothic 300mg Bold.ttf") format("truetype");
  }
  min-height: 100vh;
  background-color: #6b8d73;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "pill-gothic";
  align-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: -8px;
`;

const Inner3 = styled.div`
  @font-face {
    font-family: "pill-gothic";
    src: url("../Fonts/Pill Gothic 300mg Bold.ttf") format("truetype");
  }
  padding-top: 50px;
  padding-bottom: 25px;
  margin-top: 60px;
  margin-bottom: 60px;
  border-radius: 30px;
  background-color: #5a7d62;
  color: white;
`;
const InnerFields3 = styled.div`
  background-color: #6b8d73;
  border-radius: 30px;
  margin-right: 12px;
  margin-left: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 25px;
  padding-left: 25px;
  text-align: left;
  margin-bottom: 10px;
  font-weight: bold;
`;
const ArrowClass = styled.span`
  float: right;
  transform: rotate(130deg);
`;
const RoundImage = styled.img`
  border-radius: 50%;
  width: 80%;
`;
const AfterImageButton = styled.div`
  background-color: #6b8d73;
  border-radius: 30px;
  margin-right: 12px;
  margin-left: 12px;
  padding-right: 15px;
  padding-left: 15px;

  font-weight: bold;
`;
const Page3div2 = styled.div`
  background-image: url(${image6});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  color: white;
  text-align: center;
  font-family: "pill-gothic";
`;
const Page3div2Starting = styled.div`
  margin-top: -9px;
  background-color: #6b8d73;
  border-radius: 0 0 30px 30px;
  min-height: 8vh;
`;
const Image3div = styled.div`
  padding-top: 60px;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const Page3 = () => (
  <div>
    <PageSize>
      <br />
      <Inner3>
        <h1>Method Of Use</h1>

        <p style={{ paddingRight: "50px", paddingLeft: "50px" }}>
          For recommended doses refer to our dosage calculator
        </p>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
        <InnerFields3>
          Inhalation
          <ArrowClass>
            <FaArrowsAltH />
          </ArrowClass>
        </InnerFields3>
      </Inner3>

      <Inner3>
        <span style={{ fontSize: "24px" }}>Blends Well With Others</span>
        <br />
        <Row style={{ marginTop: "20px", marginBottom: "50px" }}>
          <Col xs={6} sm={6}>
            <RoundImage src={image3} />
            <span style={{ fontSize: "20px" }}>Lavender</span>

            <AfterImageButton>View</AfterImageButton>
          </Col>
          <Col xs={6} sm={6}>
            <RoundImage src={image3} />

            <span style={{ fontSize: "20px" }}>Lavender</span>
            <AfterImageButton>View</AfterImageButton>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", marginBottom: "50px" }}>
          <Col xs={6} sm={6}>
            <RoundImage src={image3} />
            <span style={{ fontSize: "20px" }}>Lavender</span>

            <AfterImageButton>View</AfterImageButton>
          </Col>
          <Col xs={6} sm={6}>
            <RoundImage src={image3} />

            <span style={{ fontSize: "20px" }}>Lavender</span>
            <AfterImageButton>View</AfterImageButton>
          </Col>
        </Row>
      </Inner3>
      <br />
    </PageSize>
    <Page3div2>
      <Page3div2Starting></Page3div2Starting>

      <Image3div>
        <img src={image4} />
        <h1>DIY RECIPE</h1>
        <img src={image5} style={{ marginTop: "-30px" }} />
        <h2>Scholary Inhaler</h2>
        <div
          style={{
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
      </Image3div>
    </Page3div2>
  </div>
);
