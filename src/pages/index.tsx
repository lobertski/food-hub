import Hero from "@/app/components/Hero";
import Layout from "@/app/components/Layout";
import DisplayFood from "@/app/features/DisplayFood";
import "@/styles/globals.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <DisplayFood />
      </Layout>
    </>
  );
}
