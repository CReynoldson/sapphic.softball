const Card = ({cardClass, children}) => (
    <div className={`card ${cardClass}`}>
        {children}
    </div>
)
export default Card