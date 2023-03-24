import React, {ReactNode} from "react";

interface MessageLayoutProps{
    readonly children: ReactNode;
    readonly tabType?: string;
    readonly user?: any;
    readonly backButton: ()=>void;
}


export default function MessageLayout({children, tabType, user, backButton}:MessageLayoutProps){
    return(
        <div className="message-container p-3">
            <div className="message-header p-2 text-center d-flex justify-content-between align-items-center">
                {Boolean(user.fullName)? (
                    <div onClick={()=>backButton()}>{'Back'}</div>
                ):(
                    <div/>
                )}
                <span className="fs-5 fw-bold">{Boolean(user.fullName)? user.fullName : 'Messages'}</span>
                <div></div>
            </div>
            {children}
        </div>
    )
}