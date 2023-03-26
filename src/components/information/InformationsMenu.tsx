import React from "react";
import { MenuProps } from "../../api/AppDto";
import AppCardGroup from "../card/AppCardGroup";
import TabPage from "../tabs/TabPage";


export default function InforationsMenu({data, selectMenu}:MenuProps){
    return (
        <TabPage>
            <AppCardGroup cardType="info" data={data} selectMenu={selectMenu}/>
        </TabPage>
    )
}