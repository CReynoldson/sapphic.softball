import LinkButton from "./LinkButton";
import Card from "./Card";
import Image from "next/image";
export default () => (
    <section className="w-full p-6">
        <h2 className="text-center">Thank you to our sponsors!</h2>
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
            <Card cardClass="card--gold text-center">
                <h2>Want to become a sponsor?</h2>
                <LinkButton
                    label="Let Us Know!"
                    link="mailto:volunteer@sapphicsoftball.com"
                />
            </Card>
        </div>
    </section>
);
