import React, {useState} from "react";
import ContainerLayout from "../components/app/ContainerLayout";
import NewsMenu from "../components/news/NewsMenu";
import NewsTab from "../components/news/NewsTab";

export enum NewsPageType{
    NewsMenu = 'lessons-menu',
    NewsTab = 'lessons-tab'
}

export default function NewsContainer(){
    const [ showPage, setShowPage ] = useState(NewsPageType.NewsMenu);
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
         {
            _id: 4,
            title: "Kuchlar",
         },
         {
            _id: 5,
            title: "Biologik omillar",
         },
        ]
    return (
        <ContainerLayout>
            {showPage === NewsPageType.NewsMenu && (
                    <NewsMenu data={data} selectMenu={(menu: any)=>setShowPage(NewsPageType.NewsTab)}/>
                )}
                {showPage === NewsPageType.NewsTab && (
                    <NewsTab/>
                )}
        </ContainerLayout>
    )
}