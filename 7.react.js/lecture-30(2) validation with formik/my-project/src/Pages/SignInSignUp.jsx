import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Home from "./Home";
import Login from "./Login";

const SingInSingUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  const handleSignIn = (values, { setSubmitting }) => {
    if (values.email === localEmail && values.password === localPassword) {
      localStorage.setItem("signUp", values.email);
      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
    setSubmitting(false);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.name && values.email && values.password) {
      localStorage.setItem("name", values.name);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      localStorage.setItem("signUp", values.email);
      alert("Account Successfully Created");
      window.location.reload();
    }
    setSubmitting(false);
  };

  return (
    <div>
      {localSignUp ? (
        <Home />
      ) : showLogin ? (
        <Login handleSignIn={handleSignIn} />
      ) : (
        <div className="flex h-screen  bg-yellow-500 justify-center items-center">
          <div className=" bg-amber-100 p-12 border-4 border-solid border-white">
            <figcaption className="text-center font-bold text-xl">Sign Up</figcaption>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Required';
                }
                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mt-4 flex justify-center">
                    <Field type="text" name="name" placeholder="Name" className="p-2" />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Field type="email" name="email" placeholder="Email" className="p-2" />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Field type="password" name="password" placeholder="Password" className="p-2" />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-orange-400 w-full mt-4 py-2 hover:text-white font-bold hover:border-2 hover:border-solid hover:border-white"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
            <p className="mt-4 text-center cursor-pointer text-xl font-semibold text-indigo-700" onClick={() => setShowLogin(true)}></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingInSingUp;