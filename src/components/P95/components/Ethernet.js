import React from "react";
import "./Ethernet.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Ethernet = () => {
  return (
    <div className="ethernet">
      <div className="ethernet__header">
        <Link to="/p95/settings" className="ethernet__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>Ethernet</h2>
      </div>
      <div className="ethernet__container">
        <div className="ethernet__info">
          <div className="ethernet__name">
            <h3>Wired Name</h3>
            <h3>Ethernet</h3>
          </div>
          <div className="ethernet__configure">
            <h3>Configure IP</h3>
            <div className="ethernet__configureOptions">
              <h3>Automatic</h3>
              <ChevronRight />
            </div>
          </div>
          <div className="ethernet__details">
            <div className="ethernet__IP">
              <h3>Printer IP Address</h3>
              <h3>null</h3>
            </div>
            <div className="ethernet__subnet">
              <h3>Subnet Mask</h3>
              <h3>null</h3>
            </div>
            <div className="ethernet__router">
              <h3>Router</h3>
              <h3>null</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ethernet;
