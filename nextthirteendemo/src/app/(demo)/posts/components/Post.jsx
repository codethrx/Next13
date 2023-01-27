import Link from "next/link";
import { URL } from "@/utils";
function Post() {
  return (
    <div>
      <h1>Post#{id}</h1>
    </div>
  );
}

export default Post;
export async function generateStaticParams() {
  const posts = await fetch(URL);
}
