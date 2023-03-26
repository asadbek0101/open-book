import "./assets/logout-button.scss";
import React from "react";
import LogoutIcon from "../icons/LogoutIcon";

interface Props{
    readonly onClick?: () => void;
}

export default function LogoutButton({onClick}:Props){
    return (
        <button className="logout-button" onClick={onClick}>
            <LogoutIcon color="white" size={18}/>
        </button>
    )
}