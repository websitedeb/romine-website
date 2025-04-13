import Link from "next/link";
import { AlertTriangleIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <Card className="bg-[#1c1c1c] border-2 border-[#f08721] text-white p-8 rounded-3xl w-[90%] max-w-md text-center">
          <div className="flex justify-center mb-4 text-[#f08721]">
            <AlertTriangleIcon size={48} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Work In Progress</h1>
          <p className="text-[#e4984c] font-medium mb-6">
            The page you're looking for isn't ready yet. We're still working on it!
          </p>
          <Link href="/">
            <button className="bg-[#f08721] hover:bg-[#e4984c] text-black font-semibold py-2 px-6 rounded-full transition cursor-pointer">
              Go Back Home
            </button>
          </Link>
        </Card>
      </div>
    </>
  );
}
