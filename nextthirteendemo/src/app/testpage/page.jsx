"use client";
import useCtx from "@/context/Ctx";
function page() {
  const { name, setName } = useCtx();
  const toggleName = (n) => () => {
    setName(n);
  };
  return (
    <div>
      <h1 className="font-noto text-xl text-red-600">{name}</h1>
      <button onClick={toggleName(name === "Mario" ? "Luigi" : "Mario")}>
        Toggle Name
      </button>
    </div>
  );
}

export default page;
