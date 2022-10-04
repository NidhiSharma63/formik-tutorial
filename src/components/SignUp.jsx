import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

  
const validateSchema = Yup.object().shape({
  firstName:Yup.string().required('Name is required').min(2,'Name should contained 2 or more characters'),
  lastName:Yup.string().required('Last name is required').min(2,'Last name should contained 2 or more characters'),
  email:Yup.string().email('Invalid format').required('Email is required'),
  password:Yup.string().required('Password is required').min(8,'Password length should be more then or equal to 8'),
});

const SignUp = () => {

  const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
  }

  const handleSubmit= values=>{
    console.log(values)
  }
   

  return (
    <Formik 
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validateSchema}>
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field 
          type="text" 
          name='firstName'
          />
        <ErrorMessage name='firstName'/>

        <label htmlFor="lastName">Last Name</label>
        <Field 
          type="text" 
          name='lastName'
        />
        <ErrorMessage name='lastName'/>

        <label htmlFor="email">Email</label>
        <Field 
          type="email" 
          name='email'
        />
        <ErrorMessage name='email'/>
          
        <label htmlFor="password">Password</label>

        <Field 
          type="password" 
          name='password'
        />
        <ErrorMessage name='password'/>
          
        <button type='submit'>submit</button>
      </Form>
    </Formik>
  )
}

export default SignUp