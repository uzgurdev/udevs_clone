import React from "react";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar h-14 border-b px-5 flex items-center justify-between fixed top-0 bg-white w-full">
      <Link href={"/"}>Logo</Link>
      <ul></ul>
    </nav>
  );
};

export default NavBar;
