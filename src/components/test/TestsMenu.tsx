import React from "react";
import { MenuProps } from "../../api/AppDto";
import AppCardGroup from "../card/AppCardGroup";
import TabPage from "../tabs/TabPage";


export default function TestsMenu({data, selectMenu}:MenuProps){
    return (
        <TabPage>
                <AppCardGroup  cardType="test" data={data} selectMenu={selectMenu}/>
        </TabPage>
    )
}