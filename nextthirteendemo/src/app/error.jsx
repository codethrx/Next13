"use client";
function error({ error, reset }) {
  return (
    <div>
      <h1 className="text-red-500">Error:{error.message}</h1>
      <button onClick={() => reset()}>Reset.</button>
    </div>
  );
}

export default error;
