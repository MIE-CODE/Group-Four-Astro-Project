import { useState } from "react";

const navLinks = [
  {
    name: "About Us",
    link: "/contact",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Clients",
    link: "#",
    sub: [
      {
        name: "Individuals",
        link: "/individual",
      },
      {
        name: "Businesses",
        link: "/business",
      },
    ],
  },
  {
    name: "Resources",
    link: "/resources",
  },
];

export const Headers = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      // add blur to header
      className="sm:px-4 bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm fixed right-0 left-0 top-0 z-50"
    >
      <div className="  font-noto md:mt-8 flex justify-between items-center md:rounded-2xl border-b md:border  md:border-[##EAECF0] bg-white md:shadow-md max-w-[73rem] mx-auto py-4 px-5">
        <div className="flex justify-between items-center space-x-8 w-full md:w-auto">
          <a href="/">
            <img
              src="images/Tifi.svg"
              alt="Tifi Logo"
              className="w-[44px] h-[20px]"
            />
          </a>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src="images/Hamburger_Icon.svg" alt="menu" className="w-8 h-8" />
          </button>
        </div>
        <nav
          className={`p-4 md:p-0 w-full md:w-auto left-0 right-0 top-16  absolute font-medium  md:block bg-white md:bg-transparent md:static md:space-x-8 transition-all duration-300 ease-in-out
                ${showMenu ? "block" : "hidden"}
                `}
        >
          <ul className="flex flex-col md:flex-row  items-center space-y-6 md:space-y-0 md:space-x-8 ">
            {navLinks.map((link, index) => (
              <li className={`${link.sub && "group"} relative`} key={index}>
                <a
                  href={link.link}
                  className="text-[#2B2B2B] hover:text-[#FF601F] transition-all duration-300 ease-in-out"
                >
                  {link.name}
                </a>
                {link.sub && (
                  <div className=" absolute border top-5 left-0 w-[180px] bg-white shadow-md rounded-2xl py-4 px-5 hidden group-hover:block hover:block ">
                    <ul className="flex flex-col space-y-2 w-full">
                      {link.sub.map((subLink, index) => (
                        <li key={index}>
                          <a
                            href={subLink.link}
                            className="text-[#2B2B2B] hover:text-[#FF601F] transition-all  ease-in-out"
                          >
                            {subLink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block ">
          <a href="/contact">
            <button className=" font-bold font-inter bg-[#FF601F] text-white px-5 py-3 rounded-[8px] hover:bg-[#FF4F00] transition-all duration-300 ease-in-out">
              LET'S TALK
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};
