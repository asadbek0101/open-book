import React from "react";
import { MenuProps } from "../../api/AppDto";
import AppCardGroup from "../card/AppCardGroup";
import TabPage from "../tabs/TabPage";


export default function LessonMenu({data, selectMenu}:MenuProps){

   
    return (
        <TabPage>
           <AppCardGroup cardType="lesson" data={data} selectMenu={(value: any)=>selectMenu(value)}/>
        </TabPage>
    )
}