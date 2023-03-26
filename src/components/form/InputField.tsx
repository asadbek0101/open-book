import { useField } from "formik";
import React, { useCallback, useMemo, useState } from "react";

import "./assets/input-field.scss";

interface InputFieldProps{
    readonly name: string;
    readonly id?: string;
    readonly value?: any;
    readonly label?: any;
    readonly type?: string;
    readonly required?: boolean;
    readonly onChange?: (event: any) => void;
}

export default function InputField({name, id, value, onChange, label, type, required}:InputFieldProps){
    const [field, meta] = useField(name);
    const [req, setReq] = useState<boolean>(false)
    const showError = useMemo(()=>Boolean(meta.error && meta.touched), [meta])
    const onBlur = useCallback((value: any)=>{
        console.log(value.target.value)
        if(!value.target.value){
            setReq(true)
        }else{
            setReq(false)
        }
    },[setReq])
    return (
        <div className="input-container">
            {label &&(
                <label htmlFor={id}>{label}</label>
            )}
            <input className={`${(showError || req)? 'show-error':''}`} type="text" id={id} name={name} required={required} value={value} onChange={onChange} onBlur={onBlur}/>
            {(showError || req) && (
                <span className="text-danger req-title">Required</span>
            )}
        </div>
    )
}