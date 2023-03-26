import React, { useCallback } from "react";
import { Login, User } from "../api/AppDto";
import AuthForm from "../components/auth/AuthForm";
import AuthLoyaut from "../components/auth/AuthLoyaut";
import { useDispatch } from "react-redux";
import { changeCheckUser } from "../redux/action";

export default function AuthContainer(){

    const dispatch = useDispatch();

    return (
        <AuthLoyaut>
            <AuthForm sendUser={(user: User)=>dispatch(changeCheckUser(user))}/> 
        </AuthLoyaut>
    )
}