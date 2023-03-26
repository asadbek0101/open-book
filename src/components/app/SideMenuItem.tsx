import './assets/side-menu-item.scss'
import React, {ReactNode, useState, useCallback} from "react";
import { NavLink } from 'react-router-dom';

interface Props{
    readonly id: string;
    readonly children?: ReactNode;
    readonly icon?: ReactNode;
    readonly url: string;
}

export default function SideMenuItem({ children, icon, id, url }:Props){

    const [active, setActive] = useState("");

    const onChangeActive = useCallback(()=>{
        
        if(id != active){
            setActive(id);
        }else{
            setActive("");
        }
    },[active, id])

    return(
        <NavLink to={url} onClick={()=>onChangeActive()} 
        className={({ isActive }) => (isActive ? 'side-menu-item-container d-flex justify-content-start align-items-center gap-3 active-item' : 'side-menu-item-container d-flex justify-content-start align-items-center gap-3')}
        >
            <span className='menu-item-icon'>
                {icon}
            </span>
            <span className='menu-item-title'>
                {children}
            </span>
        </NavLink>
    )
}