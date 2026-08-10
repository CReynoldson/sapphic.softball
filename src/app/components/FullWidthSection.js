export default ({classNames, children}) => (
    <section className={`full-width-section ${classNames || ""} `}>
        {children}
    </section>
)