import React, {useCallback, useState} from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import {object, string, number} from 'yup'

interface MyFormValues {
  firstName: string;
}

const validationScema = object({
    firstName: number().required("Required"),
})

    

export default function MyApp() {
  const [initialValues, setInitialValues] = React.useState({firstName: ""})

  const onSubmit = useCallback((value: any)=>console.log(value),[])
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={() => onSubmit(initialValues)}
        enableReinitialize={true}
        validationSchema={validationScema}
      >{()=>(
        <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="First Name" />
        <button type="submit">Submit</button>
      </Form>
  )}
      </Formik>
    </div>
  );
};