import React from "react";
import "./About.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

const About = ({ network }) => {
  return (
    <div className="about">
      <div className="about__header">
        <Link to="/p95/settings" className="about__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>About Printer</h2>
      </div>
      <div className="about__container">
        <div className="about__details">
          <div className="about__detail">
            <p>Printer Model</p>
            <p>PRO95</p>
          </div>
          <div className="about__detail">
            <p>Printer Serial</p>
            <p>P95-12A3B45C</p>
          </div>
          <div className="about__detail">
            <p>Printer Nickname</p>
            <div className="about__nickname">
              <p>Nickname</p>
              <ChevronRight />
            </div>
          </div>
          <div className="about__detail">
            <p>Wifi Network</p>
            <p>{network}</p>
          </div>
          <div className="about__detail">
            <p>IP Address</p>
            <p>192.168.1.111</p>
          </div>
          <div className="about__detail last">
            <p>PrintOS Version</p>
            <p>6.35</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
