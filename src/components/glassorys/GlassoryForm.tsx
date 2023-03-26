import React, {useCallback, useRef} from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import InputField from "../form/InputField";
import GroupBox from "../app/GroupBox";
import Button from "../button/Button";
import { update } from "immupdate";

const validationSchema = object({
    glassoryName: string().required('Required'),
    lesson: string().required('Required'),
})

interface GlassoryFormProps{
    readonly initialiValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly onsubmit: (value: any) => void;
}

export default function GlassoryForm({onsubmit, initialiValues, setInitialValues}:GlassoryFormProps){
    const inqFormRef = useRef<any>(null);

    const onChangeGlassoryName = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            glassoryName: value.target.value
        }))
    },[setInitialValues])

    const onChangeLesson = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            lesson: value.target.value
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
        initialValues={initialiValues}
        onSubmit={onsubmit}
        enableReinitialize={true}
        innerRef={inqFormRefHandler}
        >
        {()=>(
            <Form>
                <div className="row">
                    <div className="col-6">
                        <GroupBox>
                        <InputField
                            label="Glassory Name"
                            name="glassoryName"
                            value={initialiValues?.glassoryName}
                            onChange={(event: any)=>onChangeGlassoryName(event)}
                            />
                        <InputField 
                            label="Lesson"
                            name="lesson"
                            value={initialiValues?.lesson}
                            onChange={(event: any)=>onChangeLesson(event)}
                            />
                        </GroupBox>
                    </div>
                    <div className="col-12 mt-3">
                        <Button type="submit">  
                            Send
                        </Button>
                    </div>
                </div>
            </Form>
        )}
    </Formik>)
}