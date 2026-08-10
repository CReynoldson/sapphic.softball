import Image from "next/image";
import Card from "./components/Card";
import FullWidthSection from "./components/FullWidthSection";
import LinkButton from "./components/LinkButton"

export const PARK_LINK =
    "https://www.google.com/maps/place/MacDonald+Park,+Niagara+St,+Victoria,+BC/@48.4175622,-123.3832453,17.13z/data=!4m6!3m5!1s0x548f74bce6829f89:0x8c56088bfa864123!8m2!3d48.4175802!4d-123.3806791!16s%2Fm%2F012z2nn9?entry=ttu";

export default async function Home() {
    return (
        <main className="flex flex-1 w-full max-w-3xl gap-3 flex-col items-center bg-cream sm:items-start p-0">
            <FullWidthSection classNames="items-center">
                <div className="image-container">
                  <Image
                      src="/wildkats.webp"
                      width={400}
                      height={400}
                      alt="The Wildkats team photo"
                  />
                </div>
                <div className="p-8">
                    <h1>Sapphic Softball</h1>
                    <p>
                        This annual tournament brings together queer women,
                        trans, Two-Spirit, and nonbinary players from across
                        North America for a day centered on fun, connection, and
                        inclusive sport.
                    </p>
                    <p>
                        Whether you're brand new to softball or have been
                        playing for years, this tournament is all about enjoying
                        the game in a welcoming, supportive, recreational
                        environment.
                    </p>
                </div>
            </FullWidthSection>

            <FullWidthSection>
                <div className="image-container">
                  <Image
                      src="/firstbase.webp"
                      width={400}
                      height={400}
                      alt="Who's on first"
                  />
                </div>
                <div className="p-8">
                    <h2>3rd Annual Tournament - Saturday, August 29th, 2026</h2>
                    <p>
                        Join us for a day of slow-pitch softball, drag, cold
                        drinks, great food, and community at{" "}
                        <a target="blank" href={PARK_LINK}>
                            MacDonald Park
                        </a>{" "}
                        in Victoria!
                    </p>
                    <p>
                        Everyone is welcome to come out, cheer on the teams, and
                        enjoy the festivities!
                    </p>
                    <p>
                        Bring your friends and family, settle in with a lawn
                        chair, grab a drink from our diamond-side beer garden,
                        enjoy delicious eats from our food trucks, catch our
                        free midday drag performance, and spend the day at the
                        ballpark.
                    </p>
                    <p>
                        Whether you know someone playing or you're just looking
                        for something fun to do, we'd love to have you there.
                    </p>
                </div>
                <div className="image-container">
                  <Image
                      src="/connie.webp"
                      width={400}
                      height={400}
                      alt="Batter up"
                  />
                </div>
            </FullWidthSection>

            <Card cardClass="card--rose p-6 m-8 mb-0">
                <h2>Registration for 2026 is now closed</h2>
                <p>
                    We're thrilled to welcome 9 teams this year from across
                    North America, making it our biggest tournament yet!
                </p>
            </Card>

            <FullWidthSection classNames="p-6">
                <Card cardClass="card--coral">
                    <h2>Congratulations to The Clam Diggers!</h2>
                    <p>Winners of the 2025 tournament at Hyacinth Park</p>
                    <div className="image-container">
                      <Image
                          src="/clam_diggers.png"
                          width={400}
                          height={400}
                          alt="The Clam Diggers team photo"
                      />
                    </div>
                </Card>
            </FullWidthSection>
            <section className="w-full p-6">
                <h2 className="text-center">Thank you to our sponsors!</h2>
                <div className="flex flex-col flex-wrap gap-8 items-center">
                    <Card cardClass="card--blue h-48">
                      <Image
                          src="/vp-logo.png"
                          width={100}
                          height={100}
                          alt="Vicious Poodle Logo"
                      />
                    </Card>
                    <Card cardClass="card--purp h-32">
                      <Image
                          src="/pabstlogo.png"
                          width={150}
                          height={150}
                          alt="Pabst Logo"
                      />
                    </Card>
                    <Card cardClass="card--gold text-center">
                      <h2>Want to become a sponsor?</h2>
                      <LinkButton label="Let Us Know!" link="mailto:volunteer@sapphicsoftball.com"/>
                    </Card>
                </div>
            </section>
        </main>
    );
}
