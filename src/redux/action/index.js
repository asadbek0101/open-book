export const addMessage = (message) => {
        return {
            type: "ADD_MESSAGE",
            payload: message
        }
}

export const deleteMessage = (id) => {
    return {
        type: "DELETE_MESSAGE",
        payload: id
    }
}

export const changeSideMenu = () => {
    return {
        type: "CHANGE_MENU",
    }
}

export const changeLanguage = ( lang ) => {
    return {
        type: "CHANGE_LANGUAGE",
        payload: lang
    }
}

export const changeCheckUser = ( user ) => {
    return {
        type: "CHECK_USER",
        payload: user
    }
}

export const loginOut = ( user ) => {
    return {
        type: "LOGIN_OUT",
        payload: user
    }
}

export const getProfile = ( user ) => {
    return {
        type: "GET_PROFILE",
        payload: user
    }
}