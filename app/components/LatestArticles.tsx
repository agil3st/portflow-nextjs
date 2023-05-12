import api from "@/libs/api"
import Link from "next/link"
import SectionTitle from "./SectionTitle"
import ArticleCardView from "@/components/ArticleCardView"

export default async function LatestArticles() {
    const articles = (await api({
      page: "story",
      query: {
        $orderby: "created desc",
        $top: 5,
      },
    })).items

  return (
    <section className="w-full px-4 lg:px-0">
    <div className="flex pt-16 mb-4 lg:px-0 items-center justify-between">
      <SectionTitle text="Latest Articles" />
      <Link
        href="blog"
        className="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View All
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleCardView
        key={article.id}
        article={article.data}
        className="w-full" />
      ))}
    </div>
  </section>
  )
}
