import LinkButton from "./LinkButton";
import Card from "./Card";
import Image from "next/image";

const logos = [
    {
        src: "/glitch_logo.webp",
        width: 150,
        height: 150,
        alt: "Glitch Logo",
        class: "card--gold",
    },
    {
        src: "/tthe_logo.png",
        width: 150,
        height: 150,
        alt: "TTHE Logo",
        class: "card--blue",
    },
    {
        src: "/bishops_logo.jpg",
        width: 150,
        height: 150,
        alt: "Bishops Barbershop Logo",
        class: "card--coral",
    },
    {
        src: "/float_house_logo.png",
        width: 150,
        height: 150,
        alt: "Float House Victoria Logo",
        class: "card--purp",
    },
    {
        src: "/fired_up_logo.webp",
        width: 150,
        height: 150,
        alt: "Fired Up Logo",
        class: "card--coral",
    },
    {
        src: "/alphabet_sports_logo.png",
        width: 150,
        height: 150,
        alt: "Alphabet Sports Collective Logo",
        class: "card--rose",
    },
    {
        src: "/the_old_hat.png",
        width: 150,
        height: 150,
        alt: "The Old Hat Logo",
        class: "card--gold",
    },
    {
        src: "/butterfly_gardens_logo.png",
        width: 150,
        height: 150,
        alt: "Butterfly Gardens Logo",
        class: "card--purp",
    },
];

export default () => (
    <section className="w-full p-6">
        <h2 className="text-center">Thank you to our sponsors and supporters!</h2>
        <div className="flex flex-col flex-wrap gap-8 items-center lg:flex-row lg:justify-center">
            <Card cardClass="card--image card--purp h-32">
                <Image
                    src="/pabstlogo.png"
                    width={150}
                    height={150}
                    alt="Pabst Logo"
                />
            </Card>
            <Card cardClass="card--image card--blue h-48">
                <Image
                    src="/vp-logo.png"
                    width={100}
                    height={100}
                    alt="Vicious Poodle Logo"
                />
            </Card>
            <Card cardClass="card--image card--rose h-48">
                <Image
                    src="/malahat_skywalk_logo.jpg"
                    width={200}
                    height={100}
                    alt="Malahat Skywalk Logo"
                />
            </Card>
            {logos.map((logo, index) => (
                <Card cardClass={`card--image ${logo.class}`} key={index}>
                    <Image
                        src={logo.src}
                        width={logo.width}
                        height={logo.height}
                        alt={logo.alt}
                    />
                </Card>
            ))}
            <Card cardClass="card--gold text-center">
                <h2>Want to become a sponsor?</h2>
                <LinkButton
                    className="inline-block"
                    label="Let Us Know!"
                    link="mailto:volunteer@sapphicsoftball.com"
                />
            </Card>
        </div>
    </section>
);
