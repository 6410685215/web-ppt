import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Certificate", href: "/Certificate" },
  { label: "Docs", href: "/Docs" },
  { label: "About", href: "/About" },
  { label: "Contact", href: "/Contact" },
];

interface NavMenuProps extends NavigationMenuProps {
  active: string;
}

export const NavMenu = (props: NavMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navItems.map((item) => (
        <NavigationMenuItem key={item.label}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className={cn(
                "transition-colors font-semibold text-xl",
                props.active === item.label ? "text-rose-500/100 font-bold dark:text-teal-400/100" : "hover:text-primary text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
