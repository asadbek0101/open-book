import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SentEmailForm from "./SentEmailForm";

export enum AuthTabType {
    Login = 'login',
    Register = 'register',
    SentEmail = 'sent-email',
}

export default function AuthWrapper(){
    const [tabType, setTabType] = useState<string>(AuthTabType.Register)
    return (
        <AuthLayout
            tabType={tabType}
            >
            {tabType === AuthTabType.Login && (
            <LoginForm/>
            )}
             {tabType === AuthTabType.Register && (
            <RegisterForm/>
            )}
             {tabType === AuthTabType.SentEmail && (
            <SentEmailForm/>
            )}
        </AuthLayout>
    )
}