import Navbar from "@/components/navbar";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Install() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <Card className="relative bg-[#1c1c1c] w-[90%] max-w-md text-white rounded-3xl p-4 border-2 border-transparent hover:border-[#f08721] transition hover:bg-[#2c2c2c] mx-auto hover:drop-shadow-[0_0_10px_#f08721]">
          <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-white text-2xl font-bold mb-4 text-center">
              Choose Your Download Type
            </h1>

            <Link href="/downloads/Romine Personal.exe" className="w-full">
              <button className="w-full bg-[#f08721] hover:bg-[#e4984c] text-black font-semibold py-2 px-6 rounded-full transition flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc text-xl" viewBox="0 0 16 16">
                  <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
                </svg>
                Download Personal
              </button>
            </Link>

            <Link href="/downloads/Romine_Server.zip" className="w-full">
              <button className="w-full bg-[#f08721] hover:bg-[#e4984c] text-black font-semibold py-2 px-6 rounded-full transition flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
                  <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
                </svg>
                Download Server
              </button>
            </Link>

            <Link href="/downloads/Romine_Mini.pyc" className="w-full">
              <button className="w-full bg-[#f08721] hover:bg-[#e4984c] text-black font-semibold py-2 px-6 rounded-full transition flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                  <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                  <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5"/>
                </svg>
                Download Mini
              </button>
            </Link>

            <Link href="/downloads/Romine_Client.zip" className="w-full">
              <button className="w-full bg-[#f08721] hover:bg-[#e4984c] text-black font-semibold py-2 px-6 rounded-full transition flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display-fill" viewBox="0 0 16 16">
                  <path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z"/>
                </svg>
                Download Client
              </button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
