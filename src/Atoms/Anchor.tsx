interface IAnchor {
    children: string,
    href: string
}

const Anchor: React.FC<IAnchor> = (props) => {
    return (
        <a href={props.href}>{props.children}</a>
    )
}

export default Anchor;