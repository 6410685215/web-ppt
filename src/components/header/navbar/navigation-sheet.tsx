import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { NavMenu } from "./nav-menu";

interface NavSheetProps {
  active: string;
}

export const NavigationSheet = (props: NavSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo hight={40} />
        <NavMenu active={props.active} orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};
