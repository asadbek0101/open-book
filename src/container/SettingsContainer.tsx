import React, {useState, useCallback, useRef} from "react";
import TabPage from "../components/app/TabPage";
import { Lang } from "../api/AppDto";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/action";
import { uzbek } from "../lang/Uzbek";
import InputField from "../components/form/InputField";
import { Form, Formik } from "formik";
import {update} from "immupdate"
import { object, string } from "yup";

const valudationSchema = object({
    username: string().required("Required").min(4),
    password: string().required("Required").min(4),
})

export default function SettingsContainer(){


    const dispatch = useDispatch();

    const inqFormRef = useRef<any>(null)

    const lang = useSelector((state: any)=>state.handleLanguage);

    const [initialValues, setInitialValues] = useState({
            username: "",
            password: ""
    });

    const onChangeUserName = useCallback((value: any)=>{
            setInitialValues(prev=>update(prev, {
                username: value.target.value
            }))
    },[setInitialValues])

    const onChangePassword = useCallback((value: any)=>{
        setInitialValues(prev=>update(prev, {
            password: value.target.value
        }))
    },[setInitialValues])

    const inqFormRefHandler = useCallback((instance: any)=>{
        if(instance){
            inqFormRef.current = instance
        }
    },[inqFormRef])

    return (
        <TabPage>
            <Formik
                initialValues={initialValues}
                onSubmit={()=>console.log(initialValues)}
                validationSchema={valudationSchema}
                enableReinitialize={true}
                innerRef={inqFormRefHandler}
                >{()=>(
               <Form>
                 <InputField
                 label="Username"
                    name="username"
                    value={initialValues?.username}
                    onChange={(event: any)=>onChangeUserName(event)}
                    />
                     <InputField
                    name="password"
                    value={initialValues?.password}
                    onChange={(event: any)=>onChangePassword(event)}
                    />
                 <button type="submit">Send</button>
               </Form>
                )}
            </Formik>
        </TabPage>
    )
}