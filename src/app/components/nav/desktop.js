import Link from "next/link";
import { MERCH_LINK, VOLUNTEER_LINK } from "./links";
import Instagram from "../Instagram";

export default () => (
    <div className="hidden lg:block w-1/2">
        <ul className="flex flex-row justify-evenly items-center text-lg">
            <li>
                <Link href="/tournament">2026 Tournament</Link>
            </li>
            <li>
                <a href={VOLUNTEER_LINK} target="blank">
                    Volunteer
                </a>
            </li>
            <li>
                <a href={MERCH_LINK} target="blank">
                    Merch
                </a>
            </li>
            <li>
                <Link href="/events">Events</Link>
            </li>
            <li>
                <Link href="/rules">
                    Rules
                </Link>
            </li>
            <Instagram className="w-6" />
        </ul>
    </div>
);
