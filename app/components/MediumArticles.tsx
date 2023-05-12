import { Suspense } from "react";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ArticleMediumCardView from "@/components/ArticleMediumCardView";
import api from "@/libs/api";

async function getData() {
  return await api({
    page: "https://mediumpostsapi.vercel.app/api/agil3st",
    plain: true,
  });
}

export default async function MediumArticles({ mediumProfile }) {
//   console.log(mediumProfile.data);

  const articles = await getData();

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <SectionTitle text="From Medium" />

          <Link
            href={mediumProfile?.url ?? ""}
            target="_blank"
            className="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
            View More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
          {articles.dataMedium.map((article) => (
            <div key={article.id} className="w-full px-4 pb-4 lg:px-0">
              <ArticleMediumCardView article={article} />
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
}
