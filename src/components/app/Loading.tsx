import React from "react";
import "./assets/laoding.scss";

export default function Loading(){
    return (
        <div className="loading-container">
                <div className="center">
                    <div className="ring"></div>
                        <span>LOADING...</span>
                </div>
        </div>
    )
}