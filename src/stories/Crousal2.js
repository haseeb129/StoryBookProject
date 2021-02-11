import "./Crousal2.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image3 from "../images/c6e3fc38f9022f95d56c7c9bb1886b587cd1156e.png";
import image4 from "../images/46fcdfed797809f888b54a211cd00c4c0d6ad136.png";
import image5 from "../images/Capture5.png";
import image1 from "../images/image1.png";
import image2 from "../images/page 1.png";
import image7 from "../images/Capture7.png";

export const Crousal2 = () => (
  <Carousel className="fontclass" showArrows={false} infiniteLoop={true}>
    <div className="mainCrousal crousal2page1">
      <div className="textDiv1">
        <p style={{ marginTop: "10px" }}>
          Our Clary Sage comes from a small farm utilizing biodynamic techniques
          to grow herbs with the rhythm of the moon and stars. Farming for over
          10 years at the foothills of the Balkans in Bulgaria, the farm
          cultivates 11 plant species and are certified organic by Balkan
          Biocert.
        </p>
      </div>
    </div>

    <div className="mainCrousal crousal2page2">
      <div className="textDiv1" style={{ marginTop: "80%" }}>
        <p style={{ marginTop: "10px" }}>
          The farm is integrated between wild forests and two major mountains,
          The Balkans and Sredna Gora. Protecting these pristine areas for
          future generations is reflected in the farming practices implemented.
          These practices include the regeneration of soil by utilizing cover
          crops as a nitrogen fixer and a green manure. The farm also keeps bees
          producing honey for the local community.
        </p>
      </div>
    </div>
    <div className="mainCrousal crousal2page3">
      <div className="textDiv1">
        <p style={{ marginTop: "10px" }}>
          Their Clary Sage production begin with hand sowing seeds in Spring.
          The Clary Sage plant takes two years of growth before it can be
          harvested for distillation. The flower heads are cultivated by a
          rounded hand machete, a tool typical for Bulgaria.
        </p>
      </div>
    </div>

    <div className="mainCrousal2 crousal2page4">
      <div className="inside">
        <div className="insideDivText">
          <p>
            Their Clary Sage production begin with hand sowing seeds in Spring.
            The Clary Sage plant takes two years of growth before it can be
            harvested for distillation. The flower heads are cultivated by a
            rounded hand machete, a tool typical for Bulgaria.
          </p>
        </div>
      </div>
    </div>
  </Carousel>
);
