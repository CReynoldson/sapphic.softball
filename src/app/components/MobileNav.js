"use client";
import { useState } from "react";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    if (open) {
        return (
            <nav>
                <ul>
                    <li>
                        <a>Volunteer</a>
                        <a>Merch</a>
                        <a>Events</a>
                        <a>Tournament Location</a>
                    </li>
                </ul>
            </nav>
        );
    }
    return <div className="mobile-nav--closed">
        <span>---</span>
        <span>---</span>
        <span>---</span>
        <span>---</span>
        <span>---</span>
    </div>
};
export default MobileNav;
