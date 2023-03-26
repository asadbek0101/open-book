import React from "react";
import { MenuProps } from "../../api/AppDto";
import AppCardGroup from "../card/AppCardGroup";
import TabPage from "../tabs/TabPage";


export default function ArticlesMenu({data, selectMenu}:MenuProps){
    return (
        <TabPage>
            <AppCardGroup data={data} selectMenu={selectMenu} cardType='article'/>
        </TabPage>
    )
}