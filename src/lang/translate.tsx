import React from "react";
import { uzbek } from "./Uzbek";
import { rus } from "./Russian";
import { english } from "./English";
import { Lang } from "../api/AppDto";

export const translate = ( title: string ) => {
    
    const lang = window.localStorage.getItem("Lang")
    var ui18 = lang === Lang.English? english : lang === Lang.Russian? rus : uzbek;
    return ui18[title]
}

