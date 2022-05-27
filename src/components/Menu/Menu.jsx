import React, { Fragment, useEffect , useState} from "react";
import { Wrapper } from "./Menu.styles";
import logo from "../../assets/img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const icons = [
  <FaDelicious />,
  <FaShoppingCart />,
  <FaWallet />,
  <FaChartLine />,
  <FaRegClock />,
  <FaCog />,
  <FaSignOutAlt />,
];

const Menu = () => {

  useEffect(() => {
    console.log('render')
    const mainMenuLi = document.getElementById("mainMenu").querySelectorAll("li");
    function changeActive(){
        mainMenuLi.forEach(n=>n.classList.remove('active'));
        this.classList.add('active');
    }

   mainMenuLi.forEach(n=> n.addEventListener('click',changeActive));
  },[]);

  return (
    <Fragment>
      <Wrapper>
        <img src={logo} alt="logo" />
        <ul id="mainMenu">
          {icons.splice(0, icons.length - 2).map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </ul>
        <ul id="lastMenu">
          {icons.slice(icons.length - 2, icons.length).map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </ul>
      </Wrapper>
    </Fragment>
  );
};
const Icon = ({ icon }) => (
 
  <li>
    <a href=" ">{icon}</a>
  </li>
);

export default Menu;
