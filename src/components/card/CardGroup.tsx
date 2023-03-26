import React from "react";
import "./assets/card.scss";
import CartIcon from "../icons/CartIcon";
import DownloadIcon from "../icons/DownloadIcon";
import StarIcon from "../icons/StarIcon";
import HeartIcon from "../icons/HeartIcon";
import FullStarIcon from "../icons/FullStarIcon";

const CardImage = require("../../images/Card_Image3.png")

interface CardGroupProps{
    readonly data: Array<any>;
    readonly setUser: (value: any) => void;
}

export default function CardGroup({data, setUser}:CardGroupProps){

    let arr = new Array(3).fill("").map((_, i) => i + 1);

    return (
        <div className="row card-group">
            {data.map((item: any)=>{
                return(
                    <div className="col-3 my-2" onClick={()=>setUser(item)}>
                    <div className="custom-card">
                        <div className="card-img" style={{backgroundImage: `url(${(CardImage)})`}}>
                        </div>
                        <div className="card-title d-flex justify-content-between align-items-center py-1">
                            <span className="fw-bold">{item.name}</span>
                            <span>20 000 so'm</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-between py-2 gap-2">
                            <CartIcon/>
                            <HeartIcon/>
                            <DownloadIcon/>
                            </div>
                            <div className="d-flex gap-1 card-footer">
                                {arr.map((index: number)=>{
                                    if(item.starStatus >= index){
                                      return  <FullStarIcon key={index}/>
                                    }else{
                                      return  <StarIcon key={index}/>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
              </div>
                )
            })}
        </div>
    )
}