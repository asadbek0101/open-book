import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import AppLoyaut from "../components/app/AppLoyaut";
import ArticlesContainer from "./ArticlesContainer";
import BooksContainer from "./BooksContainer";
import LessonsContainer from "./LessonsContainer";
import SchoolContainer from "./SchoolsContainer";
import SettingsContainer from "./SettingsContainer";
import StudentsContainer from "./StudentsContainer";
import TeachersContainer from "./TeachersContainer";
import { Login, RouterLink, User } from "../api/AppDto";
import AuthContainer from "./AuthContainer";
import HomeContainer from "./HomeContainer";
import { useSelector } from "react-redux";


export default function AppContainer(){

    const login = useSelector((state: any)=>state.handleUser)


    return (
       <div>
        {login === Login.Found && (
        <HomeContainer/>
        )}
        {login === Login.NotFound && (
        <AuthContainer/>
        )}
       </div>
    )
}