import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Github,
  Phone,
  Mail
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Certificate",
    href: "/Certificate",
  },
  {
    title: "Docs",
    href: "/Docs",
  },
  {
    title: "About",
    href: "/About",
  },
  {
    title: "Contact",
    href: "/Contact",
  },
];

const Footer04Page = () => {
  return (
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <Logo hight={32} />

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            {/* <div className="max-w-xs w-full">
              <h6 className="font-semibold">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </form>
            </div> */}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Patcharapon Tappakwan
              </Link>
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="https://ig.me/m/pon_pon.pt" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="mailto:patcharapon.tap@dome.tu.ac.th" target="_blank" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/6410685215" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="tel:+66650483001" target="_blank" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer04Page;
