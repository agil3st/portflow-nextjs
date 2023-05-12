import api from "@/libs/api";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default async function MyTools() {
  const tools = await api({
    page: "tools",
    query: {
      $orderby: "data/order/iv asc",
    },
  })

  return (
    <section>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <SectionTitle text="Technology I Use" />
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-2 sm:max-w-xl sm:grid-cols-6 sm:gap-x-2 lg:mx-0 lg:max-w-none lg:grid-cols-5 justify-items-center justify-center">
            {tools.items.map((tool) => (
              <a
                key={tool.id}
                href={tool.data.link.iv}
                className="bg-gray-800 dark:bg-gray-700 h-full w-full p-4 rounded-lg"
                target="_blank">
                <Image
                  src={tool.data.imageURL.iv}
                  alt={tool.data.name.iv}
                  className="col-span-2 h-full max-h-10 w-full object-contain lg:col-span-1 align-middle"
                  width="158"
                  height="48"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
