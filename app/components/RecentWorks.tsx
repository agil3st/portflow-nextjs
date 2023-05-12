import api from "@/libs/api";
import SectionTitle from "./SectionTitle";
import ShowcaseCardView from "@/components/ShowcaseCardView";

export default async function RecentWorks() {
  const showcases = await api({
    page: "showcase",
    query: {
      $orderby: "created desc",
      $top: 4,
    },
  });

  return (
    <section className="px-4 lg:px-0">
      <div className="flex pt-16 mb-4 items-center justify-between">
        <SectionTitle text="Recent Works" />
        <a
          href="showcase"
          className="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {showcases.items.map((showcase) => (
          <ShowcaseCardView key={showcase.id} showcase={showcase.data} />
        ))}
      </div>
    </section>
  );
}
