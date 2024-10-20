import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

function Login({ handleClose, handleForgotPassword }) {
    const handleSubmit = (values) => {
        console.log('Form submitted with:', values);
        handleClose();
        // Handle form submission (e.g., send to API)
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
                <button
                    className="mr-4 absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={handleClose}
                    >
                    X
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                                <Field 
                                    type="email" 
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1"/>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <ErrorMessage 
                                    name="password"
                                    component="div"
                                    className="text-red-600 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                            <span onClick={handleForgotPassword} className="flex justify-center hover:underline hover:text-blue-400 cursor-pointer">Forgot your password</span>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login