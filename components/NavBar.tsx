import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNav from "./mobile-nav";

const NavBar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between ">
      <div className="font-bold"><Link href={'/'}>TheDailyBiz</Link></div>
      <ul className="hidden md:flex w-full items-center justify-end space-x-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="buttons space-x-3 p-2">
          <Button variant="outline">login</Button>
          <Button variant="outline">Sign up</Button>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <ModeToggle />
       
      <Sheet>
        <SheetTrigger> <HamburgerMenuIcon className="size-7 md:hidden" /></SheetTrigger>
        <SheetContent>
          <MobileNav/>
        </SheetContent>
      </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
