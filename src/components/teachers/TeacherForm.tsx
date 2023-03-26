import { Form, Formik } from "formik";
import { update } from "immupdate";
import React, { useCallback, useRef } from "react";
import { object, string } from "yup";
import GroupBox from "../app/GroupBox";
import TabPage from "../app/TabPage";
import Button from "../button/Button";
import InputField from "../form/InputField";

interface TeacherFormProps{
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly onSubmit: (value: any) => void;
}

const validationSchema = object({
    teacherNumber: string(),
    fullName: string().required("Required!"),
    country: string().required("Required!"),
    job: string().required("Required!"),
    salary: string().required("Required!"),
    login: string().required("Required!"),
    password: string().required("Required!"),
    language: string(),
    workPlace: string(),
    position: string(),
})

export default function TeacherForm({initialValues, setInitialValues, onSubmit}:TeacherFormProps){
    const inqFormRef = useRef<any>(null);

    const onChangeFullName = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            fullName: value.target.value
        }))
    },[setInitialValues])

    const onChangeCountry = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            country: value.target.value
        }))
    },[setInitialValues])

    const onChangeJob = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            job: value.target.value
        }))
    },[setInitialValues])

    const onChangeSalary = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            salary: value.target.value
        }))
    },[setInitialValues])

    const onChangeLogin = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            login: value.target.value
        }))
    },[setInitialValues])

    const onChangePassword = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            password: value.target.value
        }))
    },[setInitialValues])

    const inqFormRefHandler = useCallback((instance: any)=>{
        if(instance){
            inqFormRef.current = instance
        }
    },[inqFormRef])


    return (
        <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
            enableReinitialize={true}
            innerRef={inqFormRefHandler}
            >
            {()=>(
                <Form>
                <div className="row">
                <div className="col-6">
                <GroupBox
                    title="Teacher Info"
                    >
                  <InputField 
                        name="fullName"
                        label="Fullname"
                        value={initialValues?.fullName}
                        onChange={(value: any)=>onChangeFullName(value)}
                        />
                    <InputField 
                        name="country"
                        label="Country"
                        value={initialValues?.country}
                        onChange={(value: any)=>onChangeCountry(value)}
                        />
                    <InputField 
                        name="job"
                        label="Job"
                        value={initialValues?.job}
                        onChange={(value: any)=>onChangeJob(value)}
                        />
                     <InputField 
                        name="salary"
                        label="Salary"
                        value={initialValues?.salary}
                        onChange={(value: any)=>onChangeSalary(value)}
                        />
                    
                 </GroupBox>
                </div>
                <div className="col-6">
                    <GroupBox
                        title="Login"
                        >
                    <InputField 
                        name="login"
                        label="Login"
                        value={initialValues?.login}
                        onChange={(value: any)=>onChangeLogin(value)}
                        />
                    <InputField 
                        name="password"
                        label="Password"
                        value={initialValues?.password}
                        onChange={(value: any)=>onChangePassword(value)}
                        />
                    </GroupBox>
                </div>
                <div className="col-12 text-right mt-3">
                    <Button type="submit">
                         Send
                    </Button>
                    </div>
                   </div>
                        
                </Form>   
            )}
        </Formik>
    )
}