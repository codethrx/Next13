"use client";
import { createContext, useContext, useState } from "react";
const Ctx = createContext({ name: "" });
export const Provider = ({ children }) => {
  const [name, setName] = useState("Mario");

  return <Ctx.Provider value={{ name, setName }}>{children}</Ctx.Provider>;
};
export default function useCtx() {
  return useContext(Ctx);
}
