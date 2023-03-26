export enum RouterLink{
    Schools = '/schools',
    Teachers = '/teachers',
    Students = '/students',
    Lessons = '/lessons/id',
    Books = '/books',
    Articles = '/articles',
    Settings = '/settings',
    TestS = '/tests',
    Glassorys = '/glassorys',
    Informations = '/informations',
    News = '/news'
}

export enum SideMenu{
    Opened = 'open',
    Closed = 'close'
}

export enum Login{
    Found = 'success',
    NotFound = 'not found'
}

export enum Lang {
    Uzbek = 'uzb',
    Russian = 'rus',
    English = 'eng'
}

export interface User {
    readonly username: string;
    readonly password: string; 
}

export interface i18Schome {
    readonly SHCOOLS : string;
    readonly LESSONS: string;
    readonly STUDENTS: string;
    readonly TEACHERS: string;
    readonly BOOKS: string;
    readonly SETTINGS: string;
    readonly ARTICLES: string;
    readonly TESTS: string;
    readonly GLASSORYS: string;
    readonly INFORMATIONS: string;
    readonly NEWS: string;
}