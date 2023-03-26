import React, {ReactNode} from "react";

export interface AuthLayoutProps{
    readonly children: ReactNode;
    readonly tabType: string;
}

export default function AuthLayout({children, tabType}:AuthLayoutProps){
    return (
        <div className="auth-layout">
            <div className="auth-layout-header d-flex justify-content-center pt-4">
                {tabType === "login" && (
                    <span className="fs-3">Login</span>
                )}
                {tabType === "register" && (
                    <span className="fs-3">Register</span>
                )}
                {tabType === "sent-email" && (
                    <span className="fs-3">Sent Email</span>
                )}
            </div>
            <div className="aut-layout-children px-3 py-3">
            {children} 
            </div>
            <div className="auth-layout-footer">
            </div>
        </div>
    )
}