import "./assets/button.scss"
import React from "react";
import BackIcon from "../icons/BackIcon";

interface Props{
    readonly onClick: ()=> void;
}

export default function BackButton({onClick}: Props){
    return (
        <button onClick={()=>onClick()} className="message-back-button">
            <BackIcon size={14} color="black"/>
            Back
        </button>
    )
}