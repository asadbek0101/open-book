import React, { ReactNode } from "react";

export interface TabPageProps {
    readonly children: ReactNode;
    readonly headerComponent?: ReactNode;
    readonly footerComponent?: ReactNode;
    readonly className?: string;
    readonly headerClassName?: string;
    readonly footerClassName?: string;
    readonly style?: any;
}

export default function TabPage({children, headerComponent, footerComponent, className, headerClassName, footerClassName, style}:TabPageProps){
    return (
        <div className={`tab-page w-100 ${className}`} style={style}>
            {Boolean(headerComponent) && (
            <div className={`header-component ${className}`}>
                {headerComponent}
            </div>
            )}
            <div className="w-100 h-100 py-2">
                {children}
            </div>
            {Boolean(footerComponent) && (
            <div className={`footer-component ${className}`}>
                {footerComponent}
            </div>
            )}
        </div>
    )
}