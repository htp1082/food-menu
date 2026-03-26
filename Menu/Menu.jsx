import React from 'react';
import './Menu.css'
import { useState } from 'react';

const Menu = ({menu}) => {
    // console.log(menu)
    const {strCategory,strCategoryThumb,strCategoryDescription} = menu
    const [favourite,setFavourite] = useState(false)
    const favHandler=()=>{
        setFavourite(!favourite)
    }
    return (
        <div className={`card ${favourite?'bg':""}`}>
            <img src={strCategoryThumb}></img>
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription}</p>
            <button className={favourite?"btn":""} onClick={favHandler}>{favourite? "Favourite":"Add to favourite"}</button>
        </div>
    );
};

export default Menu;