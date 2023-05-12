import Image from "next/image";

export default function Header({config}) {

  const navs: { title: string; route: string; }[] =  [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Blog",
      route: "/blog",
    },
    {
      title: "Showcase",
      route: "/showcase",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="relative">
      <div className="navbar light-mode shadow bg-base-100 z-10 fixed top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
              {navs.map((item) => (
                <li key={item.route}>
                  <a href={item.route} className="btn nav capitalize">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            {navs.map((item) => (
              <li key={item.route}>
                <a href={item.route} className="btn bg-transparent border-transparent hover:bg-transparent hover:text-primary hover:border-transparent nav capitalize">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-center flex md:hidden">
          <a href="/" className="font-bold">
            Agil Setiawan
          </a>
        </div>
        <div className="navbar-end mr-2">
          <a
            href=""
            target="_blank"
            className="btn p-0 bg-transparent border-none hover:bg-transparent">
            <Image src={config.items[0].data.photoURL.iv} className="w-10 avatar rounded-full" alt="" width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}
