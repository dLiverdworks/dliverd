import NavBar from "../../components/NavBar";
import Article from "../../components/Article";
import Category from './../../components/Category';

export const metadata = {
  title: "Dliverd",
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

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center">Welcome to Dliverd</h1>
        
        <div className="w-[720px] mx-auto py-24">
          <div className="mb-16">
            <p className="font-sans text-slate-900 text-sm mb-4">Your Categories</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Category key={category.id} label={category.name} />
              ))}
            </div>
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
          />
          ))}
        </div>
      </main>
      </div>
  );
}
