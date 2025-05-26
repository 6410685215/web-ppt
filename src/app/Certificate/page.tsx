import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// import components
import { Header } from "@/components/header";
import ImageCard from "./components/ImageCard";

const Certificates = [
  {
    title: "GDSC - Basic Linux",
    description: "A beginner's guide to using Shell scripting and basic Linux commands.",
    image: "/certificates/GDSC_basicLinux.png",
    link: "/docs/GDSC_basicLinux.pdf",
    type: "Google Developer Student Club",
    date: "Jan. 2024"
  },
  {
    title: "GDSC - React 101",
    description: "A beginner's guide to React, covering the fundamentals of building user interfaces.",
    image: "/certificates/GDSC_react101.png",
    link: "/docs/GDSC_react101.pdf",
    type: "Google Developer Student Club",
    date: "Jan. 2024"
  },
  {
    title: "GDSC - Figma 101",
    description: "A beginner's guide to Figma, covering the basics of UI/UX design.",
    image: "/certificates/GDSC_figma101.png",
    link: "/docs/GDSC_figma101.pdf",
    type: "Google Developer Student Club",
    date: "Feb. 2024"
  },
  {
    title: "CCNA - Introduction to Networks",
    description: "An introduction to networking concepts, protocols, and technologies.",
    image: "/certificates/PatcharaponTappakwan-Intro to Network-certificate.png",
    link: "/docs/PatcharaponTappakwan-Intro to Network-letter.pdf",
    type: "Cisco Certified Network Associate",
    date: "Feb. 2024"
  },
  {
    title: "CCNA - Switching, Routing, and Wireless Essentials",
    description: "A comprehensive course on switching, routing, and wireless networking essentials.",
    image: "/certificates/PatcharaponTappakwan-Switching Routin-certificate.png",
    link: "/docs/PatcharaponTappakwan-Switching Routin-letter.pdf",
    type: "Cisco Certified Network Associate",
    date: "Feb. 2024"
  },
]

const Blog02Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0 mt-20">
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Certificates.map((item) => (
          <Card key={item.title} className="shadow-sx overflow-hidden rounded-sm">
              <ImageCard image={item.image} title={item.title} />
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {item.type}
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {item.description}
              </p>

              <Link href={item.link} target="_blank">
                <Button className="mt-6 shadow-none">
                  Open PDF File <ExternalLink />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default function CertificatePage() {
  return (
    <>
      <Header page="Certificate" />
      <main className="bg-muted">
        <Blog02Page />
      </main>
    </>
  );
}
