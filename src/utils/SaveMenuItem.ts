export function SaveMenuItem(type: string, string: string){
    const indexs = [], _char = '/';
    var i = -1, new_str = '';
    while((i = string.indexOf(_char, i + 1))>=0){
        indexs.push(i);
    }
    if(type === "active_app"){
        new_str = string.substring(indexs[0], indexs[1]);
    }

    return new_str;
}