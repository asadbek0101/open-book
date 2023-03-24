import React, { useState, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesType } from "../api/AppDto";
import AppCountDownTimer from "../components/app/AppCountDownTimer";
import ContainerLayout from "../components/app/ContainerLayout";
import QuizTest from "../components/test/QuizTest";
import TestsMenu from "../components/test/TestsMenu";
import { GetNowDate } from "../utils/GetNowDate";

export enum TestPageType{
    QuizTest = 'quiz-test',
    WriteTest = 'write-test',
    MargeTest = 'marge-test',
    TestMenu = 'test-menu'
}

export default function TestsContainer(){
    const { tab = TestPageType.TestMenu } = useParams();
    const [questions, setQuestions] = useState<any>({});
    const Date = useMemo(()=>GetNowDate(),[GetNowDate])
    const navigate = useNavigate();
    const testData = [
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
    const onChangeTest = useCallback((value: any)=>{
            navigate(`${RoutesType.TestsContainer}/${TestPageType.WriteTest}`);
            setQuestions(value);
    },[navigate, setQuestions])
    console.log(Date)

    return (
        <ContainerLayout>
            {tab === TestPageType.TestMenu && (
                <TestsMenu data={testData} selectMenu={(menu: any)=>onChangeTest(menu)}/>
            )}
            {tab === TestPageType.QuizTest && (
                 <QuizTest data={questions.questions}/>
            )}
            {tab === TestPageType.WriteTest && (
                 <div>
                 <h1>Write test</h1>

                    <AppCountDownTimer seconds={3660} theEnd={()=>alert("THE END!!")}/>

                 </div>
            )}
        </ContainerLayout>
    )
}