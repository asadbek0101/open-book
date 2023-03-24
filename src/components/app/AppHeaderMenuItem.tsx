import React, { ReactNode } from "react";

export interface AppHeaderMenuItemProps{
    readonly children: ReactNode;
    readonly key: string;
    readonly default?: string;
    readonly show?: boolean;
}

export default function AppHeaderMenuItem({children, show = true, key}:AppHeaderMenuItemProps){
    if(!show){
        return null;
    }
    return (
        <div>
                {children}
        </div>
    )
}