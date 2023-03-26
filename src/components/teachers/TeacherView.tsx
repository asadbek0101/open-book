import React from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";

interface TeacherViewProps{
    readonly teacher: any;
    readonly backTable: () => void;
}

export default function TeacherView({teacher, backTable}:TeacherViewProps){
    return (
        <TabPage
            headerComponent={
                <Button onClick={()=>backTable()}>
                    Back
                </Button>
            }
            >
            <span>{teacher.fullName}</span>
        </TabPage>
    )
}