import Image from "next/image";
import Link from "next/link";

export default function ArticleCardView({ article }) {
  return (
    <div>
      <Link href={`/blog/${article.slug.iv}`}>
        <Image
          src={article.imageURL.iv}
          className="rounded-md aspect-[5/3] object-cover"
          alt="technology"
          width={400}
          height={200}
        />
      </Link>
      <div className="p-4 pl-0">
        <Link href={`/blog/${article.slug.iv}`}>
          <h2 className="font-bold text-xl line-clamp-2">{article.title.iv}</h2>
        </Link>
        <p className="mt-2 line-clamp-3">{article.description.iv}</p>
      </div>
    </div>
  );
}
