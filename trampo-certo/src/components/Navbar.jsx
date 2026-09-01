function Navbar({ mudarPagina }) {
    return (<nav className="navbar">
        <h2>Trampo Certo</h2> <div>
            <button onClick={() => mudarPagina("home")}>
                Início </button> <button onClick={() => mudarPagina("vagas")}>
                Vagas </button> <button onClick={() => mudarPagina("profissionais")}>
                Profissionais </button> <button onClick={() => mudarPagina("cadastro")}>
                Cadastro </button> </div> </nav>);
} export default Navbar;