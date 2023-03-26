import React, { ReactNode, useState } from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import MessageLoyaut from "./MessageLoyaut";

export enum MessageType {
    MessageList = 'message-list',
    MessageWrite = 'message-write'

}

interface Props{
    readonly children?: ReactNode;
}

export default function MessageWrapper({children}:Props){
    const [messageType, setMessageType] = useState(MessageType.MessageList);
    const [user, setUser] = useState({
        _id: "",
        title:"",
        messageArray: []
    })

    const selectUser = (value: any) => {
        setMessageType(MessageType.MessageWrite);
        setUser(value);
    }

    return(
   <MessageLoyaut
            user={user}
            backButton={()=>{setMessageType(MessageType.MessageList)}}
            pageType={messageType}
        >
        {messageType === MessageType.MessageList && (
            <MessageList selectUser={(value)=>selectUser(value)}/>
        )}
        {messageType === MessageType.MessageWrite && (
            <MessageForm user={user}/>
        )}
   </MessageLoyaut>
    )
}