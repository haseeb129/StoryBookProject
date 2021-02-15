import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiMail, FiInstagram } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Row, Col, Container } from "react-bootstrap";
import image1 from "../images/image1.jpg";
import image2 from "../images/page 1.jpg";
import image7 from "../images/Capture7.jpg";
import image8 from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.jpg";

import image9 from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.jpg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import audioFile from "../Audio/file_example_MP3_700KB.mp3";
import styled from "styled-components";

const AudioWrapper = styled.div`
  padding: 0;
  margin: 0;
  .rhap_time {
    color: white !important;
  }
  .rhap_container {
    color: white !important;
  }
  .svg {
    color: white !important;
  }

  .rhap_container svg {
    color: white !important;
  }

  font-family: "pill-gothic";
`;

const Main6 = styled.div`
  text-align: center;
  align-items: center;
  background-color: black;
  font-family: "pill-gothic";
`;

const Innerdiv6 = styled.div`
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: "pill-gothic";
`;
const Innerdiv6_2 = styled.div`
  background-color: white;
  color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
  align-items: center;
  font-family: "pill-gothic";
`;
const Storybook_button6 = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  padding-left: 40px;
  // font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #ef8e48;
  font-family: "pill-gothic";
`;
const PageSizeDiv2 = styled.div`
  background-color: #6b8d73;
  padding-top: 60px;
  align-items: center;
  align-content: center;
  text-align: center;
  color: white;
  font-family: "pill-gothic";
`;
const ImageDiv6 = styled.div`
  background-image: url(${image8});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 30px;
  min-height: 30vh;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 60px;
  padding-bottom: 25px;
  font-family: "pill-gothic";
`;
const Input6 = styled.input`
  height: 8%;
  background-color: white;
  border-radius: 40px;
  text-align: center;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: white;
  font-family: "pill-gothic";
`;
const DivinputField = styled.div`
  margin-right: 4%;
  margin-left: 4%;
  padding-right: 5px;
  padding-left: 5px;
  height: 9%;
  background-color: white;
  border-radius: 40px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-color: "#6b8d73";
  font-family: "pill-gothic";
`;
const Storybook_button6_2 = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 25px;
  padding-left: 25px;
  margin-left: 10px;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #ef8e48;
  font-family: "pill-gothic";
`;

const Page6div2Starting = styled.div`
  margin-top: -9px;
  background-color: #6b8d73;
  border-radius: 0 0 30px 30px;
  min-height: 8vh;
  font-family: "pill-gothic";
`;

const AudioDiv = styled.div`
  background-image: url(${image9});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  font-family: "pill-gothic";
`;

const Innnerdiv6_3 = styled.div`
  background-color: #6b8d73;
  padding-top: 40px;
  padding-bottom: 25px;
  font-family: "pill-gothic";
`;

const Innnerdiv6_3_1 = styled.div`
  background-color: white;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 30px;
  text-align: center;
  align-content: center;
  align-items: center;
  font-family: "pill-gothic";
`;

const Innnerdiv6_3_1_pinkBackground = styled.div`
  background-color: pink;
  height: 20vh;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 50px;
  border-radius: 30px;
  font-family: "pill-gothic";
`;

const Crossdiv = styled.div`
  text-align: right;
  margin-right: 10px;
  margin-bottom: 25px;
  font-family: "pill-gothic";
`;

const Downdiv = styled.div`
  background-color: lightgray;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 25px;
  margin-bottom: 0;
  border-radius: 20px;
  font-family: "pill-gothic";
`;

export const Page6 = () => (
  <div className="fontclass">
    <Main6>
      <Innerdiv6>
        <img src={image1} />
      </Innerdiv6>
    </Main6>

    <Innerdiv6_2>
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
      <Storybook_button6>SOLIESSENTIALS.COM</Storybook_button6>
    </Innerdiv6_2>

    <PageSizeDiv2>
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
      <ImageDiv6>
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

        <DivinputField>
          <FiMail color="black" size={30} />
          <Input6 placeholder="Enter your email" type="text" />
          <Storybook_button6_2>Submit</Storybook_button6_2>
        </DivinputField>
      </ImageDiv6>
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
    </PageSizeDiv2>

    <div style={{ backgroundColor: "black" }}>
      <Page6div2Starting></Page6div2Starting>
      <Main6>
        <Innerdiv6 style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          <img src={image7} style={{ width: "50%" }} />
        </Innerdiv6>
      </Main6>

      <div style={{ backgroundColor: "#3d5b50", minHeight: "80px" }}>
        <Container fluid>
          <Row>
            <Col sm={3} xs={3} style={{ padding: "0px" }}>
              <AudioDiv>
                <img src={image2} style={{ width: "100%", height: "80px" }} />
              </AudioDiv>
            </Col>

            <Col sm={9} xs={9} style={{ padding: "0px" }}>
              <AudioWrapper>
                <AudioPlayer
                  autoPlay={false}
                  src={audioFile}
                  onPlay={(e) => console.log("onPlay")}
                  style={{ backgroundColor: "#2c4c3c", color: "white" }}
                />
              </AudioWrapper>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    <Innnerdiv6_3>
      <Innnerdiv6_3_1>
        <Crossdiv>
          <GrClose color="black" size={20} style={{ marginRight: "15px" }} />
        </Crossdiv>
        <Innnerdiv6_3_1_pinkBackground></Innnerdiv6_3_1_pinkBackground>

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

        <Downdiv>
          Always follow safety statements on all essential oils.
        </Downdiv>
      </Innnerdiv6_3_1>
    </Innnerdiv6_3>

    <innnerdiv6_3>
      <Innnerdiv6_3_1>
        <Crossdiv>
          <GrClose color="black" size={20} style={{ marginRight: "15px" }} />
        </Crossdiv>

        <h2 style={{ color: "#ef8e48" }}>Did You Know?</h2>

        <div
          style={{
            // paddingLeft: "20px",
            // paddingRight: "20px",
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
      </Innnerdiv6_3_1>
    </innnerdiv6_3>
  </div>
);
