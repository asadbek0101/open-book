import React from "react";
import TableButton from "../button/TableButton";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";
import EyeIcon from "../icons/EyeIcon";
import Table from "../table/Table";

interface StudentsTableProps{
    readonly data: any;
    readonly getStudent: (row: any) => void;
}

export default function StudentsTable({data, getStudent}:StudentsTableProps){
    
    const header: any = [
        {
            header: "Number",
            access: 'number',
            width: 100,
            ceil: (row: any) =>{
                return (
                    <a href="#" onClick={()=>getStudent(row)} style={{textDecoration: "none"}}>{row.address.number}</a>
                )
            }
        },
        {
            header: "Full Name",
            access: 'name',
            width: 200,
            ceil: (row: any) =>{
                return (
                    <span>{row.name.firstname} {row.name.lastname}</span>
                )
            }
        },
        {
            header: "Email",
            access: 'email',
            width: 200,
        },
        {
            header: "Address",
            access: 'password',
            ceil: (row: any) =>{
                return (
                    <span>{row.address.city}</span>
                )
            },
            width: 140,
        },
        {
            header: "Phone",
            access: 'phone',
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
                                onClick={()=>alert("Delete")}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-warning me-2"
                                onClick={()=>alert("Edit")}
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