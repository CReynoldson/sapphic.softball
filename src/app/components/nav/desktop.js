import Link from "next/link";
import { MERCH_LINK, VOLUNTEER_LINK } from "./links";
import Instagram from "../Instagram";

export default () => (
    <div className="hidden lg:block w-3/5">
        <ul className="flex flex-row justify-evenly items-center text-lg">
            <li>
                <Link href="/tournament">2026 tournament</Link>
            </li>
            <li>
                <a href={VOLUNTEER_LINK} target="blank">
                    volunteer
                </a>
            </li>
            <li>
                <a href={MERCH_LINK} target="blank">
                    merch
                </a>
            </li>
            <li>
                <Link href="/events">events</Link>
            </li>
            <li>
                <Link href="/rules">
                    rules
                </Link>
            </li>
            <Instagram className="w-6" />
        </ul>
    </div>
);
