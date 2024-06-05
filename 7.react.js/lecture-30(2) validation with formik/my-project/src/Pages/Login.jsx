// Login.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = ({ handleSignIn }) => {
  return (
    <div>
      <div className="bg-blue-600 p-12 border-4 border-solid border-white">
        <figcaption className="text-center font-bold text-xl">Sign In</figcaption>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSignIn}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-4 flex justify-center">
                <Field type="email" name="email" placeholder="Email" className="p-2" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="mt-4 flex justify-center">
                <Field type="password" name="password" placeholder="Password" className="p-2" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div className="mt-4 flex justify-center">
                <button type="submit" disabled={isSubmitting} className="bg-blue-400 w-48 mt-4 py-2 flex justify-center hover:text-white font-bold hover:border-2 hover:border-solid hover:border-white">
                    Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;