import React from "react";
import { use } from "react";
import Menu from "../Menu/Menu";
import './AllMenu.css'

const AllMenu = ({ foodUrl }) => {
  const allMenu = use(foodUrl);
  // console.log(allMenu.categories)
  return (
    <div>
      <h2>Total Item :{allMenu.categories.length}</h2>
      <div className="grid">
        {allMenu.categories.map((menu, index) => (
          <Menu key={index} menu={menu}></Menu>
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
