import React, {useCallback, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesType } from "../api/AppDto";
import ContainerLayout from "../components/app/ContainerLayout";
import ArticlesMenu from "../components/article/ArticlesMenu";
import ArticlesTab from "../components/article/ArticlesTab";

export enum AritclesPageType{
    AritclesMenu = 'articles-menu',
    AritclesTab = 'articles-tab'
}

export default function ArticlesContainer(){
    const navigate = useNavigate();
    const { tab = AritclesPageType.AritclesMenu } = useParams();
    const data = [
        {
            _id: 1,
            title: "Arraylar",
         },
         {
            _id: 2,
            title: "Kimyo sohasining",
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
         {
            _id: 6,
            title: "Kuchlar",
         },
         {
            _id: 7,
            title: "Biologik omillar",
         },
        ]

        
        const selectMenu = useCallback((value: any)=>{
            navigate(`${RoutesType.ArticlesContainer}/${AritclesPageType.AritclesTab}`)
        },[navigate])
    
    return (
<ContainerLayout>
        {tab === AritclesPageType.AritclesMenu && (
            <ArticlesMenu data={data} selectMenu={(menu: any)=>selectMenu(menu)}/>
        )}
        {tab === AritclesPageType.AritclesTab && (
            <ArticlesTab/>
        )}
</ContainerLayout>
    )
}