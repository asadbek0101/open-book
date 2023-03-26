import React, { ReactNode, useState } from "react";
import { PageType } from "../../container/SchoolsContainer";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import SchoolCard from "../card/SchoolCard";

interface Props{
    readonly openCreatePage: () => void;
}

export default function SchoolTable( { openCreatePage }: Props){

    return (
        <TabPage
        headerComponent={
            <Button onClick={()=>openCreatePage()}>Create New</Button>
        }
        >
             <div className="row">
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
                <div className="col-3">
                    <SchoolCard/>
                </div>
            </div>
        </TabPage>
    )
}