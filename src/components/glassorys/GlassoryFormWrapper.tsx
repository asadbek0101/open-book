import React, {useState} from "react";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import GlassoryForm from "./GlassoryForm";
import GlassoryTable from "./GlassoryTable";
import GlassoryView from "./GlassoryView";

interface GlassoryFormWrapperProps{
    readonly backButton: () => void;
}

export default function GlassoryFormWrapper({backButton}:GlassoryFormWrapperProps){
    const [initialValues, setInitialValues] = useState({
       _id: 0,
       glassoryName: "",
       createdDate: "",
       updatedDate: "",
       glassoryImg: "",
       lesson: "",
       isActive: false,
    })
    return (
        <TabPage
            headerComponent={
                <Button onClick={backButton}>
                    Back
                </Button>
            }
        >
            <GlassoryForm initialiValues={initialValues} setInitialValues={setInitialValues} onsubmit={(value: any)=>console.log(value)}/>
        </TabPage>
    )
}