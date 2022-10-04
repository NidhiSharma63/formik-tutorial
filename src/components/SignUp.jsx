import React from 'react';
import { Formik, Form } from 'formik';
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

        <input 
          type="text" 
          name='firstName'
          {...formik.getFieldProps("firstName")}
          />

        {formik.touched.firstName && formik.errors.firstName && <div className='error'>{formik.errors.firstName}</div>}

        <label htmlFor="lastName">Last Name</label>

        <input 
          type="text" 
          name='lastName'
          {...formik.getFieldProps("lastName")}
        />

        {formik.touched.lastName && formik.errors.lastName && <div className='error'>{formik.errors.lastName}</div>}

        <label htmlFor="email">Email</label>

        <input 
          type="email" 
          name='email'
          {...formik.getFieldProps("lastName")}
        />

        {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
          
        <label htmlFor="password">Password</label>

        <input 
          type="password" 
          name='password'
          {...formik.getFieldProps("password")}
        />

        {formik.touched.password && formik.errors.password && <div className='error'>{formik.errors.password}</div>}
          
        <button type='submit'>submit</button>
      </Form>
    </Formik>
  )
}

export default SignUp