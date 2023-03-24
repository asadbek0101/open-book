import React from "react";
import { MenuProps } from "../../api/AppDto";
import CardGroup from "../card/CardGroup";
import TabPage from "../tabs/TabPage";


export default function BooksMenu({data, selectMenu} :MenuProps){
    return (
        <TabPage>
            <CardGroup data={data} setUser={(value: any)=>selectMenu(value)}/>
        </TabPage>
    )
}