"use client";

export default function Pocket({children}){
    return (
        <div className="relative bg-[#1c1c1c] w-screen rounded-3xl p-4 border-[1] border-[#f08721] drop-shadow-[0_0_10px_#f08721] mx-auto">
            {children}
        </div>
    );
}