import React from "react";
import AppCountDownTimer from "../app/AppCountDownTimer";
import "./assets/test.scss";

interface IndexTableProps{
    readonly indexs: any;
    readonly setIndex: (index: number) => void;
}

export default function IndexTable({indexs, setIndex}:IndexTableProps){

    const Check = (index: number) => {
        let array = indexs[index].answers.filter((item: any)=>item.isChanged)
        if(array[0]){
            return true;
        }
        else return false;
    }


    return (
       <>
           <AppCountDownTimer seconds={3660} theEnd={()=>alert("THE END!!")}/>
        <div className="index-table-container">  
            {indexs.map((item: any, index: number)=>{
                return (
                    <div key={index} className={`index-table-item m-1 ${Check(index)? 'active-index-item' : ''}`} onClick={()=>setIndex(index)}>
                         {index +1}
                     </div>
                )
            })}
        </div>
       </>
    )
}