import React from "react";
import TableButton from "../button/TableButton";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import EyeIcon from "../icons/EyeIcon";
import Table from "../table/Table";

interface TeachersTableProps{
    readonly data: any;
    readonly getTeacher: (row: any) => void;
    readonly deleteTeacher: (row: any) => void;
}

export default function TeachersTable({data, getTeacher, deleteTeacher}:TeachersTableProps){
    
    const header: any = [
        {
            header: "Number",
            access: 'teacherNumber',
            width: 100,
        },
        {
            header: "Full Name",
            access: 'fullName',
            width: 240,
        },
        {
            header: "Country",
            access: 'country',
            width: 140,
        },
        {
            header: "Job",
            access: 'job',
            width: 140,
        },
        {
            header: "Salary",
            access: 'salary',
            width: 140,
        },
        {
            header: "Actions",
            access: 'actions',
            ceil: (row: any)=>{
                return (
                            <div className="d-flex">
                            <TableButton
                                className="bg-danger me-2"
                                onClick={()=>deleteTeacher(row)}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-warning me-2"
                                onClick={()=>getTeacher(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-success"
                                onClick={()=>alert("Show")}
                                >
                                <EyeIcon color="white" size={14}/>
                            </TableButton>
                            </div>
                        )
            },
            width: 60,
        },
    ];

    return <Table data={data} headers={header}/>
}