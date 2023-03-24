import React , { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RoutesType } from "../../api/AppDto";
import { AritclesPageType } from "../../containers/ArticlesContainer";
import { BookPageType } from "../../containers/BooksContainer";
import { GlassoryPageType } from "../../containers/GlassorysContainer";
import { InformationsPageType } from "../../containers/InformationsContainer";
import { LessonsPageType } from "../../containers/LessonsContainer";
import { NewsPageType } from "../../containers/NewsContainer";
import { TestPageType } from "../../containers/TestsContainer";
import { SaveMenuItem } from "../../utils/SaveMenuItem";
import AppHeaderMenu from "./AppHeaderMenu";
import AppHeaderMenuItem from "./AppHeaderMenuItem";

export default function AppHeaderMenuWrapper(){
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location

    const tab = useMemo(()=>SaveMenuItem('active_app', pathname),[pathname])

    const onChangeTab = useCallback((value: string, tab: string)=>{
        navigate(`${value}/${tab}`);
    },[navigate])

    return (
            <AppHeaderMenu
                           defaultTab={RoutesType.HomeContainer}
                            activeTab={tab}
                            onChangeTab={(route: string, tab: string)=>onChangeTab(route, tab)}
                            >
                            <AppHeaderMenuItem
                                key={RoutesType.BooksContainer}
                                default={BookPageType.BookMenu}
                                >
                                Books
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.LessonsContainer}
                                default={LessonsPageType.LessonsMenu}
                                >
                                Lessons
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.ArticlesContainer}
                                default={AritclesPageType.AritclesMenu}
                                >
                               Articles
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.TestsContainer}
                                default={TestPageType.TestMenu}
                                >
                                Tests
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.GlassorysContainer}
                                default={GlassoryPageType.GlassoryMenu}
                                >
                                Glassorys
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.InforationsContainer}
                                default={InformationsPageType.InformationsMenu}
                                >
                                Informations
                            </AppHeaderMenuItem>
                            <AppHeaderMenuItem
                                key={RoutesType.NewsContainer}
                                default={NewsPageType.NewsMenu  }
                                >
                                News
                            </AppHeaderMenuItem>
                        </AppHeaderMenu>
                        
    )
}