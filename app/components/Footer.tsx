import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)] dark:bg-[var(--shade)] dark:text-[var(--foreground)]">
      <div className="px-5 sm:px-10 py-5 flex justify-between flex-row gap-20 sm:gap-0 text-small">
        <p>© Alessandro Quets</p>
        <p>in ♡ with pixels</p>
      </div>
    </footer>
  );
};

export default Footer;
