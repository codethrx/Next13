import { URL } from "@/utils";
import Link from "next/link";
async function fettchPosts() {
  const promise = await fetch(URL);
  const json = await promise.json();
  return json;
}
async function Posts() {
  const data = await fettchPosts();
  console.log(data);
  return (
    <div>
      {data?.splice(0, 25)?.map(({ title, id }) => (
        <Link href={`/posts/${id}`} className="truncate" key={id}>
          <p> {title}</p>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
