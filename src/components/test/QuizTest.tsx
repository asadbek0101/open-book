import React, { useState } from "react";
import TabPage from "../tabs/TabPage";
import AnswerGroup from "./AnswerGroup";
import IndexTable from "./IndexTable";
import Question from "./Question";

interface QuizTestProps{
    readonly data: any;
}

export default function QuizTest({data}:QuizTestProps){
    const [index, setIndex] = useState(0);
    return (
        <TabPage>
            <div className="row">
                <div className="col-9">
                <Question question={data[index]} index={index}/>
                <AnswerGroup answers={data[index].answers}/>
                </div>
                <div className="col-3">
                    <IndexTable indexs={data} setIndex={(index: number)=>setIndex(index)}/>
                </div>
            </div>
        </TabPage>
    )
}