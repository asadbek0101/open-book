import './assets/tab-page.scss'
import React, { ReactNode } from "react";

interface Props{
    readonly className?: string;
    readonly children: ReactNode;
    readonly childrenClassName?: string;
    readonly headerComponent?: ReactNode;
    readonly footerComponent?: ReactNode;
    readonly headerClassName?: string;
    readonly footerClassName?: string;
}

export default function TabPage({children, className, headerComponent, headerClassName, childrenClassName, footerComponent, footerClassName}:Props){
    return (
        <div className={`tab-page ${className}`}>
            {headerComponent && (
            <div className={`header-component ${headerClassName}`}>
                {headerComponent}
            </div>
            )}
            <div className={`tab-page-children ${childrenClassName} ${(!headerComponent && !footerComponent)? 'not-header-component': ''}`}>
                {children}
            </div>
            {footerComponent && (
                <div className={`footer-component ${footerClassName}`}>
                    {footerComponent}
                </div>
            )}
        </div>
    )
}