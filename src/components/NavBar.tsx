"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";
const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6 ">
        {links.map((link) => {
          return (
            <Link
              className={`${
                link.href == pathname ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
