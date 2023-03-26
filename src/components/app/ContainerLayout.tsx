import React, { ReactNode } from "react"

interface Props{
    readonly children: ReactNode;
}

export default function ContainerLayout({children}:Props){
    return (
        <div className="w-100 h-100">
            {children}
        </div>
    )
}