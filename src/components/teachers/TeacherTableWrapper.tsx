import React from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import TeachersTable from "./TeacherTable";

interface TeachersTableWrapperProps{
    readonly data: any;
    readonly getTeacher: (row: any) => void;
    readonly deleteTeacher: (row: any) => void;
    readonly createNew: () => void;
}

export default function TeacherTableWrapper({data, getTeacher, createNew, deleteTeacher}:TeachersTableWrapperProps){
    return (
        <TabPage
            headerComponent={
                <Button onClick={()=>createNew()}>
                    Create New
                </Button>
            }
            >
            <TeachersTable data={data} getTeacher={getTeacher} deleteTeacher={deleteTeacher}/>
        </TabPage>
    )
}