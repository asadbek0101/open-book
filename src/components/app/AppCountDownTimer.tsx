import React, {useState, useRef, useEffect} from "react";

interface AppCountDownTimerProps{
    readonly seconds: any;
    readonly theEnd: ()=>void;
}

const formatTime = (time: any) => {
    let hr:any = Math.floor(time/3600);
    let min:any = Math.floor(time/60);
    let second:any = Math.floor(time - min * 60);
    if(min >= 60){
        min = min - 60;
    }
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(second < 10) second = '0' + second;
    return  hr + ':' + min + ':' + second;
}

export default function AppCountDownTimer({seconds, theEnd}:AppCountDownTimerProps){
    const [countDown, setCountDown] = useState(seconds);
    const timerId = useRef<any>();

    useEffect(()=>{ 
        timerId.current = setInterval(()=>{
            setCountDown((prev: any) => prev -1)
        },1000)
        return ()=> clearInterval(timerId.current)
    },[setCountDown, timerId])

    useEffect(()=>{
        if(countDown<0){
            clearInterval(timerId.current);
            theEnd();
        }
    },[countDown])

    return (
            <div>{formatTime(countDown)}</div>
    )
}