import React from "react";
import image2 from "../images/image2.png";
// import "./Page2.css";
import { Row, Col } from "react-bootstrap";

// import { Container, Row, Col } from "styled-bootstrap-grid";
import image3 from "../images/28e14bac811214045b5a82a171894e78e1ab6496.png";
import image4 from "../images/93b8e4a0296a80ba74440cdfa983a5d83190ad1b.png";
import image5 from "../images/3f13c0ef880fa3321a04bf56fa6210f93a391f1f.png";
import tempIcon from "../images/temIcon.png";
import styled from "styled-components";

const pageSize = styled.div`
  min-height: 100vh;
  font-family: "pill-gothic";
`;

const Main = styled.div`
  min-height: 100vh;
  font-family: "pill-gothic";
  background-image: url(${image5});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  text-align: center;
  align-items: center;
  min-height: 30vh;
`;
const Div1 = styled.div`
  text-align: center;
  color: #ef8e48;
  background-color: black;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Div2 = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #6b8d73;
  border-radius: 0px 0px 30px 30px;
`;
const Div3 = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 60px;
  padding-top: 60px;
  font-size: 48px;
  letter-spacing: 0;
`;
const Div4 = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  padding-top: 60px;
  background-color: #6b8d73;
  border-radius: 30px 30px 0 0;
`;
const Innerdiv1 = styled.div`
  color: white;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 16px;
  width: 100%;
  background-color: #5a7d62;
  border-radius: 30px 30px;
`;
const Innerdiv2 = styled.div`
  align-items: center;
  align-content: center;
  color: black;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 25px;
  font-size: 16px;
  width: 100%;
  background-color: white;
  border-radius: 30px 30px;
  margin-bottom: 50px;
`;
const MutedText = styled.p`
  font-size: 14px;
  color: gray;
  font-style: italic;
  word-break: break-all;
`;
const Row1 = styled(Row)`
  padding-top: 60px;
  // align-items: center;
  // align-content: center;
  // text-align: center;
`;
const Col1 = styled(Col)`
  padding-top: 60px;
  // align-items: center;
  // align-content: center;
  // text-align: center;
`;

export const Page2 = () => (
  <Main>
    <Div1>
      NEW TO ESSENTIAL OILS?
      <span style={{ float: "right", marginRight: "20px" }}>X</span>
    </Div1>
    <Div2>
      <img src={image2} />
    </Div2>

    <Div3>
      EUCALYPTUS
      <p style={{ fontSize: "16px" }}>eucalyptus globulus</p>
    </Div3>
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
    <Div4>
      <Innerdiv1>
        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
          A classic oil with a fresh, green aromatic{" "}
        </p>
        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
          and a rich balsamic undertone
        </p>
      </Innerdiv1>

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
      <div className="row">
        <div className="col-4">
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </div>
        <div className="col-4">
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </div>
        <div className="col-4">
          <img src={tempIcon} style={{ width: "40%", marginBottom: "10px" }} />
          Clarifying
        </div>
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

      <Innerdiv2>
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
          <MutedText>
            Eucalyptus has been used historically to encourage open breathing
            and to clear the and improve concentration.
          </MutedText>
        </div>
      </Innerdiv2>
      <br />
    </Div4>
  </Main>
);
