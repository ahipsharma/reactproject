// React arrow function component with export - rafce

import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./navbar";


const uniqueList = [
  ...new Set( // ... is a spread operator that gives only the array elements without useless data.
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Restaurent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return(
  <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
  </>);
};

export default Restaurent;
