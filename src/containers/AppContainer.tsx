import React from "react"
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { RoutesType, RoutesTypePath } from "../api/AppDto";
import ArticlesContainer from "./ArticlesContainer";
import BooksContainer from "./BooksContainer";
import AppLayout from "../components/app/AppLayout";
import HomeContainer from "./HomeContainer";
import LessonsContainer from "./LessonsContainer";
import TestsContainer from "./TestsContainer";
import GlassorysContainer from "./GlassorysContainer";
import InforationsContainer from "./InformationsContainer";
import NewsContainer from "./NewsContainer";
import SiteStatusInfo from "../components/app/SiteStatusInfo";


export default function AppContainer(){
    return (
        <>
             <SiteStatusInfo/>
            <AppLayout>
                <Routes>
                    <Route path={RoutesTypePath.HomeContainer} element={<HomeContainer/>}/>
                    <Route path={RoutesTypePath.GlassorysContainerPath} element={<GlassorysContainer/>}/>
                    <Route path={RoutesTypePath.LessonsContainerPath} element={<LessonsContainer/>}/>
                    <Route path={RoutesTypePath.BooksContainerPath} element={<BooksContainer/>}/>
                    <Route path={RoutesTypePath.ArticlesContainerPath} element={<ArticlesContainer/>}/>
                    <Route path={RoutesTypePath.TestsContainerPath} element={<TestsContainer/>}/>
                    <Route path={RoutesTypePath.InforationsContainerPath} element={<InforationsContainer/>}/>
                    <Route path={RoutesTypePath.NewsContainerPath} element={<NewsContainer/>}/>
                </Routes>
        </AppLayout>
        </>
    )
}