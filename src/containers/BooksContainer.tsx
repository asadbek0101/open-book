import React, {useCallback, useEffect} from "react";
import BooksMenu from "../components/book/BooksMenu";
import BooksTab from "../components/book/BooksTab";
import ContainerLayout from "../components/app/ContainerLayout";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesType } from "../api/AppDto";

export enum BookPageType{
    BookTab = 'book-tab',
    BookMenu = 'book-menu'
}


export interface BooksData{
    readonly name: string;
    readonly status: string;
    readonly price: string | number;
}

export default function BooksContainer(){
    const navigate = useNavigate();
    const { tab = BookPageType.BookMenu } = useParams();
    

    const selectMenu = useCallback((value: any)=>{
        navigate(`${RoutesType.BooksContainer}/${BookPageType.BookTab}`)
    },[navigate])


    const data = [
        {
            name: 'Matematika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Fizika',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Kimyo',
            status: 'active',
            price: 'free',
            starStatus: 3
        },
        {
            name: 'Geografiya',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 3
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 2
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
        {
            name: 'Informatika',
            status: 'active',
            price: 'free',
            starStatus: 1
        },
    ]


    return (
        <ContainerLayout>
            {tab === BookPageType.BookMenu && (
             <BooksMenu data={data} selectMenu={(menu: any)=>selectMenu(menu)}/>
            )}
            {tab === BookPageType.BookTab && (
             <BooksTab/>
            )}
        </ContainerLayout>
    )
}