import React from "react";
import TabPage from "../components/app/TabPage";
import Button from "../components/button/Button";
import CreateLesson from "../components/lesson/CreateLesson";
import { Lang } from "../api/AppDto";
import { useNavigate, useParams } from "react-router-dom";

export default function LessonsContainer(){

    const navigate = useNavigate();
    const link = '/link-new'
    const { params } = useParams();

    return (
        <TabPage
        headerComponent={
            <Button onClick={()=>{
                navigate(`/lessons/${1}`)
                console.log(params)
        }}>Create New</Button>
        }
        >
           <CreateLesson/>
        </TabPage>
    )
}