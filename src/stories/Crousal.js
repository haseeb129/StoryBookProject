// import "./Crousal.css";
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

export const Crousal = () => (
  <Carousel
    className="fontclass"
    showArrows={false}
    infiniteLoop={true}
    showThumbs={false}
  >
    <div className="mainCrousal page1">
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
      <button className="storybook-button6_crousal" variant="primary">
        LEARN MORE >
      </button>
    </div>

    <div className="mainCrousal page1">
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
      <button className="storybook-button6_crousal" variant="primary">
        LEARN MORE >
      </button>
    </div>
    <div className="mainCrousal page1">
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
      <button className="storybook-button6_crousal" variant="primary">
        LEARN MORE >
      </button>
    </div>
  </Carousel>
);
