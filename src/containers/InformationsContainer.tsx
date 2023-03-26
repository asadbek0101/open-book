import React , {useState} from "react";
import ContainerLayout from "../components/app/ContainerLayout";
import InforationsMenu from "../components/information/InformationsMenu";
import InforationsTab from "../components/information/InformationsTab";

export enum InformationsPageType{
    InformationsTab = 'information-tab',
    InformationsMenu = 'information-menu'
}

export default function InforationsContainer(){
    const [showPage, setShowPage] = useState(InformationsPageType.InformationsMenu);

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
            {showPage === InformationsPageType.InformationsMenu && (
                <InforationsMenu data={data} selectMenu={(menu: any)=>setShowPage(InformationsPageType.InformationsTab)}/>
            )}
            {showPage === InformationsPageType.InformationsTab && (
                <InforationsTab/>
            )}
        </ContainerLayout>
    )
}