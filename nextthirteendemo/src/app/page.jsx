"use client";
import Image from "next/image";

import styles from "./page.module.css";
import { motion as m } from "framer-motion";
export default function Home() {
  //DIY for running error.jsx file xD
  // throw new Error("Go");
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className=" text-xl text-teal-400">Be bold</h1>
    </m.div>
  );
}
