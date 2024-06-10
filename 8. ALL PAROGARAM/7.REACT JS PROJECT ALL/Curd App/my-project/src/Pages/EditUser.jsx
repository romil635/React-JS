import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { useNavigate ,useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { number } from 'yup';


const EditUser = () => {

      
 const  navigate = useNavigate()


 const {id} = useParams()

 const[user , setuser] = useState({
      firstname: '',
      lastname: '',
      age: '',
      profession: '',
      number: ''
 })

  const loaduserwithid = async() =>{
    const res = await axios.get(`http://localhost:3000/User/${id}`)
    setuser(res.data)
    // console.log(res);
  }
  
  useEffect(() =>{
   loaduserwithid();
  }, [])

   const onSubmitedituser = async(e) => {
    e.preventDefault(); 
    await axios.put(`http://localhost:3000/User/${id}`, user)
    navigate('/')
   } 
  

  // const formik = useFormik({
  //   initialValues: {
  //     firstname: '',
  //     lastname: '',
  //     profession: '',
  //     age: '',
  //     mobile: '',
  //   },
  //   validationSchema: Yup.object({
  //     firstname: Yup.string().required('First Name is required'),
  //     lastname: Yup.string().required('Last Name is required'),
  //     profession: Yup.string().required('Profession is required'),
  //     age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  //     mobile: Yup.string()
  //       .required('Mobile Number is required')
  //       .matches(/^[0-9]+$/, 'Mobile Number must be only digits')
  //       .min(10, 'Mobile Number must be at least 10 digits')
  //       .max(15, 'Mobile Number must be at most 15 digits'),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //     // Here you can handle form submission, e.g., sending data to an API
  //   },
  // });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={formik.handleSubmit}> */}
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onSubmitedituser}>
        <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            value={user.firstname}
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"     onChange={(e) => setuser({...user ,firstname: e.target.value})}
            />
            {/* {...formik.getFieldProps('firstname')} */}
          {/* {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
          ) : null} */}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            value={user.lastname}

            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"  onChange={(e) => setuser({...user , lastname:e.target.value})}

            />
             {/* {...formik.getFieldProps('lastname')} */}
          {/* {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
          ) : null} */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={user.age}

            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"  onChange={(e) => setuser({...user , age:e.target.value})}
            />
            {/* {...formik.getFieldProps('age')} */}
          {/* {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm">{formik.errors.age}</div>
          ) : null} */}
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            value={user.profession}

            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"  onChange={(e) => setuser({...user , profession:e.target.value})}

            />
          {/* {...formik.getFieldProps('profession')} */}
          {/* {formik.touched.profession && formik.errors.profession ? (
            <div className="text-red-500 text-sm">{formik.errors.profession}</div>
          ) : null} */}
        </div>
         
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            value={user.number}

            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"  onChange={(e) => setuser({...user , number:e.target.value})}
            />
             {/* {...formik.getFieldProps('mobile')} */}

          {/* {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null} */}
        </div>
        
        <div className='flex justify-between'>
          <Link to="/">
            <button
              className="inline-flex w-fit-content items-center justify-center rounded-md  bg-black text-white hover:bg-gray-300  hover:text-black px-6 py-2 font-semibold leading-6  ">
              <FaArrowLeft
              className="me-2"/> Go back
            </button>
          </Link>
          <button
            type="submit"
            className="inline-flex w-fit-content items-center justify-center rounded-md  bg-black text-white hover:bg-gray-300  hover:text-black px-6 py-2 font-semibold leading-6">
            Edit user<FaArrowRight 
              className="ml-2"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

