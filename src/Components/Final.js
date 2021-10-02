/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Card from "./Card";
import img1 from "../Assets/Final/Rectangle 5.svg";
import Photo1 from "../Assets/Final/Photo1.svg";
import img2 from "../Assets/Final/wall.svg";
import Photo2 from "../Assets/Final/photo2.svg";
import Loc from "../Assets/Final/location.svg";
import pen from "../Assets/Final/pen.svg";
import Info from "../Assets/Final/info.svg";
import Btn1 from "../Assets/Final/btn1.svg";
import Btn from "../Assets/Final/btn.svg";
import BtnMob from "../Assets/Final/btn-mob.svg";
import BtnMob1 from "../Assets/Final/btn-mob1.svg";

import "./Final.css";
export default function Final() {
    const Cards = [    
    <Card 
      imgSrc={img1}
      title="✍️ Article"
      para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" 
      heading="What if famous brands had regular fonts? Meet RegulaBrands!"
      name="Sarthak Kamra"
      imgPpl={Photo1}
    />,
    <Card 
      imgSrc={img2}
      title="🔬️ Education"
      para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" 
      heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
      name="Sarah West"
      imgPpl={Photo2}
    />,
    <Card 
    imgSrc={img1}
    title="🗓️ Meetup"
    para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" 
    heading="Finance & Investment Elite Social Mixer @Lujiazui"
    name="Ronal Jones"
    imgPpl={Photo1}
    btn={Btn}
    btnMob={BtnMob1}
  />,
  <Card 
    title="💼️ Job"
     para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" 
    heading="Software Developer - II"
    name="Joseph Gray"
    imgPpl={Photo2}
    btn={Btn1}
    btnMob={BtnMob}

  />
    ];
    return (<div className="final">
        <div className="cards">{
             Cards.map((card) => {
             return card;
          })
        }
      </div>
      <div className="location">
          <div className="horizon" >
        <div className="loc-place">
            <img src={Loc} href="loc"/>
              Noida, India
            </div>
            <div className="loc-edit">
                <img src={pen} href="pen"/>
           </div>
           </div>
           <div className="desc">
               <img src={Info} href="loc"/>
              Your location will help us serve better<br/> and extend a personalised experience. 
           </div>
             
      </div>
    </div>
        );
}