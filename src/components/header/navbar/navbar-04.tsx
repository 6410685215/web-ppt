import SwitchCustomizationDemo from "./switch-07";
import { Logo } from "@/components/logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

interface Navbar04PageProps {
  active: string;
}

const Navbar04Page = (props: Navbar04PageProps) => {
  return (
    <div className="bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 z-50 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full shadow-md">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo hight={40} />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" active={props.active} />

          <div className="flex items-center gap-3">
            {/* Button Dark/Light Theme */}
            <SwitchCustomizationDemo />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet active={props.active} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
