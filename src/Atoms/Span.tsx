interface ISpan {
    children : string
} 

const Span : React.FC<ISpan> = (props) => {
    return (
        <span>{props.children}</span>
    )
}

export default Span