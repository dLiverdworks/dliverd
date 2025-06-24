'use client';
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from 'yup';


import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";

const SignInSchema = Yup.object().shape({ 
   email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Email format is invalid').required('Email is required'),
   password: Yup.string().required('Password is required'),
 });


const SignInForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: SignInSchema,
        onSubmit: () => {
            alert('Sign In successfully')
        },
    })

    return (
        <div className="w-[480px] mx-auto py-24">
            <h1 className="font-sans font-bold text-slate-900 text-5xl text-center mb-4">
                Sign In
            </h1>
            <p className="font-sans text-slate-900 text-center mb-16">
                Fill the form to sign in to your account.
            </p>

            <TextInput
                name="email"
                label="Email Address"
                type="text"
                placeholder="Enter your email address"
                value={formik.values.email}
                hasError={!!formik.errors.email}
                errorMessage={formik.errors.email}
                onChange={formik.handleChange}
            />
            <div className="h-4"/>
            <TextInput
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formik.values.password}
                hasError={!!formik.errors.password}
                errorMessage={formik.errors.password}
                onChange={formik.handleChange}
            />
            <div className="h-10"/>
    
            <Button size="large" isFullWidth onClick={() => formik.handleSubmit()}>
                Sign In
            </Button>

            <p className="text-slate-900 font-sans text-sm text-center mt-8">
                Don&lsquo;t have an account ?{" "}
                <Link href="/auth/sign-up"> 
                    <span className="text-blue-800">Sign up here</span>
                </Link>
            </p>
        </div>
    );
};

export default SignInForm;