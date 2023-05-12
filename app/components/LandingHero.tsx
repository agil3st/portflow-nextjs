import Image from "next/image";
export default function LandingHero({config}) {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content max-w-screen-lg mx-auto flex-col lg:flex-row-reverse">
        <Image
          src="https://i.postimg.cc/yxDPpfD5/casual-life-3d-man-working-on-laptop-and-drinking-coffee.png"
          blurDataURL="https://i.imgur.com/P7iGJOtt.png"
          className="mt-0 pt-0 h-60 md:h-80 lg:h-96 object-contain"
          priority={false}
          placeholder="blur"
          width="280"
          height="280"
          alt="Gambarku"
        />
        <div className="text-center md:text-left mb-14 md:mb-0 mr-0 md:mr-28">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            {config.name?.iv}
          </h1>
          <p className="py-6">{config.bio?.iv}</p>
          <a href="contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
