import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Dumbbell } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-2 font-bold text-3xl flex"
            >
                Gym Company
            </a>
            <Dumbbell className = "ml-1 " size={34}/>
          </NavigationMenuItem>

         

          {/* desktop */}
          <nav className="hidden md:flex gap-2 ">
            {routeList.map((route: RouteProps, i) => (
                <Button variant ="ghost" key={i}>
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px]`}
              >
                {route.label}
              </a>
              </Button>
            ))}
          </nav>

          
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};