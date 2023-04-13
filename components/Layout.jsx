import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
