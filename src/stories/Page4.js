import React from "react";
import Carousel, { Crousal } from "./Crousal";

import image3 from "../images/ebd74b60c4600aba8ea65fd29f684bc3052e79b4.png";

import styled from "styled-components";

const PageSize4 = styled.div`
  font-family: "pill-gothic";
  min-height: 65vh;
  background-color: #6b8d73;
  color: white;
`;

const Container = styled.div`
  position: relative;
`;

const TextBlock = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
`;
const Centered = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
`;

export const Page4 = () => (
  <div>
    <PageSize4>
      <br />
      <Container style={{ paddingLeft: "0", paddingRight: "0" }}>
        <div>
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

        <Centered>
          Salvia Sclarea L. is a perennial or biennial plant with broad hairy
          green with a hint of purple leaves. The plant grows up to 3-4 feet at
          full maturity. Native to the Mediterranean. All parts of the plant are
          aromatic.
        </Centered>
      </Container>
    </PageSize4>
    <Crousal />
  </div>
);
