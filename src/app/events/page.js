import Image from "next/image";
import { Phone } from "lucide-react";
import FullWidthSection from "../components/FullWidthSection";

const Events = () => (
    <>
        <FullWidthSection classNames="items-center">
            <Image
                src="/drag_brunch.png"
                width={400}
                height={600}
                alt="drag brunch announcement poster"
            />
            <div className="p-6">
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
        <FullWidthSection>
            <div className="p-6">
                <h2>More Events Coming Soon!</h2>
                <p>
                    Check back here or{" "}
                    <a
                        href="https://www.instagram.com/sapphic.softball"
                        target="blank"
                    >
                        follow us on Instagram
                    </a>{" "}
                    for updates!
                </p>
            </div>
        </FullWidthSection>
    </>
);
export default Events;
