// import components
import { Header } from "@/components/header";
import Hero02 from "./components/hero-02";
import Logos02Page from "./components/logos-02";

export default function AboutPage() {
  return (
    <>
      <Header page="About" />
      <main className="bg-muted py-28">
        <Hero02 />
        <Logos02Page />
      </main>
    </>
  );
}
