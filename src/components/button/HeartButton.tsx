import React from "react";
import { HeaderButtonProps } from "../../api/AppDto";
import HeartIcon from "../icons/FullHeartIcon";
import "./assets/button.scss"

export default function HeartButton({getValue}:HeaderButtonProps){
    return (
            <button className="header-button" onClick={()=>getValue('heart')}><HeartIcon/></button>
    )
}