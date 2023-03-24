import React, { useCallback, useState, ReactNode } from "react";
import SearchIcon from "../icons/SearchIcon";
import "./assets/input.scss";

interface TextFieldProps{
    readonly label?: ReactNode;
    readonly name: string;
    readonly type?: string;
    readonly value?: string;
    readonly placeholder?: string;
    readonly className?: string;
    readonly width?: string;
    readonly inputType?: string;
    readonly textFieldClassName?: string;
    readonly getValue?: (value: any) => void;
    readonly onChange?: (value: any) => void;
}

export default function TextField({ onChange, getValue, textFieldClassName, width, type = 'text', inputType, className, name, label, value, placeholder }:TextFieldProps){

    const [text, setText] = useState(value ? value : "")

    const onClick = useCallback(()=>{
        console.log("text ", text)
        if(inputType === "search"){
            if(getValue){
                getValue(text)
            }
        }
    },[inputType, getValue])

    return(
        <div className={`text-field ${textFieldClassName}`} style={{width: width}}>
           {label && (
             <label htmlFor={name}>{label}</label>
           )}
                <div className="input-box d-flex">
                <input className={`${className}`} type={type} name={name} onChange={(value:any)=>setText(value.target.value)} value={text} placeholder={placeholder}/>    
                {(inputType === "search" || inputType == "login") && (
                    <button className="input-button" onClick={onClick}>
                        <SearchIcon/>
                    </button>
                )}
                </div> 
             </div>
    )
}