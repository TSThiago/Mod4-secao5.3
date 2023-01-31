import Anchor from "../Atoms/Anchor";

const Header : React.FC = () => {
    return (
        <header>
            <Anchor href="/">Cadastro de Empréstimo</Anchor>
            <Anchor href="/filter">Filtro</Anchor>
        </header>
    )
}

export default Header;