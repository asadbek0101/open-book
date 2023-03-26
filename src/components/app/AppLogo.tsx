import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../../api/AppDto";

const Logo = require("../../images/Logo.png");

export default function AppLogo(){
    const navigate = useNavigate();
    return (
    <div className="d-flex align-items-center header-logo" style={{cursor: "pointer"}} onClick={()=>navigate(RoutesType.HomeContainer)}>
        <img style={{width: '80px', height: '36px'}} src={Logo} alt="" />
        <div className="d-flex gap-1" style={{cursor: 'pointer'}}>
            <span className="text-light fw-bold fs-5 open">Open</span>
            <span className="fw-bold fs-5 book">Book</span>
        </div>
    </div>
    )
}