import { VOLUNTEER_LINK, RULES_LINK, CONTACT_MAIL_LINK } from "./nav/links"
export default () => (
    <footer className="w-full h-fit bg-lavender flex flex-col p-6 text-left mt-12">
        <p className="italic font-bold">
            Sapphic Softball is grateful to play on the traditional territories of the Lekwungen Peoples.<br/>We humbly acknowledge that the Songhees, Xwsepsum, and W̱SÁNEĆ Peoples' relationships with this land have existed since time immemorial. 
        </p>
        <div className="mt-4 flex flex-col lg:flex-row lg:justify-evenly">
            <a className="w-fit" href={VOLUNTEER_LINK}>volunteer</a>
            <a className="w-fit" href={CONTACT_MAIL_LINK}>become a sponsor</a>
            <a className="w-fit" href={RULES_LINK} target="blank" rel="noopener noreferrer">tournament rules</a>
            <a className="w-fit" href={CONTACT_MAIL_LINK}>contact us</a>
        </div>
        <p className="mt-2 text-center">🚧 This website is under construction 🚧</p>
        <p className="mt-2 text-center text-xs">Made with<br/>❤️🧡💛💚🩵💙💜<br/>in Victoria, BC</p>
    </footer>
)