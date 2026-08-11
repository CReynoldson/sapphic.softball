import Card from "../components/Card";
import FullWidthSection from "../components/FullWidthSection";
import Link from "next/link";
import { PARK_LINK } from "../page";

const Tournament = () => (
    <>
        <FullWidthSection classNames="justify-center">
            <div className="p-6">
                <h1 className="text-center">2026 Tournament</h1>
                <p>
                    Check back soon for more details! For now, here's the
                    TLDR:{" "}
                </p>
                <div className="p-2 flex flex-col gap-6 md:flex-row">
                    <Card cardClass="text-center card--coral">
                        <h2>Where</h2>
                        <p className="text-lg">
                            <a target="blank" href={PARK_LINK}>
                                MacDonald Park, Victoria, BC
                            </a>
                        </p>
                    </Card>
                    <Card cardClass="text-center card--gold">
                        <h2>When</h2>
                        <p className="text-lg">Games from 9am - 5pm</p>
                        <p className="text-lg">Drag Show at 12pm</p>
                    </Card>
                    <Card cardClass="text-center card--purp">
                        <h2>Who</h2>
                        <p className="text-lg">9 awesome teams!</p>
                        <ul className="text-left m-auto team-list">
                            <li>SuperSoakers</li>
                            <li>Fruit Salad</li>
                            <li>Blue Gays</li>
                            <li>TTHE Outfielders</li>
                            <li>Sluts Who Slide</li>
                            <li>Ace of Bases</li>
                            <li>Wildkatz</li>
                            <li>Butter Up</li>
                            <li>Queerios</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </FullWidthSection>
        <div>
        <h2 className="text-center">But Wait, There's More!</h2>
        <FullWidthSection classNames="gap-6 justify-center  p-6">
            <Card cardClass="card--blue p-6 text-center">
                <h2>Sunday Drag Brunch</h2>
                <Link href="/events">Details</Link>
            </Card>
            <Card cardClass="card--purp p-6 text-center">
                <h2>More Events Coming Soon!</h2>
                <p>Stay tuned for updates 👀</p>
            </Card>
        </FullWidthSection>
        </div>
    </>
);
export default Tournament;
