import React from "react";
import NavLink from "./NavLink";

type MenuOverlayProps = {
  navLinks: {
    path: string;
    title: string;
  }[];
};

const MenuOverlay = ({ navLinks }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-5 h-screen pb-[18vh] md:hidden">
      {navLinks.map((link) => {
        return (
          <li key={link.title}>
            <NavLink href={link.path} title={link.title}></NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
