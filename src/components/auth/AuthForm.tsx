import React, {useState, useCallback} from "react";
import AuthButton from "../button/AuthButton";
import TextField from "../input/TextField";

import "./assets/auth.scss"

interface Props{
    readonly sendUser: (user: any) => void;
}

export default function AuthForm({sendUser}: Props){

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const onChangeUsername = useCallback((value: any)=>{
        setUser(prevState => ({
            ...prevState,
            username: value,
        }))
    },[setUser])

    const onChangePassword = useCallback((value: any)=>{
        setUser(prevState => ({
            ...prevState,
            password: value,
        }))
    },[setUser])

    return (
        <div className="auth-form">
                <div className="row">

                    <div className="col-12 text-center">
                        <p className="pb-2 m-0 fs-4 fw-bold">Open Book Amin</p>
                    </div>

                    <div className="col-12">
            
                    <TextField 
                            label="Username" 
                            require={true} 
                            requireTitle="Username require" 
                            value={user.username}
                            type="text" 
                            name="username" 
                            onChange={(value)=>onChangeUsername(value)} />

                    </div>

                    <div className="col-12 mt-2">

                    <TextField 
                            label="Password" 
                            require={true} 
                            requireTitle="Password require" 
                            value={user.password} 
                            type="password" 
                            name="password" 
                            onChange={(value)=>onChangePassword(value)} />
                    </div>
                    
                    <div className="col-12 mt-4">
                        <AuthButton onClick={()=>sendUser(user)}>
                            Send
                        </AuthButton>
                    </div>
                </div>
        </div>
    )
}