import React, {useState, useEffect} from "react";

export default function Loading(){
    const [isHave, setIsHave] = useState(false);
    useEffect(()=>{
        setInterval(()=>{
            setIsHave(true)
        },30000)
    },[setIsHave])
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span className="fs-4 fw-bold">{isHave ? "No information found!": "Loading... "}</span>
        </div>
    )
}