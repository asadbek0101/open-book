import React from "react";
import Answer from "./Answer";
import "./assets/test.scss";

interface AnswerGroupProps{
    readonly answers: any;
}

export default function AnswerGroup({answers}:AnswerGroupProps){
    return (
        <div className="answers-group-container">
            {answers.map((item: any)=>{
                return (
                    <Answer item={item}/>
                )
            })}
        </div>
    )
}