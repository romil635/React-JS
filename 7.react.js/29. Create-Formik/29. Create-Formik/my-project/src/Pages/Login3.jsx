import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}

const onSubmit = values => {
    console.log('for Data' , values);
}

// const validate = values => {
//     let error = {}
//         if(!values.firstname){
//             error.firstname = 'First Name is Required'
//         }

//         if(!values.lastname){
//             error.lastname = 'Last Name is Required'
//         }

//         if(!values.email){
//             error.email = 'Email is Required'
//         }else if(
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//             error.email = 'Invalid email address';
//           }

//         if(!values.password){
//             error.password = 'Password  is Required'
//         }
//         return error
//}

const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is Required'),
    lastname: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().required('Password  is Required')
})

const Login3 = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('formik data' , formik.values);
    console.log('form error' , formik.errors);
    console.log('form blur' , formik.touched);

  return (
    <div>
        <h1 className='text-3xl text-center font-bold'>Login Page 3</h1>
        <div className='h-screen flex justify-center items-center bg-red-400'>
            <form onSubmit={formik.handleSubmit} className='bg-red-300 p-4'>
                <div>
                    <label htmlFor='firstname'>FirstName</label><br />
                    <input type="text" name='firstname' id='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /><br />
                    {
                        formik.touched.firstname && formik.errors.firstname ? <div className='text-red-600'>{formik.errors.firstname}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='lastname'>LastName</label><br />
                    <input type="text" name='lastname' id='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /><br />
                    {
                        formik.touched.lastname && formik.errors.lastname ? <div className='text-red-600'>{formik.errors.lastname}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='email'>Email</label><br />
                    <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /><br />
                    {
                        formik.touched.email && formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null
                    }
                </div>
                <div>
                    <label htmlFor='password'>Password</label><br />
                    <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/><br /><br />
                    {
                        formik.touched.password && formik.errors.password ? <div className='text-red-600'>{formik.errors.password}</div> : null
                    }
                </div>

                <button type='submit' className='bg-red-400 p-3 border-2 border-black text-white font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login3
