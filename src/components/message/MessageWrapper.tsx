import React, {useState, useCallback} from "react";
import MessageChat from "./MessageChat";
import MessageLayout from "./MessageLayout";
import MessageList from "./MessageList";

export enum MessageTabType {
    MessageList = "list",
    MessageChat = "chat"
}

export default function MessageWrapper(){
    const [tabType, setTabType] = useState(MessageTabType.MessageList);
    const [user, setUser] = useState({});

    const data = [
        {
            fullName: "Asadbek Rejabboyev",
        },
        {
            fullName: "Akbar Jumayev",
        },
        {
            fullName: "Bahodir Jalolov",
        },
        {
            fullName: "Eshmat Toshmatov",
        },
    ]

    const submitUser = useCallback((value: any)=>{
            setTabType(MessageTabType.MessageChat);
            setUser(value)
    },[setTabType, setUser])

    const backButton = useCallback(()=>{
        setTabType(MessageTabType.MessageList);
        setUser({})
},[setTabType, setUser])

    return(
        <MessageLayout 
            user={user}
            tabType={tabType}
            backButton={()=>backButton()}
            >
            {tabType === MessageTabType.MessageList && (
                <MessageList data={data} submitUser={(user: any)=>submitUser(user)}/>
            )}
            {tabType === MessageTabType.MessageChat && (
                <MessageChat/>
            )}
        </MessageLayout>
    )
}