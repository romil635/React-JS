import React from 'react'
// import { useFormik } from 'formik'
import * as yup from 'yup'
import { Formik, Form , Field ,ErrorMessage } from 'formik'
const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}


const onSubmit = values => {
    console.log('form data', values);
}

    const validationSchema = yup.object({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email('invalid addres').required("required"),
    password: yup.string().required("required"),
})

const Login = () => {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // }) 

    // console.log('formikdata', formik.values);
    // console.log('form error', formik.errors);
    // console.log('form blur', formik.touched);


    return (
        <div>
            <h1>Login page</h1>

            <div className='h-screen justify-center flex items-center bg-gray-400'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                
                <Form  className=' bg-lime-100 p-4'>
                    <div className='mb-[15px]'>
                        <label> firstname</label><br /><br />
                        <Field type="text" name='firstname' id='firstname' />
                        <ErrorMessage name='firstname'></ErrorMessage>
                    </div>
                    <div className='mb-[15px]'>

                        <label>last name</label><br /><br />
                        <Field type="text" name='lastname' id='lastname' />
                        <ErrorMessage name='lastname'></ErrorMessage>
                    </div>
                    <div className='mb-[15px]'>

                        <label>email</label><br /><br />
                        <Field type="email" name='email' id='email'  />
                        <ErrorMessage name='email'></ErrorMessage>
                    </div>
                    <div className='mb-[15px]'>

                        <label>password</label><br /><br />
                        <Field type="password" name='password' id='password' />
                        <ErrorMessage name='password'></ErrorMessage>
                    </div>
                    <button className='btn' type='submit'>Submit</button> 
                </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login
