import { Button } from "@/components/ui/button";
import React from "react";
import { BicepsFlexed } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { MemberForm } from "./newMemberForm";

const Hero = () => {
  return (
    < div className = "">
    <section className="flex items-center justify-between px-10 py-30 ">
      {/* Left Side: Large Text */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-6xl font-bold leading-tight">
          Transform Your Fitness Journey
        </h1>
        <p className="text-xl text-gray-600">
          Join our gym community today and achieve your goals with expert
          guidance, tailored classes, and flexible plans.
        </p>
        
      </div>

      {/* Right Side: Video/GIF */}
      <div className="flex-shrink-0 w-1/2">
        <video
          src="../assets/heroVid.mp4"
          autoPlay
          loop
          muted
          className="rounded-lg shadow-lg w-full"
        />
        
      </div>
    </section>
    <section className="text-center mt-10">
    <Sheet>
        <SheetTrigger asChild>
            <Button className="relative inline-flex items-center w-96 justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Get Started <BicepsFlexed/> 
            </Button>
        </SheetTrigger>

        <SheetContent>
        <SheetHeader>
          <SheetTitle>Join Us!</SheetTitle>
          <SheetDescription>
            Fill out the form and sign up with us here. Click Submit when you're done.
          </SheetDescription>
        </SheetHeader>

          <MemberForm/>

  
        </SheetContent>
    </Sheet>
    </section>
    </div>
  );
};

export default Hero;