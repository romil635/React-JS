import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}


const onSubmit = values => {
    console.log('form data', values);
}

// const validate = values => {
//     let error = {}
//     if (!values.firstname) {
//         error.firstname = 'Required'
//     }
//     if (!values.lastname) {
//         error.lastname = 'Required'
//     }
//     if (!values.email) {
//         error.email = 'Required'
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ){
//         error.email="Invalide email address"
//     }
//         if (!values.password) {
//             error.password = 'Required'
//         }

//         return error
// }

    const validationSchema = yup.object({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email('invalid addres').required("required"),
    password: yup.string().required("required"),
})

const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('formikdata', formik.values);
    console.log('form error', formik.errors);


    return (
        <div>
            <h1>Login page</h1>

            <div className='h-screen justify-center flex items-center bg-gray-400'>
                <form onSubmit={formik.handleSubmit} className=' bg-lime-100 p-4'>
                    <div className='mb-[15px]'>
                        <label> firstname</label><br /><br />
                        <input type="text" name='firstname' id='firstname' value={formik.values.firstname} onChange={formik.handleChange} />
                        {
                            formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null
                        }
                    </div>
                    <div className='mb-[15px]'>

                        <label>last name</label><br /><br />
                        <input type="text" name='lastname' id='lastname' value={formik.values.lastname} onChange={formik.handleChange} />
                        {
                            formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null
                        }
                    </div>
                    <div className='mb-[15px]'>

                        <label>email</label><br /><br />
                        <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} />
                        {
                            formik.errors.email ? <div>{formik.errors.email}</div> : null
                        }
                    </div>
                    <div className='mb-[15px]'>

                        <label>password</label><br /><br />
                        <input type="password" name='password' id='password' value={formik.values.password} onChange={formik.handleChange} />
                        {
                            formik.errors.password ? <div>{formik.errors.password}</div> : null
                        }
                    </div>
                    <button className='btn' type='submit'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Login
