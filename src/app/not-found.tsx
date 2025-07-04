import NavBar from "../../components/NavBar";
import Article from "../../components/Article";
import Category from './../../components/Category';
import Button from './../../components/Button';
import Link from "next/link";

export const metadata = {
  title: "404 | Dliverd",
};

const categories = [...Array(10)].map((_, index) => {
  return {
    id: index + 1,
    slug: "technology",
    name: "Technology",
  };
});

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

export default function NotFoundPage() {

  return (
    <div>
      <NavBar hasSearchInput={false} />
      <main className="p-8">
        
        <div style={{ height: "calc(100vh - 4 rem)" }} className="w-[720px] flex flex-col items-center justify-center mx-auto py-24">
          <h1 className="text-8xl text-slate-900 font-sans text-center font-bold mb-6">404</h1>
          <p className="font-sans text-slate-900 text-center mb-14">There&lsquo;s no content here.</p>
          <Link href="/">
            <Button type="button" size="large">Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
