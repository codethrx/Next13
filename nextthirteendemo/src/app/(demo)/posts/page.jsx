"use client";
import React from "react";
import { motion as m } from "framer-motion";
function page() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      Posts
    </m.div>
  );
}

export default page;
