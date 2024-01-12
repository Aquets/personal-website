import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-[#fafafa]">
      <div className="px-10 py-10 sm:py-5 flex flex-col justify-between sm:flex-row gap-20 sm:gap-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-0">
          <p className="pr-5">
            ↳ <a href="projects">Projects</a>
          </p>
          <p className="pr-5">
            ↳ <a href="/experiments">Experiments</a>
          </p>
          <p className="pr-5">
            ↳ <a href="/info">Info</a>
          </p>
          <p className="pr-5">
            ↳ <a href="/contact">Contact</a>
          </p>
        </div>
        <p>© Alessandro Quets</p>
      </div>
    </footer>
  );
};

export default Footer;
