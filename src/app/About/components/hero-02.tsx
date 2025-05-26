import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Hero02 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full mx-auto px-6 py-6">
        <div className="px-0 sm:px-8 lg:px-16 xl:px-20">
          <Badge className="via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Just released v2.0.0
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            About Me
          </h1>
            <div className="grid sm:grid-cols-2 mt-4">
              <div className="w-48 md:w-60 md:self-center lg:w-80 aspect-square bg-white rounded-xl row-span-2 justify-self-center">
                <Image
                  src="/images/profile.webp"
                  alt="Avatar"
                  className="object-cover rounded-xl"
                  width={320}
                  height={320}
                />
              </div>
              <p className="mt-6 sm:mt-0 text-lg text-justify">
                <b>Hello! I&apos;m Patcharapon Tappakwan,</b> <br/>
                a Computer Engineering student at Thammasat University (GPA:3.08),
                with a strong interest in Virtualization, Cloud Infrastructure, Server Configuration,
                and System Administration.
              </p>
              <p className="mt-4 text-lg indent-8 text-justify">
                I enjoy working with Linux systems and have hands-on experience setting up and managing servers
                using virtualization tools such as VirtualBox and VMware. I&apos;m also familiar with containerization
                through Docker and managing development environments using WSL and Git.
              </p>
            </div>
            <p className="mt-4 text-lg indent-8 text-justify">
              In addition to infrastructure and system admin work, I have a solid foundation in web development
              using technologies like Next.js, React, and TypeScript — allowing me to bridge the gap between
              development and operations.
            </p>
          {/* <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero02;
