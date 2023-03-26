import React from "react";
import MessageItem from "./MessageItem";

export interface MessageListProps{
    readonly data: any;
    readonly submitUser: (value: any)=>void;
}

export default function MessageList({data, submitUser}:MessageListProps){
    return(
        <div>
            {data.map((item: any, index: number)=>{
                return (
                    <MessageItem key={index} fullName={item.fullName} onSubmit={()=>submitUser(item)}/>
                )
            })
                
            }
        </div>
    )
}