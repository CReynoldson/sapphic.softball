import { VOLUNTEER_LINK, RULES_LINK, CONTACT_MAIL_LINK } from "./nav/links"
export default () => (
    <footer className="w-full h-fit bg-lavender flex flex-col p-6 text-left mt-12">
        <p className="italic font-bold">
            Sapphic Softball is grateful to play on the traditional territories of the Lekwungen Peoples.<br/>We humbly acknowledge that the Songhees, Xwsepsum, and W̱SÁNEĆ Peoples' relationships with this land have existed since time immemorial. 
        </p>
        <div className="mt-4 flex flex-col">
            <a className="nav-link w-fit" href={VOLUNTEER_LINK}>Volunteer</a>
            <a className="nav-link w-fit" href={CONTACT_MAIL_LINK}>Become A Sponsor</a>
            <a className="nav-link w-fit" href={RULES_LINK} target="blank" rel="noopener noreferrer">Tournament Rules</a>
            <a className="nav-link w-fit" href={CONTACT_MAIL_LINK}>Contact Us</a>
        </div>
        <p className="mt-4 text-center">🚧 This website is under construction 🚧</p>
        <p className="mt-4 text-center text-xs">Made with<br/>❤️🧡💛💚🩵💙💜<br/>in Victoria, BC</p>
    </footer>
)