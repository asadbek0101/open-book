import handleMessage from "./handleMessage";
import  handleSideMenu from "./app";
import { handleLanguage } from "./language";
import handleUser from "./user";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    handleMessage,
    handleSideMenu,
    handleLanguage,
    handleUser
})

export default rootReducers;