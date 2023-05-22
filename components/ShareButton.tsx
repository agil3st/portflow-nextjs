'use client';
import { getAbsoluteUrl } from "@/libs/utils/path";
import { usePathname } from "next/navigation";

export default function ShareButton({ socialMedia, title }) {

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleShare = () => {
    var shareUrl = socialMedia.url.iv + "";
    var content = `${title}`;
    if (!shareUrl.includes("{url}")) {
      content = `${currentUrl} \n\nAgil Setiawan • ${content}`;
    }
    shareUrl = shareUrl.replaceAll("{url}", encodeURIComponent(currentUrl)).replaceAll("{text}", content);
    window.open(shareUrl, '_blank');
  };

  return (
    <button
      className="btn btn-circle btn-sm border-none bg-indigo-600 text-white"
      title={socialMedia.name.iv}
      onClick={handleShare}
      suppressHydrationWarning>
      <i
        className={`${socialMedia.icon.iv} text-[${socialMedia.color.iv}]`}></i>
    </button>
  );
}
