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
                <Link onClick={closeMenu} href="/tournament">2026 TOURNAMENT</Link>
            </li>
            <li>
                <span>💪</span>
                <a href={VOLUNTEER_LINK}>
                    VOLUNTEER
                </a>
            </li>
            <li>
                <span>🤩</span>
                <a href={MERCH_LINK}>
                    MERCH
                </a>
            </li>
            <li>
                <span>🥂</span>
                <Link onClick={closeMenu} href="/events">EVENTS</Link>
            </li>
            <li>
                <Link onClick={closeMenu} href="/rules">RULES</Link>
            </li>
            <Instagram className="instagram-container"/>
        </ul>
    </div>
);
