import Image from "next/image";
import Card from "../components/Card";
import FullWidthSection from "../components/FullWidthSection";
import Link from "next/link";
import { PARK_LINK } from "../page";

const Tournament = () => (
    <>
        <FullWidthSection classNames="justify-center">
            <div className="p-6 lg:w-4/5">
                <div className="p-2 flex flex-col gap-6 md:flex-row">
                    <FullWidthSection classNames="lg:flex-wrap">
                        <div className="p-8 lg:order-2">
                            <h1 className="text-center">
                                <span className="text-4xl">
                                    Saturday, August 29th, 2026
                                </span>
                                <br />
                                3rd Annual Tournament
                            </h1>
                            <p>
                                Join us for a full day of slow-pitch softball,
                                drag, cold drinks, and unapologetic queer joy at{" "}
                                <a
                                    target="blank"
                                    href={PARK_LINK}
                                    className="text-lg font-extrabold"
                                >
                                    MacDonald Park
                                </a>{" "}
                                in Victoria 🥎🏳️‍🌈✨️
                            </p>
                            <p>
                                <span className="uppercase">
                                    Free for spectators!
                                </span>{" "}
                                Everyone is welcome to come cheer on the teams,
                                soak up the atmosphere, and enjoy a day at the
                                ballpark.
                            </p>
                            <p>
                                Bring your friends, fam, crush, or just
                                yourself. Stop by the food truck, grab a drink from the beer garden, get
                                a fresh cut at the diamond-side barber, catch
                                our free midday drag performance, eat small
                                batch ice cream, and enjoy a day of softball and
                                queer fun.
                            </p>
                            <p>
                                Whether you know someone on the field, love
                                softball, want to see some drag, or are simply
                                looking for something fun to do on August 29th,
                                come spend the day with us!
                            </p>
                            <ul>
                                <li>🥎 Slow-pitch softball</li>
                                <li>🍔 Food truck</li>
                                <li>🍺 Beer garden</li>
                                <li>💈 Diamond-side barber</li>
                                <li>👑 Free midday drag performance</li>
                                <li>🌈 Queer joy & good times</li>
                                <li>🎟️ Free for spectators</li>
                            </ul>
                            <ul className="mt-4">
                                <li>
                                    📍{" "}
                                    <a
                                        target="blank"
                                        href={PARK_LINK}
                                        className="font-extrabold"
                                    >
                                        MacDonald Park, Victoria
                                    </a>
                                </li>
                                <li>📅 August 29th 9am-430pm</li>
                            </ul>
                        </div>
                    </FullWidthSection>
                    <Card cardClass="text-center card--purp">
                        <h2>Featuring 9 Awesome Teams!</h2>
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
        <FullWidthSection classNames="justify-center flex-col">
            <Image
                src="/schedule.webp"
                width={600}
                height={1000}
                alt="2026 Tournament Schedule"
            />
        </FullWidthSection>
            <a className="text-center mb-8"href="/schedule.webp" download>Click To Download</a>
        <div>
            <h2 className="text-center">But Wait, There's More!</h2>
            <FullWidthSection classNames="gap-6 justify-center  p-6">
                <Card cardClass="card--rose p-6 text-center">
                    <h2>Tournament Afterparty</h2>
                    <p>Hosted by Glitch</p>
                    <Link href="/events#afterparty">Details 👀</Link>
                </Card>
                <Card cardClass="card--blue p-6 text-center">
                    <h2>Drag Brunch</h2>
                    <p>Hosted by The Vicious Poodle</p>
                    <Link href="/events#brunch">Details 👀</Link>
                </Card>
            </FullWidthSection>
        </div>
    </>
);
export default Tournament;
