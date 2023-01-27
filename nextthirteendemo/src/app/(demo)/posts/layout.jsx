import Posts from "./components/Posts";
export default function Layout({ children }) {
  return (
    <section className="flex min-h-screen">
      <div className="flex-1">
        <h1 className="">Posts</h1>
        <Posts />
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}
