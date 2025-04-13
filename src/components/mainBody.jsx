import Link from "next/link";

export function Gradient() {
    return (
        <div className="bg-gradient-to-b from-[#f08721] to-black w-screen h-lvh flex flex-col justify-center items-center arimo">
            <h1 className="font-bold text-8xl text-white leading-none fade-in fade-in-delay-5s">
                Romine Got A
            </h1>
            <h1 className="font-bold text-8xl text-[#f5a157] drop-shadow-[0_0_10px_#f08721] leading-none fade-in fade-in-delay-6s">
                Whole New Look
            </h1>
            <p className="font-light text-white montserrat leading-none mt-2 fade-in fade-in-delay-7s">
                Version 2.0!
            </p>
            <div className="flex gap-4 mt-6 fade-in fade-in-delay-8s">
                <Link href="/install" passHref>
                    <button className="px-6 py-3 border-2 border-[#f08721] text-[#f08721] font-bold text-lg rounded-lg hover:border-[#e4984c] hover:text-[#e4984c] hover:bg-black transition cursor-pointer">
                        Install
                    </button>
                </Link>
                <Link href="/learn" passHref>
                    <button className="px-6 py-3 border-2 border-white text-white font-bold text-lg rounded-lg bg-transparent hover:bg-white transition hover:text-black cursor-pointer">
                        Learn
                    </button>
                </Link>
            </div>
        </div>
    );
}