import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const styling = {
  mobile: `sm:hidden absolute top-0 bottom-0 flex justify-center text-white
    items-center right-0 left-0 w-full h-screen bg-black text-center ease-in duration-300`,
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scrollStyle, setScrollStyle] = useState({
    text: "text-white",
    background: "bg-transparent",
  });

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const navStyle = () => {
      window.addEventListener("scroll", () => {
        window.scrollY > 100
          ? setScrollStyle({ text: "text-black", background: "bg-white" })
          : setScrollStyle({
              text: "text-white",
              background: "bg-transparent",
            });
      });
    };

    return navStyle();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      <div
        className={`sm:justify-around flex justify-between ease-in duration-300 ${scrollStyle.text} ${scrollStyle.background} items-center p-2`}
      >
        <Link href="/">
          <h1 className="text-4xl font-bold">Next</h1>
        </Link>

        <ul className="hidden sm:flex gap-10">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="">
            <Link href="/work">Work</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile button */}

        <div onClick={() => handleNavbar()} className="sm:hidden">
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile Menu */}

        <div
          className={navbar ? styling.mobile : `${styling.mobile} left-[-100%]`}
        >
          <button
            onClick={() => handleNavbar()}
            className="absolute top-0 right-0 pt-4 px-2"
          >
            <AiOutlineClose size={20} />
          </button>

          <ul>
            <li className="menu-item">
              <Link href="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="menu-item">
              <Link href="/work">Work</Link>
            </li>
            <li className="menu-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
