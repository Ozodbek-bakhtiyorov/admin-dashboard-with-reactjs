import React, {useEffect} from "react";
import { Wrapper } from "./TopContainer.styles.js";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";

import profileImg from "../../assets/img/card (1).jpg";
import MenuContainer from "../MenuContainer/MenuContainer.jsx";
export default function TopContainer() {
    useEffect(()=>{
        const menuContainer = document.getElementById("menuContainer")
        const menuTarget = document.getElementById("menuChevron");

        menuTarget.addEventListener("mouseenter", ()=>{
            menuTarget.style.transform = "rotate(180deg)";
            menuContainer.style.transform = "translateX(0px)";
        })
       
        menuTarget.addEventListener('mouseleave', ()=>{
            menuTarget.style.transform = "rotate(0)";
            menuContainer.style.transform = "translateX(300px)"
        })
    }, [])
  return (
    <Wrapper>
      <div className="inputBox">
        <input type="text" placeholder="Search items , collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className="profileContainer">
        <div className="profileIcon">
          <FaBell />
        </div>
        <div className="profileImage">
          <img src={profileImg} alt="" />
        </div>
        <p className="profileName">Ozodbek Baxtiyorov</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>
        <MenuContainer/>
      </div>
    </Wrapper>
  );
}
