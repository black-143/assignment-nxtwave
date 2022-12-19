import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./nxtwave-logo.png";
import avatar from "./avatar.png";
import './header.css';

const Header=({showButton})=>{
    const navigate=useNavigate();
    const navigateToAddItemPage=()=>{
        navigate("/add-item")
    }
    const navigateToHome = () => {
        navigate("/")
    }
    return(
        <div className="header">
            <img className="logo" onClick={navigateToHome} src={logo}/>
            {showButton ? <button onClick={navigateToAddItemPage} className="btn">ADD ITEM</button> : null}
            <img className="avatar" src={avatar}/>
        </div>
    )
}
export default Header;