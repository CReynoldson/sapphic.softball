import Link from "next/link";
import { MERCH_LINK, VOLUNTEER_LINK } from "./links";

export default () => (
    <div className="hidden lg:flex justify-between flex-row">
        <ul>
            <li><Link href="/tournament">2026 Tournament</Link></li>
            <li><a href={VOLUNTEER_LINK} target="blank">Volunteer</a></li>
            <li><a href={MERCH_LINK} target="blank">Merch</a></li>
            <li><Link href="/events">Events</Link></li>
        </ul>
    </div>
)