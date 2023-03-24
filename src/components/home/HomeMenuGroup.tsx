import React, {ReactNode} from "react";
import NextIcon from "../icons/NextIcon";
import "./assets/home.scss"

interface HomeMenuGroupProps{
    readonly children: ReactNode;
    readonly titleName?:  string;
    readonly link?: string;
    readonly showAll: (link: any) => void; 
}

export default function HomeMenuGroup({children, titleName, showAll, link}:HomeMenuGroupProps){
    return (
        <div className="w-100 h-100 px-3">
            <div className="d-flex justify-content-between align-items-center home-menu-group-header">
                <div className="fs-5 fw-bold">{titleName}</div>
                <div className="fw-bold d-flex align-items-center gap-1 pointer" style={{cursor: 'pointer'}} onClick={()=>showAll(link)}> <span>Everything</span> <span><NextIcon size={12}/></span></div>
            </div>
            {children}
        </div>
    )
}