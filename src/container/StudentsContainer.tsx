import React, { useEffect, useState } from "react";
import { request } from "../api/reques";
import ContainerLayout from "../components/app/ContainerLayout";
import StudentsTableWrapper from "../components/students/StudentsTableWrapper";

enum StudentsPageType{
    Table = 'table',
    View = 'view',
    Form = 'form'
}

export default function StudentsContainer(){

    const [user, setUser] = useState([]);
    const [student, setStudent] = useState({});
    const [show, setShow] = useState(StudentsPageType.Table);


    useEffect(()=>{
        request.get("/users").then((response: any)=>setUser(response.data)).catch((err)=>console.log(err))
    },[])

    return (
        <ContainerLayout>
             {show == StudentsPageType.Table && (
                <StudentsTableWrapper 
                    createNew={()=>setShow(StudentsPageType.Form)}
                    getStudent={(row: any)=>{
                        setShow(StudentsPageType.View);
                        setStudent(row);
                    }} data={user}/>
            )}
        </ContainerLayout>
    )
}