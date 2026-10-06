import { useState } from "react";

function FormularioVaga({ adicionarVaga }) {
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [valor, setValor] = useState("");

  function cadastrarVaga(event) {
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (!cargo.trim() || !empresa.trim() || !valor.trim()) {
      alert("Preencha todos os campos para cadastrar a vaga.");
      return;
    }

    const novaVaga = {
      cargo: cargo,
      empresa: empresa,
      valor: valor
    };

    adicionarVaga(novaVaga);

    // Limpa os campos depois do cadastro
    setCargo("");
    setEmpresa("");
    setValor("");
  }

  return (
    <section className="formulario-vaga">
      <h2>Cadastrar nova vaga</h2>

      <form onSubmit={cadastrarVaga}>

        <label htmlFor="cargo">Cargo</label>
        <input
          id="cargo"
          type="text"
          placeholder="Ex: Garçom"
          value={cargo}
          onChange={(event) => setCargo(event.target.value)}
        />

        <label htmlFor="empresa">Empresa</label>
        <input
          id="empresa"
          type="text"
          placeholder="Ex: Hotel Floripa"
          value={empresa}
          onChange={(event) => setEmpresa(event.target.value)}
        />

        <label htmlFor="valor">Valor</label>
        <input
          id="valor"
          type="text"
          placeholder="Ex: R$ 180"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />

        <button type="submit">
          Cadastrar vaga
        </button>

      </form>
    </section>
  );
}

export default FormularioVaga;