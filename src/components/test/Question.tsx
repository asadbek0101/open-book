import React from "react";
import "./assets/test.scss";

interface QuestionProps{
    readonly question: any;
    readonly index: number;
}

export default function Question({question, index}:QuestionProps){
    return (
        <div className="question-container">
            <span className="question-title"><span className="fw-bold">{index+1}.</span> {question.question}</span>
        </div>
    )
}