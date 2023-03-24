import React, {useState} from "react";
import AuthWrapper from "../auth/AuthWrapper";
import TextField from "../input/TextField";
import MessageWrapper from "../message/MessageWrapper";
import Modal from "../modal/Modal";
import AppHeaderMenuWrapper from "./AppHeaderMenuWrapper";
import AppLogo from "./AppLogo";
import AppUserBacket from "./AppUserBacket";
import "./assets/header.scss"



export default function AppHeader(){

    const [isModal, setIsModal] = useState("");

    return (
        <header id="app-header">
            <div className="header d-flex align-items-center">
                       <div className="container d-flex justify-content-between align-items-center">
                           <AppLogo/>   
                            <TextField width="400px" name="search" placeholder="Search..." inputType="search" getValue={(value: any)=>console.log("value ", value)}/>
                            <div>
                                <AppUserBacket getValue={(value: string)=>setIsModal(value)}/>
                            </div>
                       </div>
            </div>
            <div className="header-menu d-flex align-items-center">
                    <div className="container px-0 py-2 h-100">
                            <AppHeaderMenuWrapper/>
                    </div>
            </div>
            <Modal 
                show={isModal === 'message'}
                width={"500px"}
                height={"100vh"}
                closeHandler={()=>setIsModal('')}
                className="d-flex justify-content-end align-items-center"
                >
                <MessageWrapper/>
            </Modal>
            <Modal 
                show={isModal === 'cart'}
                width={`100`}
                closeHandler={()=>setIsModal('')}
                >
                <p>Cart</p>
            </Modal>
            <Modal 
                show={isModal === 'heart'}
                width={`100`}
                closeHandler={()=>setIsModal('')}
                >
                <p>Heart</p>
            </Modal>
            <Modal 
                show={isModal === 'register'}
                width={`400px`}
                closeHandler={()=>setIsModal('')}
                className='d-flex justify-content-center align-items-center'
                >
                <AuthWrapper/>
            </Modal>
        </header>
    )
}