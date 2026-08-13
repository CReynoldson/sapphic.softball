export default ({className, link, label, Icon}) => (
    <a href={link} className={`link-button flex flex-row flex-nowrap gap-2 items-center ${className ? className : ""}`}>{label} {Icon ? <Icon width={16}/> : ""}</a>
)