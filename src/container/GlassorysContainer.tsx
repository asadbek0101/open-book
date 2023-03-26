import React, { useEffect, useState } from "react";
import { request } from "../api/reques";
import ContainerLayout from "../components/app/ContainerLayout";
import GlassoryFormWrapper from "../components/glassorys/GlassoryFormWrapper";
import GlassoryTableWrapper from "../components/glassorys/GlassoryTableWrapper";

enum GlassroysPageType{
    Table = 'table',
    View = 'view',
    Form = 'form'
}

export default function GlassorysContainer(){

    const [data, setData] = useState([]);
    const [student, setStudent] = useState({});
    const [show, setShow] = useState(GlassroysPageType.Table);


    useEffect(()=>{
        request.get("/users").then((response: any)=>setData(response.data)).catch((err)=>console.log(err))
    },[])

    return (
        <ContainerLayout>
             {show == GlassroysPageType.Table && (
                <GlassoryTableWrapper
                    createLinkButton={()=>setShow(GlassroysPageType.Form)}
                    />
            )}
             {show == GlassroysPageType.Form && (
                <GlassoryFormWrapper
                    backButton={()=>setShow(GlassroysPageType.Table)}
                    />
            )}
        </ContainerLayout>
    )
}