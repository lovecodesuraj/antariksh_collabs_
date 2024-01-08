import React, { useRef, useEffect, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { FaWhmcs } from "react-icons/fa";
import { Container } from "reactstrap";
import "./styles.css"
import { Link } from "react-router-dom";
// import NavLink as from "reactstrap";

import {
  RiCloseLine,
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "react-icons/ri";
 
import {
  AiFillHome,
  AiFillShopping,
  AiFillEdit,
} from "react-icons/ai";

const NAV__LINK = [
  {
    path: "/#home",
    display: "Home",
    openInNewPage: false,
  },
  {
    path: "/#blogs",
    display: "Blogs",
    openInNewPage: false,
  },
  {
    path: "/#gallery",
    display: "Gallery",
    openInNewPage: false,
  },
  {
    path: "/#contact",
    display: "Contact",
    openInNewPage: false,
  },
];

const icons = [
  <AiFillHome key="home" />,
  <AiFillShopping key="shopping" />,
  <FaWhmcs key="whmcs" />,
  <AiFillEdit key="edit" />,
  <BiLogInCircle key="login" />,
];

const Header = () => {
  const [crossMenu, setCrossMenu] = useState(false);
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => {
    setCrossMenu(false);
    menuRef.current.classList.toggle("menu__active");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper" sx={{
            display:"flex",
            alignItems: "center",
            justifyContent: "space-between"
        }} >
          <div style={{ cursor: "pointer" }} className="logo">
            <a aria-label="Home Page" href="/">
              <h1>
                <span>A</span>ntrakish <span></span>
              </h1>
            </a>
          </div>
          <div
            className="navigation"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className="nav__menu">
              {crossMenu && (
                <div className="border text-white text-3xl absolute top-10 right-10 font-extrabold">
                  <RiCloseLine />
                </div>
              )}
              {NAV__LINK.map((item, index) => (
                <div
                  key={index}
                  className="mobile__menuDiv" 
                >
                  <a aria-label={item.display} href={item.path}>
                    <p className="mobile__menu">{icons[index]}</p>
                  </a>

                  <a aria-label={item.display} href={item.path} >
                    <span className=" text-[#808dad] hover:text-green-400">
                      {item.display}
                    </span>
                  </a>
                </div>
              ))}

              <div className="nav__right">
                <div
                  className={`flex flex-row items-center gap-3 border-l-2 pl-4 border-l-slate-500 `}
                >
                  <Link
                    aria-label="Youtube Channel"
                    href=""
                    target="_blank"
                    title="Youtube Channel"
                    id="youtube-channel"
                    className={`cursor-pointer  text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiYoutubeFill />
                  </Link>

                  <Link
                    href=""
                    target="_blank"
                    title="Instagram Account"
                    id="instagram-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiInstagramFill />
                  </Link>

                  <Link
                    href=""
                    target="_blank"
                    title="Twitter Account"
                    id="twitter-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiTwitterFill />
                  </Link>

                  <Link
                    href=""
                    target="_blank"
                    title="LinkedIn Account"
                    id="linkedin-account"
                    className={`cursor-pointer text-[#ffffff] hover:text-[--site-theme-color] transform ease-in-out hover:-translate-y+1 hover:scale-150`}
                    rel="noreferrer"
                  >
                    <RiLinkedinFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <span
            onClick={() => setCrossMenu(!crossMenu)}
            className="mobile__menu"
          >
            <i className="ri-menu-line" onClick={toggleMenu}></i>            
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
