

// import components
import { Header } from "@/components/header";
import Document01 from "./components/doc";
import { Footer } from "@/components/footer";

export default function DocsPage() {
    return (
        <>
            <Header page="Docs" />
            <main className="bg-muted">
                <Document01 />
            </main>
            <Footer />
        </>
    );
};