"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon, Download } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const document = [
  {
    title: "Resume Patcharapon PDF",
    desc: "You can download my resume in PDF format using the Button below.",
    link: "/docs/Resume_TU_patcharapon.pdf",
  },
  {
    title: "Resume Patcharapon DOCX",
    desc: "You can download my resume in DOCX format using the Button below.",
    link: "/docs/Resume_TU_patcharapon.docx",
  },
  {
    title: "Transcript Patcharapon PDF",
    desc: "You can download my transcript in PDF format using the Button below.",
    link: "/docs/Transcript_TU_patcharapon.pdf",
  },
  {
    title: "Cooperative Education Manual PDF",
    desc: "You can download the Cooperative Education Manual in PDF format using the Button below.",
    link: "/docs/cn-cooperative-education-manual-66-1.pdf",
  },
  {
    title: "Cooperative Presentation Guide PDF",
    desc: "You can download the Cooperative Presentation Guide in PDF format using the Button below.",
    link: "/docs/Coop-Presentation-Exam-Guideline-66-1.pdf",
  },
  {
    title: "Certificate GDSC Basic Linux PDF",
    desc: "You can download the Certificate of Completion for GDSC Basic Linux in PDF format using the Button below.",
    link: "/docs/GDSC_basicLinux.pdf",
  },
  {
    title: "Certificate GDSC Figma 101 PDF",
    desc: "You can download the Certificate of Completion for GDSC Figma 101 in PDF format using the Button below.",
    link: "/docs/GDSC_figma101.pdf",
  },
  {
    title: "Certificate GDSC React 101 PDF",
    desc: "You can download the Certificate of Completion for GDSC React 101 in PDF format using the Button below.",
    link: "/docs/GDSC_react101.pdf",
  },
  {
    title: "Certificate CCNA Introduction to Networks PDF",
    desc: "You can download the Certificate of Completion for CCNA Introduction to Networks in PDF format using the Button below.",
    link: "/docs/PatcharaponTappakwan-Intro to Network-certificate.pdf",
  },
  {
    title: "Certificate CCNA Switching, Routing, and Wireless Essentials PDF",
    desc: "You can download the Certificate of Completion for CCNA Switching, Routing, and Wireless Essentials in PDF format using the Button below.",
    link: "/docs/PatcharaponTappakwan-Switching Routin-certificate.pdf",
  },
  {
    title: "Letter of Introduction to Networks from CCNA PDF",
    desc: "You can download the Letter of Introduction to Networks from CCNA in PDF format using the Button below.",
    link: "/docs/PatcharaponTappakwan-Intro to Network-letter.pdf",
  },
  {
    title: "Letter of Switching, Routing, and Wireless Essentials from CCNA PDF",
    desc: "You can download the Letter of Switching, Routing, and Wireless Essentials from CCNA in PDF format using the Button below.",
    link: "/docs/PatcharaponTappakwan-Switching Routin-letter.pdf",
  },
];

const Document01 = () => {
  const [value, setValue] = useState<string>();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-28 container">
      <div className="w-full max-w-screen-lg">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
          File Documentation
        </h2>

        <div className="mt-6 w-full grid md:grid-cols-1 gap-x-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {document.map(({ title, desc, link }, index) => (
              <AccordionItem key={title} value={`title-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}
                  >
                    {title}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent>
                  {desc} <br/>
                  <Link href={link} target="_blank" rel="noopener noreferrer" className="flex justify-self-end">
                    <Button
                      variant="default"
                      className="mt-4 mr-20 justify-self-end"
                      size="default"
                    >
                      Download <Download className="ml-2" />
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Document01;
