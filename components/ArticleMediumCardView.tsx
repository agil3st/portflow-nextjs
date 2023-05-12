import Image from "next/image";
import Link from "next/link";

export default function ArticleMediumCardView({ article }) {
  const description = article.description.replaceAll(/<\/?[^>]+(>|$)/gi, "");

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-4 flex items-center">
        <Link href={article?.link ?? ""} className="" target="_blank">
          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={200}
            className="w-28 h-28 lg:w-36 lg:h-36 rounded-lg mask-square object-cover"
          />
        </Link>
      </div>
      <div className="col-span-8 flex flex-col">
        <Link href={article?.link ?? ""} target="_blank">
          <div className="font-bold text-lg pt-1 lg:pt-2 lg:text-2 line-clamp-2 lg:line-clamp-2">
            {article.title}
          </div>
          <div className="font-light text-sm lg:text-lg pt-2 line-clamp-2 lg:line-clamp-2">
            {description}
          </div>
        </Link>
      </div>
    </div>
  );
}
