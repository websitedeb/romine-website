"use client";

import { AppWindow, DollarSign, FastForward, Package } from "lucide-react";
import Cards from "./card";
import { CardTitle, CardDescription } from "./ui/card";

export default function Info() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Cards>
          <CardTitle className="flex items-center font-bold text-xl border-b border-black pb-2 mb-2">
            <FastForward />
            &nbsp;
            Fast
          </CardTitle>
          <CardDescription className="font-medium">
            Romine is super fast! If it's too slow or too fast for you, you can change the speed in the GUI!
          </CardDescription>
        </Cards>

        <Cards>
          <CardTitle className="flex items-center font-bold text-xl border-b border-black pb-2 mb-2">
            <Package />
            &nbsp;
            Portable
          </CardTitle>
          <CardDescription className="font-medium">
            Romine can be used on any device—computer, laptop, server, and more!
          </CardDescription>
        </Cards>

        <Cards>
          <CardTitle className="flex items-center font-bold text-xl border-b border-black pb-2 mb-2">
            <AppWindow />
            &nbsp;
            GUI
          </CardTitle>
          <CardDescription className="font-medium">
            Romine has a super easy-to-learn, comprehendible GUI! Everything you need is in the README!
          </CardDescription>
        </Cards>

        <Cards>
          <CardTitle className="flex items-center font-bold text-xl border-b border-black pb-2 mb-2">
            <DollarSign />
            &nbsp;
            Free
          </CardTitle>
          <CardDescription className="font-medium">
            Romine doesn't cost a dime!
          </CardDescription>
        </Cards>
      </div>
    </div>
  );
}
