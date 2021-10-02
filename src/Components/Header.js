/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Header.css";
import arrow from "../Assets//Header/arrow.png";
import joinBtn from "../Assets/Header/joinBtn.svg";
function Header(){
    return (
       <div className="header">
           <div className="arrow">
               <img src={arrow} />
               <img src={joinBtn} />

           </div>
           {/* <img className="header-img" src={header}/> */}
           <h1 className="header-heading">Computer Engineering</h1>
           <p className="header-para">142,765 Computer Engineers follow this</p>
       </div>
       );
    }
    export default Header;