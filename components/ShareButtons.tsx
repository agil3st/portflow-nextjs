import { socials } from "@/app/layout";
import ShareButton from "./ShareButton";

export default function ShareButtons({title}) {
  return (
    <div className="flex flex-col mt-4 space-y-1">
      <div className="flex items-center justify-center">
        <p>Share to</p>
      </div>
      <div className="flex items-center justify-center space-x-1">
        {/* loop */}
        {socials.map((social) => (
          <ShareButton key={social.id} socialMedia={social.data} title={title} />
        ))}
      </div>
    </div>
  );
}
