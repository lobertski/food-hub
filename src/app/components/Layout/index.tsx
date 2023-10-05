import { ReactNode } from "react";
import { Navbar } from "..";
import Footer from "../Footer";
import Hero from "../Hero";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
