import React from 'react';
import MenuItem from "./MenuItem.jsx";
import {useNavigate} from "react-router-dom";

function Menu(props) {
    const navigate = useNavigate();
    
    return (
        <div className="menu">
            <h1>Menu</h1>
            <MenuItem name="Contacts" onClick={()=>navigate("/")}/>
            <MenuItem name="Add Contact" onClick={()=>navigate("/create")}/>
        </div>
    );
}

export default Menu;