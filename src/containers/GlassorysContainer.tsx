import React, { useState } from "react";
import ContainerLayout from "../components/app/ContainerLayout";
import GlassorysMenu from "../components/glassory/GlassorysMenu";
import GlassoryTab from "../components/glassory/GlassroysTab";

export enum GlassoryPageType{
    GlassoryTab = 'galssory-tab',
    GlassoryMenu = 'glassory-menu'
}


export default function GlassorysContainer(){
    const [showPage, setShowPage] = useState(GlassoryPageType.GlassoryMenu);
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
        ]
    return (
        <ContainerLayout>
            {showPage === GlassoryPageType.GlassoryMenu && (
                <GlassorysMenu data={data} selectMenu={(menu: any)=>setShowPage(GlassoryPageType.GlassoryTab)}/>
            )}
            {showPage === GlassoryPageType.GlassoryTab && (
                <GlassoryTab/>
            )}
        </ContainerLayout>
    )
}