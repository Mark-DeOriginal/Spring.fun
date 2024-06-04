import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main className="py-6 page-px">{children}</main>
      <Modal />
      <Footer />
    </>
  );
}
