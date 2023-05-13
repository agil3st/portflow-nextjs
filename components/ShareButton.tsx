'use client';
import { getAbsoluteUrl } from "@/libs/utils/path";
import { usePathname } from "next/navigation";

export default function ShareButton({ socialMedia, title }) {
  const path = usePathname();
  var text = socialMedia.url.iv + "";
  var content = `${title}`;

  const host = getAbsoluteUrl();
//   console.log("window.location", host);
  var currentPath = `${host}${path}`;

  if (!text.includes("{url}")) {
    content = `${currentPath} \n\nAgil Setiawan • ${content}`;
  }

  text = text.replaceAll("{url}", currentPath).replaceAll("{text}", content);
  const link = encodeURI(text);

  return (
    <a
      target="_blank"
      className="btn btn-circle btn-sm border-none bg-indigo-600 text-white"
      href={link}
      title={socialMedia.name.iv}
      suppressHydrationWarning>
      <i
        className={`${socialMedia.icon.iv} text-[${socialMedia.color.iv}]`}></i>
    </a>
  );
}
