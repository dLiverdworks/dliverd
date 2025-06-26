"use client";
import { useEffect } from "react";
import NavBar from "../../../../components/NavBar";
import { useSearchParams } from "next/navigation";
import { parseISO, format } from "date-fns";



// export const metadata = {
//   title: "Results for {router.query.keyword}" | "Dliverd",
// };

// const router = useRouter();


export default function ArticleDetailPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const article = {
    id: 1,
    slug:"learning-python-easier",
    title: "Learning Python Easier",
    content: `Lorem ipsum dolor sit amet consectetur. Pharetra nunc semper quis ac. Dui quam suspendisse enim vehicula vestibulum ut. A aenean vitae fames ultrices non. Risus tempor vitae pharetra ac id ullamcorper amet interdum egestas. Nisl auctor ultricies sem sem mi bibendum sit. Purus eu eros eu malesuada a. Lacinia dui elementum integer sapien auctor urna ut aenean lorem. Dictum odio maecenas aliquam augue montes quis adipiscing. Elementum elementum eu odio nisi. Tristique quis tincidunt feugiat nunc eleifend. Lacinia blandit turpis mauris tellus vel senectus elementum nec.\n\nFaucibus dictum arcu augue vestibulum nisl sagittis sagittis lectus adipiscing. Facilisis in eget scelerisque leo risus convallis id egestas. Nec posuere massa ac id accumsan quam interdum.
                Dignissim in semper nulla mauris enim augue sollicitudin sit. Sit fermentum ipsum faucibus risus eu odio tempor ac. Vestibulum in in massa sed ut diam in. Nunc natoque urna turpis leo tortor. Nunc massa diam volutpat sit vel lacinia. Amet sed volutpat aliquet nec sit arcu. Sit orci amet mollis dui turpis vel scelerisque donec auctor.\n\nVitae massa vitae lorem lobortis nec auctor nunc diam at. Lorem consectetur malesuada adipiscing porta cursus purus. Diam vestibulum gravida sed imperdiet sit gravida turpis integer. Tempor purus nunc sit tristique eu massa sagittis consequat eget.
                Ut adipiscing in tristique dolor urna. Felis id in ultrices risus dolor velit vestibulum. Tellus eleifend consequat id tellus. Ornare duis scelerisque fringilla tempus volutpat. Mus gravida mollis mi amet arcu enim dui.\n\nAenean morbi pretium a massa elementum pellentesque. Arcu est bibendum id sit. Vitae quis molestie arcu eget arcu nunc eget a. Magna imperdiet pellentesque molestie elementum nisl pulvinar. Nulla cras orci sit eu habitant diam aenean vel vitae. Ac in arcu elit libero mauris molestie nisl pharetra et. Justo diam semper enim ipsum facilisi faucibus pulvinar ligula eget. Pellentesque amet sagittis diam nulla aliquam ipsum ullamcorper venenatis. Lectus sit aliquam sit phasellus vitae sit. Libero diam neque dolor id amet convallis varius in.
                Massa semper tristique facilisi elementum in.`,
    thumbnail: '/images/dummy-article-thumbnail.png',
    category: "Technology",
    date: "2025-06-24 17:47:00",
    author: {
      name: "John Doe",
      photo: '/images/dummy-avatar.png',
    },
  };

  useEffect(() => {
      document.title = `{article.title} | Dliverd`;
    }, [keyword]);

  const formattedDate = format(parseISO(article.date), "MMM dd");

  return (
    <div>
      <NavBar />
      <main className="p-8">
        
        <div className="w-[720px] mx-auto py-24">
            <div className="flex items-center mb-8">
                <img 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                    src={article.author.photo} 
                    alt={article.author.name}
                />
                <div>
                    <p className="text-sm font-sans text-slate-900 mb-1">{article.author.name}</p>
                    <p className="text-sm font-sans text-slate-400">{formattedDate}</p>
                </div>
            </div>
            
            <h1 className="font-bold font-sans text-slate-900 text-5xl mb-4">{article.title}</h1>
            <div className="px-3 bg-slate-200 rounded-full w-fit h-6 flex items-center mb-12">
                <p className="text-slate-900 font-sans text-xs">{article.category}</p>
            </div>

            <img 
                className="w-full aspect-video object-cover mb-12" 
                src={article.thumbnail} 
                alt={article.title} 
            />

            <p className="font-serif text-slate-900 whitespace-pre-line">{article.content}</p>
        </div>
      </main>
      </div>
  );
};
