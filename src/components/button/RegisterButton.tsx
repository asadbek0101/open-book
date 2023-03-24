import React from "react";
import { HeaderButtonProps } from "../../api/AppDto";
import "./assets/button.scss"

export default function RegisterButton({getValue}:HeaderButtonProps){
    return (
            <button className="border-0 rounded px-3 header-register-button" onClick={()=>getValue('register')}>Login</button>
    )
}