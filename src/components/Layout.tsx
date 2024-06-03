import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className="py-6 page-px page-text">{children}</main>
      <Footer />
    </>
  );
}
