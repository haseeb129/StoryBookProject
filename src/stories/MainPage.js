import React from "react";
import image1 from "../images/image1.png";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import fontFile from "../Fonts/Pill Gothic 300mg Bold.ttf";
// import "./MainPage.css";
import backgroundImage from "../images/efd31d99578da3e3d070b1038625a273fb769a0c.png";
const PageSize = styled.div`
  min-height: 100vh;
  font-family: "pill-gothic";
`;

const Main = styled.div`
  background-image: url(${backgroundImage});
  min-height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  align-items: center;
`;

const Innerdiv = styled.div`
  padding-top: 110px;
  padding-bottom: 110px;
`;
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:pill-gothic;
    font-style: normal;
    font-weight: 400;
    src: url(${fontFile});
  }
`;
const Main2 = styled.div`
  @font-face {
    font-family: pill-gothic;
    src: url("../Fonts/Pill Gothic 300mg Bold.ttf") format("truetype");
  }

  font-family: pill-gothic;
  background-color: #6b8d73;
  min-height: 35vh;
  color: white;
  text-align: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const P1 = styled.p`
  margin-bottom: "0px";
`;

const P2 = styled.p`
  margin-top: "0px";
`;

const Input = styled.input`
  width: 80%;
  height: 10%;
  background-color: white;
  border-radius: 40px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
`;

const Storybook_button = styled.button`
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  padding-left: 40px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: black;
`;

export const MainPage = () => {
  return (
    <PageSize>
      <Main>
        <Innerdiv>
          <img src={image1} />
        </Innerdiv>
      </Main>
      <Main2>
        <h2>Subscribe & Learn</h2>
        <h2>All About Essential Oils</h2>

        <P1>Be the first to know about new </P1>

        <P2>products & special offers!</P2>

        <Input placeholder="Enter your email" type="text" />

        <Storybook_button>SIGN UP!</Storybook_button>
      </Main2>
    </PageSize>
  );
};
