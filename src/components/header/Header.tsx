import React, { useState } from "react";

import './header.scss'
import SideMenuOpenButton from '../app/SideMenuOpenButton';
import LogoutButton from '../app/LogoutButton';
import MessageButton from '../app/MessageButton';
import Modal from '../app/Modal';
import MessageWrapper from '../app/MessegaWrapper';
import { Login } from '../../api/AppDto';
import { useDispatch } from 'react-redux';
import { loginOut } from '../../redux/action';
import ProfileTab from "../profile/ProfileTab";
import { useNavigate } from 'react-router-dom';

interface Props{
    readonly openSideMenu?: () => void;
}

export default function Header({ openSideMenu }: Props){

    const dispatch = useDispatch();

    

    const [messageTab, setMmessageTab] = useState(false);
    const [profileTab, setProfileTab] = useState(false);

    return(
        <header className='d-flex justify-content-between align-items-center pe-4'>
            <div className="role-title-container d-flex align-items-center">
                <SideMenuOpenButton onClick={openSideMenu}/>
            </div>
            <div className='d-flex justify-content-between gap-3 align-items-center'>
            <span className='font-weight-bold text-light' onClick={()=>setProfileTab(true)}>
                asadbek0101
            </span>
            <MessageButton onClick={()=>setMmessageTab(true)}/>
            <LogoutButton onClick={()=>dispatch(loginOut(Login.NotFound))}/>
            </div>
            <Modal
                show={messageTab}
                onClose={()=>setMmessageTab(false)}
                width='500px'
                height='100%'
                modalClassName='d-flex justify-content-end'
                childrenclassName='px-4 pt-2 text-center'
            >
                <MessageWrapper/>
            </Modal>
            <Modal 
                show={profileTab}
                onClose={()=>setProfileTab(false)}
                width='800px'
                height='600px'
                modalClassName='d-flex justify-content-center align-items-center'
                childrenclassName='p-4'
                     >
                    <ProfileTab/>
            </Modal>
        </header>
    )
}