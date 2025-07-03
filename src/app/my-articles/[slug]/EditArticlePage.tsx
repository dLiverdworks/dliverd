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

export const metadata = {
  title: "Edit Article | Dliverd",
};

type FormValues = {
    title: string;
    content: string;
    thumbnail: File | null;
    categoryId: number | null;
}


const EditArticleSchema = Yup.object().shape({ 
   title: Yup.string().required('Title is required'),
   content: Yup.string().required('Content is required'),
   categoryId: Yup.number().nullable().required('Category is required'),
 });

export default function EditArticlePage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const refContentInput = useRef<HTMLTextAreaElement>(null)

  const initialValues: FormValues = {
      title: "",
      content: "",
      thumbnail: null,
      categoryId: null,
  };;



  const formik = useFormik({
    initialValues,
    validationSchema: EditArticleSchema,
    validateOnMount: true,
    onSubmit: () => {
      alert("Submitted !");
    },
  });

  const article = {
      id: 1,
      slug:"learning-python-easier",
      title: "Learning Python Easier",
      content: `Lorem ipsum dolor sit amet consectetur. Pharetra nunc semper quis ac. Dui quam suspendisse enim vehicula vestibulum ut. A aenean vitae fames ultrices non. Risus tempor vitae pharetra ac id ullamcorper amet interdum egestas. Nisl auctor ultricies sem sem mi bibendum sit. Purus eu eros eu malesuada a. Lacinia dui elementum integer sapien auctor urna ut aenean lorem. Dictum odio maecenas aliquam augue montes quis adipiscing. Elementum elementum eu odio nisi. Tristique quis tincidunt feugiat nunc eleifend. Lacinia blandit turpis mauris tellus vel senectus elementum nec.\n\nFaucibus dictum arcu augue vestibulum nisl sagittis sagittis lectus adipiscing. Facilisis in eget scelerisque leo risus convallis id egestas. Nec posuere massa ac id accumsan quam interdum.
                  Dignissim in semper nulla mauris enim augue sollicitudin sit. Sit fermentum ipsum faucibus risus eu odio tempor ac. Vestibulum in in massa sed ut diam in. Nunc natoque urna turpis leo tortor. Nunc massa diam volutpat sit vel lacinia. Amet sed volutpat aliquet nec sit arcu. Sit orci amet mollis dui turpis vel scelerisque donec auctor.\n\nVitae massa vitae lorem lobortis nec auctor nunc diam at. Lorem consectetur malesuada adipiscing porta cursus purus. Diam vestibulum gravida sed imperdiet sit gravida turpis integer. Tempor purus nunc sit tristique eu massa sagittis consequat eget.
                  Ut adipiscing in tristique dolor urna. Felis id in ultrices risus dolor velit vestibulum. Tellus eleifend consequat id tellus. Ornare duis scelerisque fringilla tempus volutpat. Mus gravida mollis mi amet arcu enim dui.\n\nAenean morbi pretium a massa elementum pellentesque. Arcu est bibendum id sit. Vitae quis molestie arcu eget arcu nunc eget a. Magna imperdiet pellentesque molestie elementum nisl pulvinar. Nulla cras orci sit eu habitant diam aenean vel vitae. Ac in arcu elit libero mauris molestie nisl pharetra et. Justo diam semper enim ipsum facilisi faucibus pulvinar ligula eget. Pellentesque amet sagittis diam nulla aliquam ipsum ullamcorper venenatis. Lectus sit aliquam sit phasellus vitae sit. Libero diam neque dolor id amet convallis varius in.
                  Massa semper tristique facilisi elementum in.`,
      thumbnail: '/images/dummy-article-thumbnail.png',
      category: {
        id: 1,
        name: 'Technology',
      },
      date: "2025-06-24 17:47:00",
      author: {
        name: "John Doe",
        photo: '/images/dummy-avatar.png',
      },
    };

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
  };

  useEffect(() => {
    formik.setValues({
        title: article.title,
        content: article.content,
        thumbnail: null,
        categoryId: article.category.id,
    })

    setTimeout(() => {
        handleContentInputGrow()
    }, 200)
  }, []);



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
          <ThumbnailPicker
            preview={article.thumbnail} 
            onPick={(file) => formik.setFieldValue('thumbnail', file)} />
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
