import "./assets/create-lesson.scss"
import React, {useCallback, useState} from "react";
import JoditReact from "jodit-react-ts";
import "jodit/build/jodit.min.css";
import Button from "../button/Button";

interface Props{
    readonly placeholder: string;
}

export default function CreateLesson(){

    const [value, setValue] = useState("");
    const [showEditor, setShowEditor] = useState(false);
    const config = {
        height: '480px',
        resizeBy: 'none'
      };
    const onChangeRender = useCallback(()=>{
        if(value){
            setShowEditor(!showEditor);
        }else{
            alert("Hali ko'radigan narsa yo")
        }
    },[value, showEditor, setShowEditor])
    return (
        <div className="create-lesson-container">
            <div className="create-header">
            </div>
            { !showEditor? (
                <div className="w-100 h-100">
                <JoditReact onChange={(content) => setValue(content)} defaultValue={value} config={config}/>
                </div>
            ):(
                <div dangerouslySetInnerHTML={{ __html: value }}></div>
            )}
           <div className="d-flex justify-content-end align-items-center mt-3">
           <Button onClick={()=>onChangeRender()}>
               { !showEditor? "Save":"Edit"}
            </Button>
           </div>
        </div>
    )
}