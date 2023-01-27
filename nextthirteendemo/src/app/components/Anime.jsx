"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
function Anime({ children }) {
  return (
    <AnimatePresence initial={true} onExitComplete={true}>
      {children}
    </AnimatePresence>
  );
}

export default Anime;
