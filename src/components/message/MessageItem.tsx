import React, {ReactNode} from "react";

interface MessageItemProps{
    readonly onSubmit: () => void;
    readonly fullName: string;
}

export default function MessageItem({fullName, onSubmit}:MessageItemProps){
    return (
        <div onClick={()=>onSubmit()}>
            <span>{fullName}</span>
        </div>
    )
}