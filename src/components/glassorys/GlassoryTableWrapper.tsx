import React from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import GlassoryTable from "./GlassoryTable";

interface GlassoryTableWrapperProps{
    readonly createLinkButton: ()=>void;
}

export default function GlassoryTableWrapper({createLinkButton}:GlassoryTableWrapperProps){
    return (
        <TabPage
            headerComponent={
            <Button onClick={createLinkButton}>
                Create New
            </Button>}
            >
            <GlassoryTable/>
        </TabPage>
    )
}