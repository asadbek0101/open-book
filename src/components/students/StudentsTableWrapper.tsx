import React from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import StudentsTable from "./StudentTable";

interface StudentsTableWrapperProps{
    readonly data: any;
    readonly getStudent: (row: any) => void;
    readonly createNew: () => void;
}

export default function StudentsTableWrapper({data, getStudent, createNew}:StudentsTableWrapperProps){
    return (
        <TabPage
            headerComponent={
                <Button onClick={()=>createNew()}>
                    Create New
                </Button>
            }
            >
            <StudentsTable data={data} getStudent={getStudent}/>
        </TabPage>
    )
}