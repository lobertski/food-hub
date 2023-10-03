import { ReactNode } from "react";
import { Navbar } from "..";
import Footer from "../Footer";
import Hero from "../Hero";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
