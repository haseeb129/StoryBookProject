import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import image1 from "../images/e831ad53495bddec7f437aa45a979e634d585fd6.jpg";
import image2 from "../images/aca4bbb4ce072c935d488caad3715d69eca93fca.jpg";
import image3 from "../images/0ad9325ff7f4b2a9d02a661e2fd76d8687815349.jpg";
import image4 from "../images/Edited.jpg";
import mapImage from "../images/MapImage.jpg";

import { TiTickOutline } from "react-icons/ti";
// import "../styles/global.scss";

const CrousalWrapper = styled.div`
  .slide {
    background-color: #6b8d73 !important;
  }
  font-family: "pill-gothic";
`;
const Crousal2Page1 = styled.div`
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
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Crousal2Page2 = styled.div`
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
  background-image: url(${image2});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const Crousal2Page3 = styled.div`
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
  background-image: url(${image3});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const Crousal2Page4 = styled.div`
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
  background-image: url(${image4});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Storybook_button6_crousal2 = styled.button`
  margin-top: 50px;
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
`;

const TextDiv1 = styled.div`
  font-family: "pill-gothic";
  text-align: center;
  align-content: center;
  align-items: center;
  color: black;
  position: absolute;
  background-color: white;
  /* padding: 1%; */
  padding: 3px;
  border-radius: 20px;
  margin-top: 55%;
  margin-right: 10px;
  margin-left: 10px;
  bottom: 0;
  margin-bottom: 16px;
`;

const Inside = styled.div`
  text-align: center;
  align-content: center;
  align-items: center;
  background-color: black;
  color: white;
  opacity: 0.5;
  /* padding-top: 60px;
  padding-bottom: 60px; */
  padding: 10px;
  padding-left: 10px;
  border-radius: 30px;
  height: 75vh;
  text-align: center;
  align-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 20px;
`;
const InsideDivText = styled.div`
  padding: 20px;
`;

export const Crousal2 = () => (
  <CrousalWrapper>
    <Carousel
      style={{ backgroundColor: "yellow" }}
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      <Crousal2Page1>
        <TextDiv1>
          <p style={{ marginTop: "10px" }}>
            Our Clary Sage comes from a small farm utilizing biodynamic
            techniques to grow herbs with the rhythm of the moon and stars.
            Farming for over 10 years at the foothills of the Balkans in
            Bulgaria, the farm cultivates 11 plant species and are certified
            organic by Balkan Biocert.
          </p>
        </TextDiv1>
      </Crousal2Page1>

      <Crousal2Page2>
        <TextDiv1 style={{ marginTop: "40%" }}>
          <p style={{ marginTop: "10px" }}>
            Our Clary Sage comes from a small farm utilizing biodynamic
            techniques to grow herbs with the rhythm of the moon and stars.
            Farming for over 10 years at the foothills of the Balkans in
            Bulgaria, the farm cultivates 11 plant species and are certified
            organic by Balkan Biocert.
          </p>
        </TextDiv1>
      </Crousal2Page2>
      <Crousal2Page3>
        <TextDiv1 style={{ marginTop: "60%" }}>
          <p style={{ marginTop: "10px" }}>
            Our Clary Sage comes from a small farm utilizing biodynamic
            techniques to grow herbs with the rhythm of the moon and stars.
            Farming for over 10 years at the foothills of the Balkans in
            Bulgaria, the farm cultivates 11 plant species and are certified
            organic by Balkan Biocert.
          </p>
        </TextDiv1>
      </Crousal2Page3>
      <Crousal2Page4>
        <div>
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              lineHeight: "1",
            }}
          >
            Follow The Bottle
          </span>
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <TiTickOutline size={25} style={{ marginRight: "10px" }} />
            True Traceability
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <TiTickOutline size={25} style={{ marginRight: "10px" }} />
            True Traceability
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <TiTickOutline size={25} style={{ marginRight: "10px" }} />
            True Traceability
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <TiTickOutline size={25} style={{ marginRight: "10px" }} />
            True Traceability
          </div>
          <div
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <TiTickOutline size={25} style={{ marginRight: "10px" }} />
            True Traceability
          </div>
          <div
            style={{
              textAlign: "center",
              marginLeft: "35px",
              marginRight: "35px",
              marginTop: "10px",
            }}
          >
            All of our oils are third party tested to ensure purity, see
            ourGC/MS reports here.
          </div>
          <Storybook_button6_crousal2 style={{ marginTop: "10px" }}>
            SOLIESSENTIALS.COM
          </Storybook_button6_crousal2>
        </div>
      </Crousal2Page4>
    </Carousel>
  </CrousalWrapper>
);
