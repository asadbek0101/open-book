import React, { useCallback, useState, ReactNode } from "react";
import Loading from "../loading/Loading";

interface HeaderProps{
    readonly width?: number; 
    readonly access: string;
    readonly header: string;
    readonly ceil?: ReactNode;
}

interface TableProps{
    readonly headers: HeaderProps[];
    readonly data: any[];
    readonly selectRow?: (select: any[]) => void;
}

export default function Table({data, headers, selectRow}:TableProps){

    const [activeId, setActiveId] = useState('true');
    const [select, setSelect] = useState<any>([]);
    const onChangeSelect = useCallback((value: any, type: string)=>{
        console.log(value)
        if(type === 'one'){
            value.isSelect = true;
            setSelect((prev: any)=>[...prev, value]);
        }else {
            data = data.map((item:any)=>item.isSelect = true)
            setSelect(value);
        }
    },[select, setSelect, selectRow])

    if(data.length === 0){
       return <Loading/>
    }

    return (
        <table className="table table-striped px-2">
            <thead className="px-2">
                <tr>
                    <th style={{width: '40px'}}>
                        #
                        {/* <input type="checkbox" onChange={()=>onChangeSelect(data, 'all')}/> */}
                    </th>
                   {headers.map((head: any)=>{
                    return (
                        <th style={{width: `${head.width}px`}}>
                            {head.header}
                        </th>
                    )
                   })}
                </tr>
            </thead>
            <tbody>
                {data?.map((row: any, index: number)=>{
                    return (
                        <tr>
                            <td style={{width: '40px'}}>
                                {index+1}
                                {/* <input type="checkbox" onChange={(event:any)=>setActiveId(event.target.checked)} value={activeId}/> */}
                            </td>
                            {headers.map((head: any)=>{
                                return (
                                    <td style={{width: `${head.width}px`}}>
                                        {(head.ceil)?(
                                           <div>{head.ceil(row)}</div>
                                        ):(
                                            <span>{row[head.access]}</span>
                                        )}
                                    </td>
                                )
                            })}    
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    )
}