// import { useRouter } from "next/router";
const ArticlePage = ({ article }) => {
  // this is how we get the id from the url
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1>{article.title}</h1>
      <h3>{article.body}</h3>
    </>
  );
};

// * METHOD #1
// request data on every request build on the server and send the HTML
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
// ---------------------------------------------------------------------

// * METHOD2
// dynamically generate path for every id and generate static sites

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
