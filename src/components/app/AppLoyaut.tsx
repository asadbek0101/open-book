import './assets/loyaut.scss'
import React, { ReactNode, useState } from "react";
import SideBarMenu from './SidebarMenu';
import Header from '../header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { SideMenu } from '../../api/AppDto';
import handleSideMenu from '../../redux/reducer/app';
import { changeSideMenu } from '../../redux/action';

interface Props{
    readonly children?: ReactNode;
}

export default function AppLoyaut({children}: Props){

    const dispatch = useDispatch();

    const sideMenu = useSelector((state: any)=>state.handleSideMenu)

    const menuOpen = sideMenu === SideMenu.Closed;

    return (
        <div className="loyaut-container">
               <div className={ `side-bar-menu ${  menuOpen ? "close-side-bar" : "" }`}>
                        <SideBarMenu/>
                </div>
                <div className={ `page-container ${  menuOpen ? "open-page-container" : "" }`}>
                        <div className="header">
                            <Header openSideMenu={()=>dispatch(changeSideMenu())}/>
                        </div>
                        <div className="children">
                            {children}
                        </div>
                </div>
        </div>
    )
}