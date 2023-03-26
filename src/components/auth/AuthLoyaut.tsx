import React, {ReactNode} from "react";

import "./assets/auth.scss"

interface Props{
    readonly children: ReactNode;
}

export default function AuthLoyaut({children}:Props){
    return (
        <div className="auth-loyaut">
            {children}
        </div>
    )
}