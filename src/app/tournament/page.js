import Card from "../components/Card";
import FullWidthSection from "../components/FullWidthSection";
import { RULES_LINK } from "../components/nav/links";
import { PARK_LINK } from "../page";


const Tournament = () => (
    <FullWidthSection classNames="justify-center">
        <div className="p-6">
            <h1 className="text-center">2026 Tournament</h1>
            <p>Check back soon for more details! For now, here's the TLDR: </p>
            <div className="p-2 flex flex-col gap-6 md:flex-row">
                <Card cardClass="text-center card--coral">
                    <h2>Where</h2>
                    <p className="text-lg"><a target="blank" href={PARK_LINK}>MacDonald Park, Victoria, BC</a></p>
                </Card>
                <Card cardClass="text-center card--gold">
                    <h2>When</h2>
                    <p className="text-lg">Games from 9am - 5pm</p>
                    <p className="text-lg">Drag Show at 12pm</p>
                </Card>
                <Card cardClass="text-center card--purp">
                    <h2>Who</h2>
                    <p className="text-lg">9 teams travelling from across North America!</p>
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
            <p>Stickler for the rules? <a target="blank" href={RULES_LINK}>Check them out here</a></p>

        </div>
    </FullWidthSection>
);
export default Tournament;
