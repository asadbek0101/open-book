import React from "react";
import { HeaderButtonProps } from "../../api/AppDto";
import CartIcon from "../icons/CartIcon";
import "./assets/button.scss"

export default function CartButton({getValue}:HeaderButtonProps){
    return (
            <button className="header-button" onClick={()=>getValue('cart')}><CartIcon/></button>
    )
}