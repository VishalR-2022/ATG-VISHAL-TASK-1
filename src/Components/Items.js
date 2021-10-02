/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Drop from '../Assets/Navbar/Vector.png';
import Join from '../Assets/Items/Vector.svg';
import All from '../Assets/Items/Posts(368).svg';
import Btn from '../Assets/Items/filter.svg';

import "./Items.css";

function Items(){
    return (
    <>
    <div className="hide">
       <div className="items">
           <div className="list">
               <p className="item-active">All Posts(32)</p>
               <p className="item">Article</p>
               <p className="item">Event</p>
               <p className="item">Education</p>
               <p className="item">Job</p>
           </div>
           <div className="btn">
               <button className="btn-write btn-all">Write a Post <img src={Drop} alt=""/></button>
               <button className="btn-join btn-all"><img src={Join} style={{marginRight:"0.5rem"}} alt=""/>Join Group</button>
             </div>
             </div>
             <hr style={{maxwidth:"60rem", margin:"0.5rem 15%", alignContent:"center"}}/>
             </div>
             <div className="show">
                 <img src={All} href="all"/>
                 
                 <img src={Btn} href="all"/>
                 </div>
     </>  );
    }

    export default Items;