"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import NavBar from "../../../components/NavBar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PhotoPicker from "../../../components/PhotoPicker";
import TextInput from "../../../components/TextInput";
import * as Yup from 'yup';
import { useFormik } from "formik";



type FormValues = {
    fullname: string;
    photo: File | null;
}


const MyProfileSchema = Yup.object().shape({ 
   fullname: Yup.string()
       .min(8, "Full Name should have at least 8 characters")
       .max(30, "Full Name should have maximum 30 characters")
       .required("Full Name is required"),
 });

export default function MyProfilePage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const refContentInput = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    document.title = "My Profile | Dliverd";
  }, []);

  const initialValues: FormValues = {
      fullname: "",
      photo: null,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: MyProfileSchema,
    validateOnMount: true,
    onSubmit: () => {
      alert("Saved !");
    },
  });

  const user = {
      fullname: "John Doe",
      photo: "/images/dummy-avatar.png",
    };

  useEffect(() => {
    formik.setValues({
        fullname: user.fullname,
        photo: null,
    })
  }, []);



  return (
    <div>
      <NavBar 
        hasSearchInput={false}
        hasSubmitButton={true}
        isSubmitDisabled={!!formik.errors.fullname}
        submitLabel="Save"
        onClickSubmit={formik.handleSubmit} />
      <main className="p-8">
        
        <div className="w-[400px] flex flex-col items-center mx-auto py-24">
          
          <PhotoPicker
            preview={user.photo}
            onPick={(file) => formik.setFieldValue('photo', file)} />

          <div className="h-16" />

          <TextInput
            name="fullname"
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formik.values.fullname}
            hasError={!!formik.errors.fullname}
            errorMessage={formik.errors.fullname}
            onChange={formik.handleChange}
            />
        </div>
      </main>
    </div>
  );
};
