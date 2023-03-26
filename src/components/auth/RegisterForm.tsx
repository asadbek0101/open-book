import React from "react";
import AuthButton from "../button/AuthButton";
import EmailIcon from "../icons/EmailICon";
import LockIcon from "../icons/LockIcon";
import UserIcon from "../icons/UserIcon";
import TextField from "../input/TextField";

export default function RegisterForm(){
    return (
        <div className="register-form p-3">
            <TextField name='name' label={<UserIcon/>} className="my-2"  placeholder="Enter your name"/>
            <TextField name='email' label={<EmailIcon/>} className="my-2"  placeholder="Enter your email"/>
            <TextField name='password' label={<LockIcon/>} type="password" inputType="login" className="my-2" placeholder="Create a passpord"/>
            <TextField name='confirm' label={<LockIcon/>} className="my-2"  placeholder="Confirm a password"/>
            <div className="button mt-4">
            <AuthButton/>
            </div>
        </div>
    )
}