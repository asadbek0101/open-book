import React, { ReactNode } from "react";

interface Props{
    readonly children: ReactNode;
}

export default function CardLoyaut({ children }: Props){
    return (
        <div>
            {children}
        </div>
    )
}