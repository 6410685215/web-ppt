import { Logo }from "./logos";

import rocky from '@/assets/logos/rocky-logo.svg'
import azure from '@/assets/logos/azure-original-wordmark-logo.svg'
import github from '@/assets/logos/github-logo.svg'
import apache from '@/assets/logos/apache-original-wordmark-logo.svg'
import django from '@/assets/logos/django-logo.svg'
import docker from '@/assets/logos/docker-logo.svg'
import nextjs from '@/assets/logos/nextjs-logo.svg'
import nginx from '@/assets/logos/nginx-logo.svg'
import react from '@/assets/logos/react-logo.svg'
import vmware from '@/assets/logos/vmware-logo.svg'
import windows from '@/assets/logos/windows-server-logo.svg'

const logos = [
  { src: rocky, alt: "Rocky Linux" },
  { src: azure, alt: "Microsoft Azure" },
  { src: github, alt: "GitHub" },
  { src: apache, alt: "Apache" },
  { src: django, alt: "Django" },
  { src: docker, alt: "Docker" },
  { src: nextjs, alt: "Next.js" },
  { src: nginx, alt: "Nginx" },
  { src: react, alt: "React" },
  { src: vmware, alt: "VMware" },
  { src: windows, alt: "Windows Server" },
]

const Logos02Page = () => {
  return (
    <div className="flex items-center justify-center px-6 pt-14">
      <div className="bg-[#f5f5f5] dark:bg-[#f5f5f5] rounded-lg p-6">
        <p className="text-center text-xl text-neutral-800">
          Technology and tools I&apos;ve worked with
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
          {logos.map((logo, index) => (
            <Logo
              key={index}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos02Page;
