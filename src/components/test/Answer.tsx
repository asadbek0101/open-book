import React from "react";
import "./assets/test.scss";

interface AnswerProps{
    readonly item: any;
}

export default function Answer({item}:AnswerProps){
    return (
        <div className={`answer-container my-2 ps-3 ${item.isChanged? 'active-answer-container': ''}`} onClick={()=>item.isChanged = !item.isChanged}>
            <span className="answer-title"><span className="fw-bold"></span> {item.title}</span>
        </div>
    )
}