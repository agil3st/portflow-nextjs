import Image from "next/image";
import { Suspense } from "react";
export default function LandingHero({ config }) {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content max-w-screen-lg mx-auto flex-col lg:flex-row-reverse">
        <Image
          src="https://i.imgur.com/P7iGJOt.png"
          blurDataURL="https://i.imgur.com/P7iGJOtt.png"
          className="mt-0 pt-0 h-60 md:h-80 lg:h-96 object-contain"
          priority={false}
          placeholder="blur"
          width="280"
          height="280"
          alt="Gambarku"
        />
        <div className="text-center md:text-left mb-14 md:mb-0 mr-0 md:mr-28">
          <Suspense fallback={<div>Loading...</div>}>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              {config.name?.iv}
            </h1>
            <p className="py-6">{config.bio?.iv}</p>
          </Suspense>
          <a href="contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
