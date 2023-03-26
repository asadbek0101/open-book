import React from "react";
import { MenuProps } from "../../api/AppDto";
import AppCardGroup from "../card/AppCardGroup";
import TabPage from "../tabs/TabPage";


export default function GlassorysMenu({data, selectMenu}:MenuProps){
    return (
        <TabPage>
            <AppCardGroup cardType="glassory" data={data} selectMenu={selectMenu}/>
        </TabPage>
    )
}