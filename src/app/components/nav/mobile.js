import Instagram from "../Instagram";
import Link from "next/link";
import {VOLUNTEER_LINK, MERCH_LINK} from "./links";

export default ({closeMenu}) => (
    <div
        id="mobile-menu"
        className={`px-4 pt-2 pb-4 space-y-2 bg-white border-b`}
    >
        <ul>
            <li>
                <span>🥎</span>
                <Link onClick={closeMenu} href="/tournament">2026 Tournament</Link>
            </li>
            <li>
                <span>💪</span>
                <a href={VOLUNTEER_LINK}>
                    Volunteer
                </a>
            </li>
            <li>
                <span>🤩</span>
                <a href={MERCH_LINK}>
                    Merch
                </a>
            </li>
            <li>
                <span>🥂</span>
                <Link onClick={closeMenu} href="/events">Events</Link>
            </li>
            <Instagram className="instagram-container"/>
        </ul>
    </div>
);
