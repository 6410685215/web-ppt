import { MailIcon, PhoneIcon } from "lucide-react";
import { FaLine, FaFacebookF, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const email = [
  { addr: "patcharapon.tap@dome.tu.ac.th" },
  { addr: "corpuspon.pt@gmail.com" },
  { addr: "6410685215@student.tu.ac.th" },
];

const phone = [
  { number: "+66650483001", label: "+66 (65) 048-3001" },
  { number: "+66863560484", label: "+66 (86) 356-0484" },
];

const socials = [
  { name: "Facebook", url: "https://www.facebook.com/Pon.MMaster", label: "Pon Patcharapon" },
  { name: "Instagram", url: "https://ig.me/m/pon_pon.pt", label: "@pon_pon.pt"},
  { name: "Line", url: "https://line.me/ti/p/VuVf2wnX45", label: "!PonPon" },
];

const Contact01Page = () => (
  <div className="min-h-screen flex justify-center pt-32">
    <div className="text-center px-8">
      <b className="text-muted-foreground">Contact Us</b>
      <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
        Get In Touch
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Best way to reach me is through email or phone. I will get back to you.
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            You can reach me via email for any inquiries or questions.
          </p>
          {email.map((emailItem) => (
            <Link
              key={emailItem.addr}
              className="mt-4 font-medium text-primary"
              href={`mailto:${emailItem.addr}`}
            >
              {emailItem.addr}
            </Link>
          ))}
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Phone</h3>
          <p className="mt-2 text-muted-foreground">
            Mon-Sat from 10am to 7pm.
          </p>
          {phone.map((phoneItem) => (
            <Link
              key={phoneItem.number}
              className="mt-4 font-medium text-primary"
              href={`tel:${phoneItem.number}`}
            >
              {phoneItem.label}
            </Link>
          ))}
        </div>
        { socials.map((social) => (
          <div key={social.name} className="text-center flex flex-col items-center">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
              {social.name === "Facebook" && <FaFacebookF size={24} />}
              {social.name === "Instagram" && <FaInstagram size={24} />}
              {social.name === "Line" && <FaLine size={24} />}
            </div>
            <h3 className="mt-6 font-semibold text-xl">{social.name}</h3>
            <p className="mt-2 text-muted-foreground">
              Connect with me on {social.name.toLowerCase()}.
            </p>
            <Link
              className="mt-4 font-medium text-primary"
              href={social.url}
              target="_blank"
            >
              {social.label}
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  </div>
);

export default Contact01Page;
