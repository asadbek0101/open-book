import React, {useCallback, useEffect, useState} from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import TeacherForm from "./TeacherForm";

interface TeacherFormWrapperProps{
    readonly teacher?: any;
    readonly backTable: ()=> void;
    readonly onsubmit: (value: any) => void;
}

export default function TeacherFormWrapper({teacher, backTable, onsubmit}:TeacherFormWrapperProps){
    const [initialValues, setInitialValues] = useState({
        teacherNumber: "",
        fullName: "",
        country: "",
        job: "",
        salary: "",
        login: "",
        password: "",
        language: "",
        workPlace: "",
        position: "",
    })
    useEffect(()=>{
        if(teacher){
            setInitialValues(teacher)
        }
    },[teacher, setInitialValues])

    return (
        <TabPage
            childrenClassName="p-3"
            headerComponent={
                <Button onClick={()=>backTable()}>
                    Back
                </Button>
            }
            >
            <TeacherForm initialValues={initialValues} setInitialValues={setInitialValues} onSubmit={onsubmit}/>
        </TabPage>
    )
}