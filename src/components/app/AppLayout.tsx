import "./assets/layout.scss"

import React, { ReactNode } from "react";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export interface AppLayoutProps{
    readonly children: ReactNode;
}

export default function AppLayout({children}:AppLayoutProps){
    return (
        <div className="app-loyaut">
            <div className="header">
            <AppHeader/>
            </div>
            <div className="children container bg-light">
                {children}
            </div>
            <div className="footer">
            <AppFooter/>
            </div>
        </div>
    )
}