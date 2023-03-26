import React from "react";
import { HeaderButtonProps } from "../../api/AppDto";
import MessageIcon from "../icons/MessageIcon";
import "./assets/button.scss"



export default function MessageButton({getValue}:HeaderButtonProps){
    return (
           <button className="header-button" onClick={()=>getValue('message')}> <MessageIcon/></button>
    )
}