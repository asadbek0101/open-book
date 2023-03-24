import React, {useCallback} from "react"
import { useNavigate } from "react-router-dom";
import { RoutesType } from "../api/AppDto";
import { useParams } from "react-router";
import ArticlesMenu from "../components/article/ArticlesMenu";
import BooksMenu from "../components/book/BooksMenu";
import GlassorysMenu from "../components/glassory/GlassorysMenu";
import HomeMenuGroup from "../components/home/HomeMenuGroup"
import InforationsMenu from "../components/information/InformationsMenu";
import LessonMenu from "../components/lesson/LessonMenu";
import NewsMenu from "../components/news/NewsMenu";
import TestsMenu from "../components/test/TestsMenu";

const HomeOpenBook = require("../images/Home_Open_Book.png")

export default function HomeContainer(){
    const dataBooks = [
        {
            name: 'Matematika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Fizika',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Kimyo',
            status: 'active',
            price: 'free',
            starStatus: 3
        },
        {
            name: 'Geografiya',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 3
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
    ]
    const dataArticles = [
        {
            _id: 1,
            title: "Arraylar",
         },
         {
            _id: 2,
            title: "Kimyo sohasining",
         },
         {
            _id: 3,
            title: "Qattiq jismlar",
         },
         {
            _id: 4,
            title: "Kuchlar",
         },
         {
            _id: 5,
            title: "Biologik omillar",
         },
         {
            _id: 6,
            title: "Kuchlar",
         },
         {
            _id: 7,
            title: "Biologik omillar",
         },
    ]
    const dataLessons = [
            {
                _id: 1,
                title: "Hujayralar",
             },
             {
                _id: 2,
                title: "Kimyoviy moddalar",
             },
             {
                _id: 3,
                title: "Qattiq jismlar",
             },
             {
                _id: 4,
                title: "Kuchlar",
             },
             {
                _id: 5,
                title: "Biologik omillar",
             },
    ]
    const dataTests = [
            {
                _id: 1,
                title:"Matematikadan 3-oraliq ishi",
                isActive: true,
                menuImg: '',
                testType: 'write-test',
                startDate: '20.02.2023',
                startTIme: '20:00',
                time: '45',
                questions:[
                    {
                        _id: 1.1, 
                        question: 'Kub deb nimaga aytiladi?',
                        answers: [
                            {
                                _id: 1.1,
                                title: 'Hamma qirrasi teng prizma',
                                isChanged: true,
                            },
                            {
                                _id: 1.2,
                                title: 'Hamma tomoni teng piramidaga',
                                isChanged: false,
                            },
                            {
                                _id: 1.3,
                                title: 'Hamma yon sirti teng piramidaga',
                                isChanged: false,
                            },  {
                                _id: 1.4,
                                title: 'Hamma tomoni teng slindirga',
                                isChanged: false,
                            },
                        ]
                    },
                    {
                        _id: 2, 
                        question: 'Funsiya nima',
                        answers: [
                            {
                                _id: 2.1,
                                title: 'Aniqlanish soxasi bo\'lgan tenglama',
                                isChanged: false,
                            },
                            {
                                _id: 2.2,
                                title: 'Oddiy tenglama',
                                isChanged: false,
                            },
                            {
                                _id: 2.3,
                                title: 'Qiymatlar soxasi bo\'lgan tenglama',
                                isChanged: false,
                            },  {
                                _id: 2.4,
                                title: 'Aksiyoma',
                                isChanged: true,
                            },
                        ]
                    },
                    {
                        _id: 3, 
                        question: 'Oddiy kasr deb nimaga aytiladi',
                        answers: [
                            {
                                _id: 3.1,
                                title: 'Surat va maxraji bor kasrga',
                                isChanged: false,
                            },
                            {
                                _id: 3.2,
                                title: 'Surati maxrajidan kichik bo\'lgan kasrga',
                                isChanged: false,
                            },
                            {
                                _id: 3.3,
                                title: 'Oddiy kasrga',
                                isChanged: false,
                            },  {
                                _id: 3.4,
                                title: 'Hamma javob to\'g\'ri',
                                isChanged: false,
                            },
                        ]
                    },
                ]
            },
            {
                _id: 2,
                title:"Kimyodan 3-oraliq ishi",
                isActive: true,
                menuImg: '',
                testType: 'quiz-test',
                startDate: '10.02.2023',
                startTIme: '10:00',
                time: '45',
                questions:[
                    {
                        _id: 2.1, 
                        question: 'Nima uchun qushlar uchadi?',
                        answers: [
                            {
                                _id: 1.1,
                                title: 'Bilmadim',
                                isChanged: true,
                            },
                            {
                                _id: 1.2,
                                title: 'Bekorchilikdan',
                                isChanged: false,
                            },
                            {
                                _id: 1.3,
                                title: 'Uchush uchun uchadi',
                                isChanged: false,
                            },  {
                                _id: 1.4,
                                title: 'Kuchayganda',
                                isChanged: false,
                            },
                        ]
                    },
                    {
                        _id: 2, 
                        question: 'Array nima',
                        answers: [
                            {
                                _id: 2.1,
                                title: 'Massiv',
                                isChanged: false,
                            },
                            {
                                _id: 2.2,
                                title: 'Object',
                                isChanged: false,
                            },
                            {
                                _id: 2.3,
                                title: 'String',
                                isChanged: false,
                            },  {
                                _id: 2.4,
                                title: 'List',
                                isChanged: true,
                            },
                        ]
                    },
                    {
                        _id: 3, 
                        question: 'C++ da objectlarni nechi turi bor',
                        answers: [
                            {
                                _id: 3.1,
                                title: '3',
                                isChanged: false,
                            },
                            {
                                _id: 3.2,
                                title: '2',
                                isChanged: false,
                            },
                            {
                                _id: 3.3,
                                title: '1',
                                isChanged: false,
                            },  {
                                _id: 3.4,
                                title: '3',
                                isChanged: false,
                            },
                        ]
                    },
                ]
            }
    ]  
    const dataGlassorys = [
            {
                _id: 1,
                title: "Hujayralar",
             },
             {
                _id: 2,
                title: "Kimyoviy moddalar",
             },
             {
                _id: 3,
                title: "Qattiq jismlar",
             },
             {
                _id: 4,
                title: "Kuchlar",
             },
             {
                _id: 5,
                title: "Biologik omillar",
             },
             {
                _id: 1,
                title: "Hujayralar",
             },
             {
                _id: 2,
                title: "Kimyoviy moddalar",
             },
             {
                _id: 3,
                title: "Qattiq jismlar",
             },
             {
                _id: 4,
                title: "Kuchlar",
             },
             {
                _id: 5,
                title: "Biologik omillar",
             },
             {
                _id: 1,
                title: "Hujayralar",
             },
             {
                _id: 2,
                title: "Kimyoviy moddalar",
             },
             {
                _id: 3,
                title: "Qattiq jismlar",
             },
             {
                _id: 4,
                title: "Kuchlar",
             },
             {
                _id: 5,
                title: "Biologik omillar",
             },
             {
                _id: 1,
                title: "Hujayralar",
             },
             {
                _id: 2,
                title: "Kimyoviy moddalar",
             },
             {
                _id: 3,
                title: "Qattiq jismlar",
             },
             {
                _id: 4,
                title: "Kuchlar",
             },
             {
                _id: 5,
                title: "Biologik omillar",
             },
    ]  
    const navigate = useNavigate();
    const pushLink = useCallback((link: any)=>{
        console.log(link)
        navigate(`${link}`)
    },[]);

    const { id } = useParams();

    console.log("id ", id);

    return (
        <div className="w-100 h-100">
            <img className="w-100" src={HomeOpenBook} alt="" />
            <HomeMenuGroup
                titleName="Books"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.BooksContainer}  
                >
                    <BooksMenu data={dataBooks} selectMenu={(menu:any)=>navigate(`/${menu.name}`)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="Lessons"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.LessonsContainer}  
                >
                    <LessonMenu data={dataLessons} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="Articles"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.ArticlesContainer}  
                >
                    <ArticlesMenu data={dataArticles} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="Tests"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.TestsContainer}  
                >
                    <TestsMenu data={dataTests} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="Glassorys"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.GlassorysContainer}  
                >
                    <GlassorysMenu data={dataGlassorys} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="Informations"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.InforationsContainer}  
                >
                    <InforationsMenu data={dataGlassorys} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
            <HomeMenuGroup
                titleName="News"
                showAll={(link: any)=>pushLink(link)}
                link={RoutesType.NewsContainer}  
                >
                    <NewsMenu data={dataLessons} selectMenu={(menu:any)=>console.log(menu)}/>
            </HomeMenuGroup>
        </div>
    )
}