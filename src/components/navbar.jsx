import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { BookIcon, DownloadIcon, HomeIcon, Megaphone, YoutubeIcon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="p-4 bg-[rgba(0,0,0,0.88)] text-white flex items-center justify-between shadow-lg sticky top-0 z-50 backdrop-blur-sm">
            <NavigationMenu className="flex">
                <div className="flex items-center gap-3">
                    <Image src="/iicon.png" alt="Platform Icon" width={50} height={50} className="rounded-md" unoptimized />
                    <p className="text-xs font-semibold text-gray-500">v2.0</p>
                </div>
                &nbsp;
                &nbsp;
                <span>|</span>
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <Link href="/" className="flex hover:bg-[#f08721] rounded transition p-0.5">
                        <HomeIcon />
                        &nbsp;
                        <h3>Home</h3>
                    </Link>
                </NavigationMenuList>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <Link href="/install" className="flex hover:bg-[#f08721] rounded transition p-0.5">
                        <DownloadIcon />
                        &nbsp;
                        <h3>Install</h3>
                    </Link>
                </NavigationMenuList>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger href="/docs" className="flex hover:bg-[#f08721] rounded transition p-0.5 cursor-pointer">
                            <BookIcon />
                            &nbsp;
                            <h3>Docs</h3>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="text-[#f08721] arimo text-center rounded-xl shadow-lg border-[#f08721] p-0 bg-[#2c2c2c] drop-shadow-[0_0_10px_#f08721]">
                            <div className="w-96 min-w-96 text-center rounded-xl shadow-lg space-y-3 border-2 border-[#f08721] drop-shadow-[0_0_10px_#f08721] bg-[#1c1c1c] text-[#f08721] arimo p-4">
                                {[
                                    { href: "/docs/personal", label: "Personal", icon: "bi bi-pc" },
                                    { href: "/docs/mini", label: "Mini", icon: "bi bi-cpu-fill" },
                                    { href: "/docs/server", label: "Server", icon: "bi bi-hdd-stack-fill" },
                                    { href: "/docs/client", label: "Client", icon: "bi bi-display-fill" },
                                ].map(({ href, label, icon }) => (
                                    <Link
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-3 bg-[#1c1c1c] hover:border-[#f08721] border-2 border-transparent w-full rounded-3xl px-4 py-2 transition-colors duration-200"
                                    >
                                    <i className={`${icon} text-lg`} />
                                    <span className="text-white font-semibold">{label}</span>
                                    </Link>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <Link href="/blog" className="flex hover:bg-[#f08721] rounded transition p-0.5">
                        <Megaphone />
                        &nbsp;
                        <h3>Blog</h3>
                    </Link>
                </NavigationMenuList>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <Link href="/learn" className="flex hover:bg-[#f08721] rounded transition p-0.5">
                        <YoutubeIcon />
                        &nbsp;
                        <h3>Resources</h3>
                    </Link>
                </NavigationMenuList>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <NavigationMenuList>
                    <Link href="https://discord.gg/wq3Q9F6GwK" className="flex hover:bg-[#f08721] rounded transition p-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                        &nbsp;
                        <h3>Community</h3>
                    </Link>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
