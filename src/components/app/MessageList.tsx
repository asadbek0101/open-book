import React, { useState } from "react";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

interface Props{
    readonly selectUser: (value: User) => void;
}

export interface User{
    readonly _id: string;
    readonly title: string;
    readonly messageArray: any;
}

export default function MessageList({selectUser}:Props){

    const users = useSelector((state: any)=>state.handleMessage)

    return (
        <div>
            {users.map((item: User, index: any)=>{ return <MessageItem key={index} selectUser={(value)=>selectUser(value)} deleteMessage={(value)=>console.log(value)} messageObject={item}/>})}
        </div>
    )   
}