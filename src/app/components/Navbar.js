"use client";
import { useState } from "react";
import Image from "next/image";
import Instagram from "./Instagram";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default () => {
    const [open, setOpen] = useState(false);
    const menu_class = !open ? "hidden" : "";
    return (
        <nav>
            <div className="w-full h-auto bg-lavender flex flex-row items-center justify-between p-2 shadow-2xs">
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
                    className="md:hidden"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <MenuIcon/>
                </button>
            </div>
            <div
                id="mobile-menu"
                className={`${menu_class} px-4 pt-2 pb-4 space-y-2 bg-white border-b`}
            >
                <ul>
                    <li>
                        <span>🥎</span>
                        <a
                            href="/tournament"
                        >
                            2026 Tournament
                        </a>
                    </li>
                    <li>
                        <span>💪</span>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScFfgmNOMu-eZ7GPrjjGVV4d55a86yoEcG8REBDunpEClkPOw/viewform"
                        >
                            Volunteer
                        </a>
                    </li>
                    <li>
                        <span>🤩</span>
                         <a
                            href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfvbbYqtr_c9SchxYJ8KKEOijGcLLKyQ08efz0tDcKnkD70iw%2Fviewform%3Ffbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGniaT7b0QLZVTCcjy0n4ddCmLODe9_JAaHWI67Fg630W2KjMcEdxWcvMNOyg8_aem_YUlbFX_paWDvbJcWWKUL_A%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUCRqGsT0V8-OnEeji3dJv7BaaWKXaEYm7CM9iSwd0xUUNOaGxocjebn6wxg9K_i6tCpOC1VMGoYeITzUNp7n9_QjTJJlP_-2eEqbetK2ZJUIeBYWfJWRX_Wt7KbbIWOMwqAn8Al47j8"
                        >
                            Merch
                        </a>
                    </li>
                    <li>
                        <span>🥂</span>
                         <Link
                            href="/events"
                        >
                            Events
                        </Link>
                    </li>
                <Instagram/>
                </ul>
            </div>
        </nav>
    );
};
