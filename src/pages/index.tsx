import { Hero, Layout } from "@/app/components";
import { DisplayFood } from "@/app/features";

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
