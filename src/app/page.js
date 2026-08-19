import Image from "next/image";
import Card from "./components/Card";
import FullWidthSection from "./components/FullWidthSection";
import Sponsors from "./components/Sponsors";

export const PARK_LINK =
    "https://www.google.com/maps/place/MacDonald+Park,+Niagara+St,+Victoria,+BC/@48.4175622,-123.3832453,17.13z/data=!4m6!3m5!1s0x548f74bce6829f89:0x8c56088bfa864123!8m2!3d48.4175802!4d-123.3806791!16s%2Fm%2F012z2nn9?entry=ttu";

export default async function Home() {
    return (
        <main className="flex flex-1 w-full gap-3 flex-col items-center bg-cream p-0">
            <FullWidthSection classNames="items-center flex-col lg:flex-row">
                <div className="image-container">
                    <Image
                        src="/firstbase.webp"
                        width={400}
                        height={400}
                        alt="Outrunning a play to first"
                    />
                </div>
                <div className="p-8">
                    <h1 className="text-center lg:text-left">
                        Sapphic Softball
                    </h1>
                    <p>
                        Sapphic Softball was founded by a sports gay who wanted
                        to play softball with their friends in a fun queer
                        environment. It's a place where you can care deeply
                        about the game, be gloriously bad at softball, or fall
                        anywhere in between.
                    </p>
                    <p>
                        What started as an experiment in queer
                        community-building has grown into an annual
                        women’s/trans/two-spirit/nonbinary inclusive softball
                        weekend in Victoria, B.C. in 2026, 100+ players from
                        across North America will come together for the third
                        annual tournament and a day centered on softball, fun,
                        and inclusion in sport.
                    </p>
                    <p>
                        Whether you’re brand new to softball, have been playing
                        for years, or just want to come out and cheer on these
                        amazing players and teams, you’re welcome here. Sapphic
                        softball is all about enjoying the game, building queer
                        community, and creating a welcoming and supportive
                        recreational environment.
                    </p>
                    <ul>
                        <li>🥎 Brand new to softball? Come play!</li>
                        <li>📣 Not playing? Come cheer!</li>
                        <li>🌈 Queer? You're in the right place!</li>
                    </ul>
                </div>
            </FullWidthSection>
            <h2 className="hidden lg:block mb-0 mt-1 pt-10 text-center">
                <span className="text-4xl">Saturday, August 29th, 2026</span>
                <br />
                3rd Annual Tournament
            </h2>
            <FullWidthSection classNames="lg:flex-wrap">
                <div className="image-container lg:hidden">
                    <Image
                        src="/high_fives.webp"
                        width={400}
                        height={400}
                        alt="Who's on first"
                        className="desktop-contain"
                    />
                </div>
                <div className="p-8 lg:order-2">
                    <h2 className="lg:hidden text-center">
                        <span className="text-4xl">
                            Saturday, August 29th, 2026
                        </span>
                        <br />
                        3rd Annual Tournament
                    </h2>
                    <p>
                        Join us for a full day of slow-pitch softball, drag,
                        cold drinks, and unapologetic queer joy at{" "}
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
                        Everyone is welcome to come cheer on the teams, soak up
                        the atmosphere, and enjoy a day at the ballpark.
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
                        Whether you know someone on the field, love softball,
                        want to see some drag, or are simply looking for
                        something fun to do on August 29th, come spend the day
                        with us!
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
                <div className="image-container lg:order-1">
                    <Image
                        src="/connie.webp"
                        width={400}
                        height={400}
                        alt="Batter up"
                        className="desktop-contain"
                    />
                </div>
            </FullWidthSection>
            <FullWidthSection classNames="justify-center">
                <Image
                src="/schedule.webp"
                width={600}
                height={1000}
                alt="2026 Tournament Schedule"
            />
            </FullWidthSection>
            <a className="text-center mb-8"href="/schedule.webp" download>Click To Download</a>
            <Card cardClass="card--rose p-6 m-8 lg:mt-0 mb-0">
                <h2 className="text-center">
                    Registration for 2026 is now closed
                </h2>
                <p>
                    We're thrilled to welcome 9 teams this year from across
                    North America, making it our biggest tournament yet!
                </p>
            </Card>
            <FullWidthSection classNames="p-6">
                <Card cardClass="card card--coral w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:gap-2">
                    <div>
                        <h2>Congratulations to The Clam Diggers!</h2>
                        <p>
                            🏆 Winners of the 2025 tournament at Hyacinth Park
                        </p>
                    </div>
                    <div className="image-container lg:w-1/2 shrink lg:max-w-128">
                        <Image
                            src="/clam_diggers.png"
                            width={400}
                            height={400}
                            alt="The Clam Diggers team photo"
                            className="rounded-md"
                        />
                    </div>
                </Card>
            </FullWidthSection>
            <Sponsors />
        </main>
    );
}
