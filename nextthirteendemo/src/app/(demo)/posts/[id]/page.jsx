import Post from "../components/Post";
import { URL } from "@/utils";
export const dynamicParamas = true;
async function page({ params: { id } }) {
  const promise = await fetch(`${URL}/${id}`, { next: { revalidate: 60 } });
  const data = await promise.json();
  return (
    <div>
      <h1>Post#{id}</h1>
      <h2>Title:{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default page;
export async function generateStaticParams() {
  const promise = await fetch(URL);
  const json = await promise.json();
  const data = json.splice(0, 10);
  return data.map((d) => {
    return {
      id: d.id.toString(),
    };
  });
}
