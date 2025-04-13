import Link from "next/link";
import { Card } from "./ui/card";
import { DownloadIcon } from "lucide-react";

export default function Welcome() {
  return (
    <Card className="bg-gradient-to-t from-[#f08721] to-[#000000] text-white p-10 text-center border-none transition max-w-screen mx-auto mt-10 !w-screen !rounded-none">
      <h3 className="text-2xl font-medium text-[#e4984c] mb-4">
        So what are you waiting for?
      </h3>
      <h1 className="text-5xl font-bold mb-8">
        Get <span className="font-extrabold !text-[#e4984c] drop-shadow-[0_0_10px_#f08721] leading-none">Romine</span> Today
      </h1>
      <Link href="/install">
        <button className="bg-[#f08721] hover:bg-[#e4984c] text-white font-semibold py-3 px-8 rounded-2xl text-lg transition cursor-pointer">
          <div className="flex">
            <DownloadIcon />
            &nbsp;
            Download
          </div>
        </button>
      </Link>
    </Card>
  );
}
