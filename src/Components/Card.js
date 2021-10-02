/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Dots from "../Assets/Card/Vector (1).svg";
import View from "../Assets/Card/Group.svg";
import Share from "../Assets/Card/Group 2.svg";
import Share1 from "../Assets/Card/share.svg";

import "./Card.css";

export default function Card(props) {
  const { imgSrc, title ,heading,btn ,btnMob, para, imgPpl, name} = props;
  return (
    <div className="card">
      <div className="card-photo">
      <img className="emo" src={imgSrc} href="emoji"/>
        </div>
      <div className="card-content">
          <div className="content-title">
              <h3 className="title">{title}</h3>
          </div>
          <div className="content-heading">
              <h2 className="heading">{heading}</h2>
              <img className="dots" src={Dots} href="dots"/>
          </div>
          <div className="content-para">
              {para}
          </div>
          <div className="content-btn">
          <img src={btn} style={{width:"100%"}} href="view"/>
          </div>
          <div className="content-btn-mob">
          <img src={btnMob} style={{width:"100%"}} href="view"/>
          </div>
          <div className="content-people">
          <div className="people-info">
              <img className="img-pl" src={imgPpl} href="people"/>
              <h3 className="name">{name}</h3>
          </div>
          <div className="people-view">
              <img className="view" src={View} href="view"/>
          </div>
          <div className="people-Share">
              <img className="share" src={Share} href="share"/>
          </div>
          <div className="people-Share-mob">
              <img className="share1" src={Share1} href="share"/>
          </div>
          </div>
      </div>
    </div>
  );
}