import Info from "./info";

export default function What() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <p className="montserrat font-semibold bg-gradient-to-r from-[#f08721] via-[#ffffff] to-[#e4984c] bg-clip-text text-transparent text-lg mb-4">
                What is Romine?
            </p>
            <h1 className="arimo text-2xl sm:text-4xl text-white max-w-2xl">
                <span className="font-bold">Romine</span> is a bot that can generate and grind Microsoft Points — which in turn can get you Robux!
            </h1>
            <Info />
        </div>
    );
}
