import React from "react";
import { Route, Routes } from "react-router";
import { RouterLink } from "../api/AppDto";
import AppLoyaut from "../components/app/AppLoyaut";
import ArticlesContainer from "./ArticlesContainer";
import BooksContainer from "./BooksContainer";
import GlassorysContainer from "./GlassorysContainer";
import LessonsContainer from "./LessonsContainer";
import SchoolContainer from "./SchoolsContainer";
import SettingsContainer from "./SettingsContainer";
import StudentsContainer from "./StudentsContainer";
import TeachersContainer from "./TeachersContainer";

export default function HomeContainer(){
    return (
        <AppLoyaut>
                        <Routes>
                            <Route path={RouterLink.Schools} element={<SchoolContainer/>}/>
                            <Route path={RouterLink.Teachers} element={<TeachersContainer/>}/>
                            <Route path={RouterLink.Students} element={<StudentsContainer/>}/>
                            <Route path={RouterLink.Lessons} element={<LessonsContainer/>}/>
                            <Route path={RouterLink.Glassorys} element={<GlassorysContainer/>}/>
                            <Route path={RouterLink.Books} element={<BooksContainer/>}/>
                            <Route path={RouterLink.Articles} element={<ArticlesContainer/>}/>
                            <Route path={RouterLink.Settings} element={<SettingsContainer/>}/>
                        </Routes>
                </AppLoyaut>
    )
}