"use client";
import { useEffect, useRef } from "react";
import Head from "next/head";
import NavBar from "../../../../components/NavBar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ThumbnailPicker from "../../../../components/ThumbnailPicker";
import Category from "../../../../components/Category";
import * as Yup from 'yup';
import { useFormik } from "formik";


const CreateArticleSchema = Yup.object().shape({ 
   title: Yup.string().required('Title is required'),
   content: Yup.string().required('Content is required'),
   thumbnail: Yup.mixed().nullable().required('Thumbnail is required'),
   categoryId: Yup.number().nullable().required('Category is required'),
 });

export default function CreateArticlePage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const refContentInput = useRef<HTMLTextAreaElement>(null)

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      thumbnail: null,
      categoryId: null,
    },
    validationSchema: CreateArticleSchema,
    validateOnMount: true,
    onSubmit: () => {
      alert("Submitted !");
    },
  });

  const hasError = 
    !!formik.errors.title ||
    !!formik.errors.content ||
    !!formik.errors.thumbnail ||
    !!formik.errors.categoryId;

  const categories = [...Array(10)].map((_, index) => {
    return {
        id: index + 1,
        slug: "technology",
        name: "Technology",
      };
    });

  const handleContentInputGrow = () => {
    if (!refContentInput.current) return

    refContentInput.current.style.height = 'auto'

    refContentInput.current.style.height = refContentInput.current.scrollHeight + 'px';
  }


  useEffect(() => {
      document.title = `Create Article | Dliverd`;
    }, [keyword]);

  return (
    <div>
      <NavBar 
        hasSearchInput={false}
        hasSubmitButton={true}
        isSubmitDisabled={hasError}
        submitLabel="Publish"
        onClickSubmit={formik.handleSubmit} />
      <main className="p-8">
        
        <div className="w-[720px] mx-auto py-24">
          <input 
            className="font-sans font-bold text-5xl placeholder-slate-200 text-slate-900 w-full outline-none mb-12"
            placeholder="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <ThumbnailPicker onPick={(file) => formik.setFieldValue('thumbnail', file)} />
          <textarea 
            ref={refContentInput} 
            className="w-full outline-none mt-12 font-serif text-slate-900 placeholder-slate-400 resize-none"
            placeholder="Write an article here..."
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            onInput={handleContentInputGrow}
          />

          <div className="pt-12 mt-40 border-t border-slate-200">
            <p className="font-sans text-slate-900 text-sm mb-4">Choose a Category</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                  <Category 
                  key={category.id} 
                  label={category.name} 
                  isSelected={formik.values.categoryId === category.id}
                  onClick={() => formik.setFieldValue("categoryId", category.id)}
                  />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
