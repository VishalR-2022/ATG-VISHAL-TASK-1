/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Popup from "./Popup";

import Signup from "./Signup";
import Signin from "./Signin";
import logo from '../Assets/Navbar/whole.png';
import Drop from '../Assets/Navbar/Vector.png';
import SearchIcon from '@mui/icons-material/Search';
import xyz from '../Assets/Navbar/xyz.svg';
import "./Navbar.css";
function Navbar(){
    const [open, setOpen] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [openSignin, setOpenSignin] = useState(false);
    return (<div>
        <nav className="Navbar">
         <img className="nav_logo" src={logo} href="logo"/>
         <div className="nav_search">
         <SearchIcon className="searchIcon" />

         <input
              className="nav_txt"
              type="search"
              placeholder="Search for your favorite groups in ATG"
            /></div>
            <div className="dropdown">
 <button  onClick={() => {
                setOpen(!open);
              }}
              className="drop-button"
              >
              <span className="drop-button-txt1"
              >Create account.</span>
              <span className="drop-button-txt2"
              >
                It’s free!
                <img
                 src={Drop}
                  
                  alt=""
                />
              </span>
        </button>
        {open && (
              <div>
                <button
                  className="Dropbutton"
                  onClick={() => {
                    setOpenSignin(true);
                  }}
                >
                  Sign In
                </button>
                <button
                  className="Dropbutton"
                  onClick={() => {
                    setOpenSignup(true);
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
</div>
        </nav>
        <Popup openPopup={openSignup} setOpenPopup={setOpenSignup}>
        <Signup />
      </Popup>
      <Popup openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <Signin />
      </Popup>
<div className="xyz">
    <img src={xyz} style={{width:"3.5rem"}}/>
</div>
      </div>
      );
}
export default Navbar;
