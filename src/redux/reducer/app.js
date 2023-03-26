import { SideMenu } from "../../api/AppDto";

const sideMenu = window.localStorage.getItem("sideMenu")

const handleSideMenu = (state = sideMenu, action) => {
    switch(action.type){
        case "CHANGE_MENU":
            if(state === SideMenu.Closed){
                state = SideMenu.Opened
            }else{
                state = SideMenu.Closed
            }

            window.localStorage.setItem("sideMenu", state);

            return state;
        break;
        default: 
        return state;
    }
}
export default handleSideMenu 