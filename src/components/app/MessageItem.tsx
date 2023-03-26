import "./assets/message.scss";
import React from "react";
import { User } from "./MessageList";

interface Props{
    readonly messageObject: User;
    readonly selectUser: (messageObject: any) => void;
    readonly deleteMessage: (_id: string) => void;
}

export default function MessageItem({messageObject, selectUser, deleteMessage}:Props){

    console.log("messageObject ", messageObject)

    let lastIndex = messageObject.messageArray?.length - 1;

    return(
        <div className="message-item-container" onClick={()=>selectUser(messageObject)}>
             <div className="message-item-user-info d-flex gap-3">
                <div className="message-item-img pr-3">

                </div>
                 <div className="message-item-info">
                        <div className="message-item-title">
                            <span>{messageObject.title}</span>
                        </div>
                        <div className="message-item-text">
                            <span>{messageObject.messageArray[lastIndex].text}</span>
                        </div>
                </div>
             </div>
                <div className="message-item-delete">
                    <button className="ms-item-delete-btn" onClick={()=>deleteMessage(messageObject._id)}>
                             <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
        </div>
    )
}