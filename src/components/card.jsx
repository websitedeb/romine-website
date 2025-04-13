"use client";

import { Card } from "./ui/card";

export default function Cards({ children }) {
    return (
        <Card className="relative bg-[#1c1c1c] w-[90%] max-w-md text-white rounded-3xl p-4 border-2 border-transparent hover:border-[#f08721] transition hover:bg-[#2c2c2c] mx-auto hover:drop-shadow-[0_0_10px_#f08721] hover:leading-none">
            <div>
                {children}
            </div>
        </Card>
    );
}
