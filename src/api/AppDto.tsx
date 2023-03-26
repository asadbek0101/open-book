import React from "react";

export interface MenuProps{
    readonly data: any;
    readonly selectMenu: (menu: any) => void;
}

export interface IconProps{
    readonly size?: number;
    readonly color?: string;
}

export enum RoutesTypePath{
    HomeContainer = '/',
    BooksContainerPath = '/books/:tab?',
    LessonsContainerPath = '/lessons/:tab?',
    ArticlesContainerPath = '/articles/:tab?',
    TestsContainerPath = '/tests/:tab?',
    GlassorysContainerPath = '/glassorys/:tab?',
    InforationsContainerPath = '/informations/:tab?',
    NewsContainerPath = '/news/:tab?',
}

export enum RoutesType{
    HomeContainer = '/',
    BooksContainer = '/books',
    LessonsContainer = '/lessons',
    ArticlesContainer = '/articles',
    TestsContainer = '/tests',
    GlassorysContainer = '/glassorys',
    InforationsContainer = '/informations',
    NewsContainer = '/news',
}

export interface HeaderButtonProps{
    readonly getValue: (value: string)=>void;
}