interface IButton {
    disabled : boolean,
    children : string,
    OnSubmit : () => void
}

const Button : React.FC<IButton> = (props) => {
    return (
        <button disabled={props.disabled} onSubmit={() => {props.OnSubmit}}>{props.children}</button>
    )
}

export default Button