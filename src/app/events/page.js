import Image from "next/image";
import { ExternalLink, Phone } from "lucide-react";
import FullWidthSection from "../components/FullWidthSection";
import LinkButton from "../components/LinkButton";

const Events = () => (
    <div className="lg:py-16 lg:px-24">
    <FullWidthSection classNames="lg:gap-6 justify-evenly">
            <div className="p-6 lg:w-1/2">
                <h2>Afterparty August 29th</h2>
                <p>
                    Come celebrate another year of Sapphic Softball with a night of retro arcade games, drag, burlesque, sports games, boozy slushies, and unapologetic queer joy.
                </p>
                <p>
                    Whether you spent the day on the diamond, were cheering from the sidelines, or just want to come party with us after the games, everyone’s invited! Come challenge your friends to a game, grab a slushie, watch some extremely queer entertainment, and keep the party going long after the final inning 🏳️‍🌈✨️
                </p>
                <h3>Featuring Performances By:</h3>
                <ul className="team-list text-left">
                    <li>Blaze O'Glory</li>
                    <li>Ubezza Ramirez Dewme</li>
                    <li>Reign O'Glory</li>
                    <li>Poppy Petals</li>
                </ul>
                <p>Bring your teammates, your crush, your friends, and your competitive arcade energy. Game on!</p>
                <LinkButton link="https://www.eventbrite.ca/e/1997795618474?aff=oddtdtcreator" label="Get Tickets" className="link-button--blue" Icon={ExternalLink}/>
            </div>
            <div className="order-first lg:order-last lg:w-1/3">
                <div id="afterparty" className="image-container">
                    <Image
                        src="/afterparty.webp"
                        width={400}
                        height={600}
                        loading="eager"
                        alt="afterparty announcement poster"
                    />
                </div>
            </div>
        </FullWidthSection>
        <FullWidthSection classNames="items-center lg:p-6 lg:gap-6 justify-evenly">
            <div className=" lg:w-1/3">
                <div id="brunch" className="image-container">
                    <Image
                        src="/drag_brunch.png"
                        width={400}
                        height={600}
                        alt="drag brunch announcement poster"
                    />
                </div>
            </div>
            <div className="p-6 lg:w-1/2">
                <h2>Drag Brunch August 30th</h2>
                <p>
                    Join us Sunday, August 30 at 1:30 PM at The Vicious Poodle
                    for a sapphic sports drag brunch, an official part of
                    Sapphic Softball Tournament weekend!
                </p>
                <p>
                    Expect drag, brunch, drinks, and lots of queer joy,
                    including a performance from Sapphic Softball founder and
                    organizer, Blaze O’Glory 🥎✨️🏳️‍🌈
                </p>
                <p>
                    Whether you played, cheered, volunteered, or just want to
                    join us, everyone is welcome!
                </p>
                <a href="tel:2503885975" className="flex items-center gap-3">
                    <Phone /> Reserve A Table!
                </a>
            </div>
        </FullWidthSection>
    </div>
);
export default Events;
