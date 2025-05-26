// import components
import { Header } from "@/components/header";
import Contact01Page from "./components/contact-01";

export default function ContactPage() {
  return (
    <>
      <Header page="Contact" />
      <main className="bg-muted">
        <Contact01Page />
      </main>
    </>
  );
}
