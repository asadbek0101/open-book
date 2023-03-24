import React from "react";
import CartButton from "../button/CartButton";
import HeartButton from "../button/HeartButton";
import MessageButton from "../button/MessageButton";
import RegisterButton from "../button/RegisterButton";

interface AppUserBacketProps{
    readonly getValue: (value: string)=>void;
}

export default function AppUserBacket({getValue}:AppUserBacketProps){
    return (
        <div className="d-flex gap-3">
           <MessageButton getValue={(value: string)=>getValue(value)}/>
           <CartButton getValue={(value: string)=>getValue(value)}/>
           <HeartButton getValue={(value: string)=>getValue(value)}/>
           <RegisterButton getValue={(value: string)=>getValue(value)}/>
        </div>
    )
}