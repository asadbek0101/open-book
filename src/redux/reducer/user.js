import { Login } from "../../api/AppDto";

const defaultUser = [
{
    name: "Asadbek",
    email: "asadbekrejabboyev0101@gmail.com",
    username: "asadbek0101",
    password: "Asadbek01",
    _rolw: "superadmin",
},
{
    name: "Eshmatvoy",
    email: "eshmatvoy@gmail.com",
    username: "eshmat0101",
    password: "Eshmat01",
    _rolw: "teacher",
}

]

const userType = window.localStorage.getItem("USER");

const user = userType ? userType : Login.NotFound;

const handleUser = (state = user, action) => {
    const user = action.payload;
    switch(action.type){
        case "CHECK_USER": 
        let isUser = defaultUser.filter((item)=>item.username === user.username && item.password === user.password)
        
        if(isUser.length>0){
            state = Login.Found
            window.localStorage.setItem("NOW_USER", JSON.stringify(isUser[0]))
        }else {
            state = Login.NotFound
        }

        window.localStorage.setItem("USER", state);

        return state;

        case "LOGIN_OUT": state = Login.NotFound;

        window.localStorage.setItem("USER", state)
        return state;
        break;
        default: 
        return state;
    }
}
export default handleUser 