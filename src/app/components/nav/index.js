"use client";
import { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

export default () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="w-full h-100px bg-lavender flex flex-row items-center justify-between py-3 px-6 shadow-2xs">
                <a href="/">
                    <Image
                        src="/logo.png"
                        width={80}
                        height={80}
                        alt="Sapphic Softball Logo"
                    />
                </a>
                <button
                    id="menu-btn"
                    className="lg:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    {open ? <XIcon color="#FFF8F2" width="36" height="36" /> : <MenuIcon color="#FFF8F2" width="36" height="36"/>}
                </button>
                <DesktopNav />
            </div>
            {open && <MobileNav closeMenu={() => setOpen(false)} />}
        </nav>
    );
};
