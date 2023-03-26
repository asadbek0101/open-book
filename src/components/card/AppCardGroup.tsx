import React from "react";
import CartIcon from "../icons/CartIcon";
import DownloadIcon from "../icons/DownloadIcon";
import FullStarIcon from "../icons/FullStarIcon";
import HeartIcon from "../icons/HeartIcon";
import StarIcon from "../icons/StarIcon";
import "./assets/card.scss";

const TestImage = require("../../images/Online_Test.jpg");
const GlassoryImage = require("../../images/Glassory_Image.jpg");
const LessonImage = require("../../images/Lesson_Image.png");
const ArticleImage = require("../../images/Article_Image.png");
const InfoImage = require("../../images/Information_Image.jpg");
const NewsImage = require("../../images/News_Image.png");



interface CardGroupProps{
    readonly data: Array<any>;
    readonly cardType: string;
    readonly selectMenu: (value: any) => void;
}

export default function AppCardGroup({data, selectMenu, cardType}:CardGroupProps){

    const BgImage: any = {
        test : TestImage,
        lesson : LessonImage,
        article : ArticleImage,
        glassory : GlassoryImage,
        info: InfoImage,
        news: NewsImage,
    }

    let arr = new Array(3).fill("").map((_, i) => i + 1);

    return (
        <div className="row card-group">
            {data.map((item: any)=>{
                return(
                    <div className="col-3 my-2" onClick={()=>selectMenu(item)}>
                    <div className="custom-card">
                        <div className="card-img" style={{backgroundImage: `url(${(BgImage[cardType])})`}}>
                        </div>
                        <div className="d-flex justify-content-between align-item-start py-1 flex-column">
                            <span className={`fw-bold ${'bottom-border'} py-1`}>{item.title}</span>
                            {cardType === "test" && ( <div className="use-time d-flex justify-content-between">
                            <span>{item.startDate}</span>
                            <span className="fs-7">{item.startTIme}</span>
                            </div> )}
                        </div>
                   { cardType !== 'test' && (
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
                   )}
                    </div>
              </div>
                )
            })}
        </div>
    )
}