"use client";
import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../../../components/NavBar";
import Article from "../../../components/Article";
import Category from '../../../components/Category';
import { useSearchParams } from "next/navigation";
import Button from '../../../components/Button';
import Link from "next/link";





// export const metadata = {
//   title: "Results for {router.query.keyword}" | "Dliverd",
// };

// const router = useRouter();

const articles = [...Array(5)].map((_, index) => {
  return {
    id: index + 1,
    slug:"learning-python-easier",
    title: "Learning Python Easier",
    content: "Excepteur qui esse ad nulla ipsum proident labore velit incididunt cupidatat veniam velit labore incididunt. Irure esse duis dolore qui laboris tempor elit anim incididunt non adipisicing ipsum. Voluptate reprehenderit culpa enim proident officia ad esse fugiat ut reprehenderit pariatur nisi. Labore et nulla magna voluptate duis.",
    thumbnail: '/images/dummy-article-thumbnail.png',
    category: "Technology",
    date: "2025-06-24 17:47:00",
    author: {
      name: "John Doe",
      photo: '/images/dummy-avatar.png',
    },
  };
});

export default function MyArticlesPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
      document.title = `My Articles | Dliverd`;
    }, [keyword]);

  return (
    <div>
      <NavBar hasSearchInput={false} />
      <main className="p-8">
        
        <div className="w-[720px] mx-auto py-24">
          <div className="mb-16 flex items-center justify-between">
            <p className="font-sans font-bold text-slate-900 text-5xl">My Articles</p>
          <Link href="/my-articles/create">
            <Button type="button" size="large">Write an Article</Button>
          </Link>
          </div>

          {articles.map((article) => (
          <Article 
            key={article.id}
            url={`/articles/${article.slug}`}
            title={article.title}
            content={article.content}
            thumbnail={article.thumbnail}
            category={article.category}
            date={article.date}
            author={article.author}
            hasOptions
          />
          ))}
        </div>
      </main>
      </div>
  );
}
