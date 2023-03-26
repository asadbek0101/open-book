import React, { useState } from "react";
import PageLoyaut from "../components/app/PageLoyaut";
import CreateSchool from "../components/school/CreateSchool";
import SchoolTable from "../components/school/SchoolTable";

export enum PageType{
    CreateSchool = 'create-school',
    Table = 'table-school'
}

export default function TestsContainer(){

    const [pageType, setPageType] = useState(PageType.Table);

    return (
        <PageLoyaut>
            {pageType === PageType.Table && (
                <SchoolTable openCreatePage={()=>setPageType(PageType.CreateSchool)}/>
            )}
            {pageType === PageType.CreateSchool && (
                <CreateSchool backPage={()=>setPageType(PageType.Table)}/>
            )}
        </PageLoyaut>
    )
}