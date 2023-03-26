import React, {useCallback, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesType } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import LessonMenu from "../components/lesson/LessonMenu";
import LessonTab from "../components/lesson/LessonTab";

export enum LessonsPageType{
    LessonsMenu = 'lessons-menu',
    LessonsTab = 'lessons-tab'
}

export default function LessonsContainer(){
    const navigate = useNavigate();
    const { tab = LessonsPageType.LessonsMenu } = useParams();
    const data = [
        {
            _id: 1,
            title: "Hujayralar",
         },
         {
            _id: 2,
            title: "Kimyoviy moddalar",
         },
         {
            _id: 3,
            title: "Qattiq jismlar",
         },
         {
            _id: 4,
            title: "Kuchlar",
         },
         {
            _id: 5,
            title: "Biologik omillar",
         },
        ]

        const selectMenu = useCallback((value: any)=>{
            navigate(`${RoutesType.LessonsContainer}/${LessonsPageType.LessonsTab}`)
        },[navigate])
    
    return (
        <ContainerLayout>
                {tab === LessonsPageType.LessonsMenu && (
                    <LessonMenu data={data} selectMenu={(menu: any)=>selectMenu(menu)}/>
                )}
                {tab === LessonsPageType.LessonsTab && (
                    <LessonTab/>
                )}
        </ContainerLayout>
    )
}