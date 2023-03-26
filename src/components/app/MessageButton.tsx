import React from "react";
import MessageIcon from "../icons/MessageIcon";

interface Props{
    readonly onClick: ()=> void;
}

export default function MessageButton({onClick}: Props){
    return (
        <button onClick={()=>onClick()}>
            <MessageIcon color="white"/>
        </button>
    )
}