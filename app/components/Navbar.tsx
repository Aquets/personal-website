"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks: { title: string; path: string }[] = [
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Experiments",
    path: "/experiments",
  },
  {
    title: "Info",
    path: "/info",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 p-[1rem] sm:px-8 z-10 sm:bg-transparent ${
        navbarOpen ? "bg-[rgb(var(--background-rgb))]" : ""
      }`}
    >
      <div className="flex flex-wrap justify-between items-center ">
        <Link onClick={() => setNavbarOpen(false)} href={"/"}>
          Alessandro Quets
        </Link>
        <div className="mobile-menu block sm:hidden">
          <button onClick={() => setNavbarOpen(!navbarOpen)}>
            {navbarOpen ? "X" : "="}
          </button>
        </div>
        <div className="menu hidden sm:block">
          <ul className="flex flex-row space-x-5">
            {navLinks.map((link) => {
              return (
                <li key={link.title}>
                  <NavLink href={link.path} title={link.title}></NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <div onClick={() => setNavbarOpen(false)}>
          <MenuOverlay navLinks={navLinks} />{" "}
        </div>
      ) : null}
    </nav>
  );
};
