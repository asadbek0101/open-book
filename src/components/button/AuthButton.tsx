import React, { ReactNode } from "react";

import "./assets/button.scss";

interface Props{
    readonly children: ReactNode;
    readonly onClick: ()=>void;
}

export default function AuthButton({children, onClick}:Props){
    return (
        <button onClick={()=>onClick()} className="auth-button">{children}</button>
    )
}