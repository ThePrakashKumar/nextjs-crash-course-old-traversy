import Link from "next/link";

export default function Home({ articles }) {
  return (
    <div>
      <h1>Welcome to Next</h1>
      {articles.map((article) => (
        <>
          <Link href={"/article/[id]"} as={`/article/${article.id}`}>
            {article.title}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
