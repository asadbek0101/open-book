import React from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";

interface Props{
    readonly backPage: () => void;
}

export default function CreateSchool({ backPage }:Props){
    return (
        <TabPage 
            headerComponent={
                <Button onClick={()=>backPage()}>
                    Back
                </Button>
            }
        >Create School</TabPage>
    )
}