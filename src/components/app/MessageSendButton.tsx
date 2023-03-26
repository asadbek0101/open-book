import "./assets/button.scss"
import React from "react";
import SendIcon from "../icons/SendIcon";

interface Props{
    readonly onClick: ()=> void;
}

export default function MessageSendButton({onClick}: Props){
    return (
        <button onClick={()=>onClick()} className="message-send-button">
            <SendIcon color="black"/>
        </button>
    )
}