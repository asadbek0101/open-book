import "./assets/message.scss"
import React, { ReactNode } from "react";
import { MessageType } from "./MessegaWrapper";
import BackButton from "./BackButton";
import { User } from "./MessageList";

interface Props{
    readonly children: ReactNode;
    readonly user: User;
    readonly backButton: ()=>void;
    readonly pageType: MessageType;
}

export default function MessageLoyaut({children, user, backButton, pageType}:Props){
    return(
        <div className="message-container">
        <div className="message-header d-flex justify-content-between align-items-center">
            {pageType === MessageType.MessageWrite ? (
                <BackButton onClick={()=>backButton()}/>
            ):(<div/>)}     
            <p className="message-title py-2 m-0">{(user.title && pageType === MessageType.MessageWrite)? user.title: 'Messages'}</p>
            <div/>
        </div>
        <div>
            {children}
        </div>
    </div>
    )
}