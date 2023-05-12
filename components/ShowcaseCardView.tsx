import formatDate from "@/libs/date";
import Image from "next/image";
import Link from "next/link";

export default function ShowcaseCardView({ showcase }) {
  return (
    <div className="relative">
      <div className="rounded-lg">
        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0 w-full text-right rounded-t-lg drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
            {formatDate(showcase.date.iv)}
        </p>
        <Link href={`/showcase/${showcase.slug.iv}`}>
          <div className="absolute bottom-0 left-0 p-6 rounded-b-lg">
            <h2 className="text-xl font-semibold 5 text-white line-clamp-2 drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
              {showcase.title.iv}
            </h2>
            {/* <p className="text-base leading-4 text-white mt-2 line-clamp-1">
            {showcase.description.iv}
            </p> */}
            <div className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
              <p className="pr-2 text-sm font-medium leading-none drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
                Read More
              </p>
              <svg
                className="fill-stroke"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.75 12.5L10.25 8L5.75 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <Link href={`/showcase/${showcase.slug.iv}`}>
        <Image
          src={showcase.imageURL.iv}
          className="aspect-1 w-full rounded-lg object-cover"
          alt="chair"
          width={300}
          height={200}
        />
      </Link>
    </div>
  );
}
