import { Lang } from "../../api/AppDto";

const localLang = window.localStorage.getItem("Lang");

const lang = localLang? localLang : Lang.English;

const handleLanguage = (state = lang, action) => {
    switch(action.type){
        case "CHANGE_LANGUAGE": 
        
        state = action.payload;

        window.localStorage.setItem("Lang", state);
        
        return state;
        break;
        default: 
        return state;
    }
}
export  { handleLanguage } 