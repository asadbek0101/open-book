import React, { useState, useCallback } from "react";
import InputTypeIcon from "../icons/InputTypeIcon";

import "./assets/input.scss";

interface Props{
    readonly label?: string;
    readonly value?: string;
    readonly onChange: (value: any)=>void;
    readonly type: string;
    readonly placeholder?: string;
    readonly name: string;
    readonly require?: boolean;
    readonly requireTitle?: string;
    readonly disabled?: boolean;
}

export default function TextField({type = "text", disabled = false, requireTitle, name, placeholder, label, value, onChange, require}:Props){

    const [_value, setValue] = useState(value);

    const [_type, setType] = useState(type);

    const [isRequire, setRequire] = useState(false)

    const onChangerInputValue = useCallback((value: any)=>{
            onChange(value.target.value)
            setValue(value.target.value)
    },[setValue])

    const onBlur = useCallback((value: any)=>{
        if(require){
            if(value.target.value === ""){
                setRequire(true)
            }else{
                setRequire(false)
            }
        }
    },[setRequire, require])

    return (
        <div className="text-field">
            <label htmlFor={name}>{label}</label>
            <div className="only-input">
            <input 
                id={name}
                type={_type} 
                value={_value}
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                onChange={(e)=>onChangerInputValue(e)}
                onBlur={(e)=>onBlur(e)}
                />
                {type === "password" && (
                    <button onClick={()=>setType(_type === "text"? "password" : "text")}>
                    <InputTypeIcon type={_type} size={15}/>
                    </button>
                )}
            </div>
            {isRequire && (
                <p className="require-title">{requireTitle}</p>
            )}
        </div>
    )
}