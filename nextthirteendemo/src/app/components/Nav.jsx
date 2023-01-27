"use client";
import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/posts">POSTs</Link>
    </nav>
  );
}

export default Nav;
