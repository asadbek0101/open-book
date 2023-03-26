import React from "react";
import SideBarMenuIcon from "../icons/SideBarMenuIcon";

interface Props{
    readonly onClick?: () => void;
}

export default function SideMenuOpenButton({onClick}:Props){
    return (
        <button className="ps-4 d-flex justify-content-center align-items-center" onClick={onClick}>
             <SideBarMenuIcon color="white" size={16}/>
        </button>
    )
}