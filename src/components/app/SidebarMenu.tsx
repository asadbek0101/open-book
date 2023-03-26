import './assets/sidebar.scss'
import React from 'react'
import SideMenuItem from './SideMenuItem'
import LessonIcon from '../icons/LessonIcon'
import BookIcon from '../icons/BookIcon'
import TeachersIcon from '../icons/TeashersIcon'
import StudentsIcon from '../icons/StudentsIcon'
import SchoolIcon from '../icons/SchoolIcon'
import LessonsIcon from '../icons/LessonsIcon'
import SettingsIcon from '../icons/SettingsIcon'
import { RouterLink, SideMenu } from '../../api/AppDto'
import { translate } from '../../lang/translate'
import TestIcon from '../icons/TestIcon'
import GlassorysIcon from '../icons/GlassoryIcon'
import InformationIcon from '../icons/InformationIcon'
import NewsIcon from '../icons/NewsIcon'
import { useSelector } from 'react-redux'

export default function SideBarMenu(){
    const sideMenu = useSelector((state: any)=>state.handleSideMenu);
    const menuOpen = sideMenu === SideMenu.Closed;
    return (
        <div className='sidebar-container'>
                <div className='sidebar-header'>
                {!menuOpen && (
                     <div className="role-title-box">
                     <span className="fs-4 bold role-title pe-3 d-flex justify-content-center align-items-center flex-nowrap">
                          SUPER ADMIN
                      </span>
                 </div>
                ) }
                </div>
            <SideMenuItem
                url={RouterLink.Teachers}
                id='teachers'
                icon={<TeachersIcon color='white'/>}
            >
               {translate("TEACHERS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Students}
                id='students'
                icon={<StudentsIcon color='white'/>}
            >
                {translate("STUDENTS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Books}
                id='books'
                icon={<BookIcon color='white'/>}
            >
                {translate("BOOKS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Lessons}
                id='lessons'
                icon={<LessonsIcon color='white'/>}
            >
                {translate("LESSONS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Articles}
                id='articles'
                icon={<LessonIcon color='white'/>}
            >
                {translate("ARTICLES")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.TestS}
                id='lessons'
                icon={<TestIcon color='white'/>}
            >
                {translate("TESTS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Glassorys}
                id='lessons'
                icon={<GlassorysIcon color='white'/>}
            >
                {translate("GLASSORYS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Informations}
                id='lessons'
                icon={<InformationIcon color='white'/>}
            >
                {translate("INFORMATIONS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.News}
                id='lessons'
                icon={<NewsIcon color='white'/>}
            >
                {translate("NEWS")}
            </SideMenuItem>
            <SideMenuItem
                url={RouterLink.Settings}
                id='settings'
                icon={<SettingsIcon color='white'/>}
            >
                {translate("SETTINGS")}
            </SideMenuItem>
        </div>
    )
}