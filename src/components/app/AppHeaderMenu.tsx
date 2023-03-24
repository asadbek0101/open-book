import React, {ReactElement, Children, useState, useEffect} from "react";
import { AppHeaderMenuItemProps } from "./AppHeaderMenuItem";
import "./assets/header-menu.scss";

export interface AppHeaderMenuProps{
    readonly defaultTab: string;
    readonly activeTab: string;
    readonly onChangeTab: (route: string, tab: string) => void;
    readonly children: ReactElement<AppHeaderMenuItemProps>[] | ReactElement<AppHeaderMenuItemProps>;
}

export default function AppHeaderMenu({defaultTab, activeTab, children, onChangeTab}:AppHeaderMenuProps){
    const leng = Children.count(children);
    const [active, setActive] = useState('');

    useEffect(()=>{
        if(activeTab){
            setActive(activeTab)
        }else{
            setActive(defaultTab)
        }
    },[activeTab, defaultTab ,setActive])

    return (
        <div className="w-100 h-100 d-flex gap-3 justify-content-between app-header-menu">
            {Children.map(children, (child: any, index: number)=>{
                return (
                    <div className={`w-100 h-100 d-flex justify-content-center align-items-center app-header-menu-children ${leng - 1 == index ? 'app-lost-item':''} ${active == child.key ? 'active-item': ''}`} onClick={()=>onChangeTab(child.key as string, child.props.default as string)}>
                        {child.props.children}
                    </div>
                )
            })}
        </div>
    )
}