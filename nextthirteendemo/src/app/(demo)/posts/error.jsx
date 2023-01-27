"use client";
import React from "react";

function error({ error: e }) {
  return <div>{e.message}</div>;
}

export default error;
