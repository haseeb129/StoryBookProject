// import "./Crousal.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image3 from "../images/c6e3fc38f9022f95d56c7c9bb1886b587cd1156e.jpg";
import image4 from "../images/46fcdfed797809f888b54a211cd00c4c0d6ad136.jpg";
import image5 from "../images/Capture5.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/page 1.jpg";
import image7 from "../images/Capture7.jpg";
import image8 from "../images/bad7b35df067bac718255a3b78727c5fa977225c.jpg";
import styled from "styled-components";

const CrousalWrapper = styled.div`
  .slide {
    background-color: #6b8d73 !important;
  }
  font-family: "pill-gothic";
`;
const MainCrousal = styled.div`
  text-align: center;
  align-content: center;
  align-items: center;
  color: white;
  padding-top: 60px;
  padding-bottom: 60px;
  border-radius: 30px;
  height: 75vh;
  margin-right: 10px;
  margin-left: 10px;
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 20px;
  background-image: url(${image8});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Storybook_button6_crousal = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 40px;
  padding-left: 40px;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #ef8e48;
`;

export const Crousal = () => (
  <CrousalWrapper>
    <Carousel
      style={{ backgroundColor: "yellow" }}
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      <MainCrousal>
        <h1 stytle={{ fontSize: "42px" }}>Safe Use</h1>
        <img src={image5} style={{ width: "35%", marginBottom: "30px" }} />
        <br />
        <p style={{ fontWeight: "bold" }}>
          Our oils are responsibly harvested
          <br />
          from one single source, meaning
          <br />
          that they are not diluted or mixed.
        </p>
        <p>
          We can trace our oils from plant to
          <br />
          bottle. We know our farmers and our
          <br />
          distillers. We believe that consumers
          <br />
          deserve to know what product they are
          <br />
          buying, how it is produced and what the
          <br />
          environmental impact is.
          <br />
        </p>
        <Storybook_button6_crousal>LEARN MORE ></Storybook_button6_crousal>
      </MainCrousal>

      <MainCrousal>
        <h1 stytle={{ fontSize: "42px" }}>Safe Use</h1>
        <img src={image5} style={{ width: "35%", marginBottom: "30px" }} />
        <br />
        <p style={{ fontWeight: "bold" }}>
          Our oils are responsibly harvested
          <br />
          from one single source, meaning
          <br />
          that they are not diluted or mixed.
        </p>
        <p>
          We can trace our oils from plant to
          <br />
          bottle. We know our farmers and our
          <br />
          distillers. We believe that consumers
          <br />
          deserve to know what product they are
          <br />
          buying, how it is produced and what the
          <br />
          environmental impact is.
          <br />
        </p>
        <Storybook_button6_crousal>LEARN MORE ></Storybook_button6_crousal>
      </MainCrousal>
      <MainCrousal>
        <h1 stytle={{ fontSize: "42px" }}>Safe Use</h1>
        <img src={image5} style={{ width: "35%", marginBottom: "30px" }} />
        <br />
        <p style={{ fontWeight: "bold" }}>
          Our oils are responsibly harvested
          <br />
          from one single source, meaning
          <br />
          that they are not diluted or mixed.
        </p>
        <p>
          We can trace our oils from plant to
          <br />
          bottle. We know our farmers and our
          <br />
          distillers. We believe that consumers
          <br />
          deserve to know what product they are
          <br />
          buying, how it is produced and what the
          <br />
          environmental impact is.
          <br />
        </p>
        <Storybook_button6_crousal>LEARN MORE ></Storybook_button6_crousal>
      </MainCrousal>
    </Carousel>
  </CrousalWrapper>
);
