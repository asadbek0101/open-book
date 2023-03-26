import "./assets/button.scss";
import React, { ReactNode } from "react";

interface Props{
    readonly children: ReactNode;
    readonly onClick?: () => void;
    readonly type?: any;
}

export default function Button({ children, onClick, type }:Props){
    return(
        <button type={type} className="app-button" onClick={onClick}>
            {children}
        </button>
    )
}