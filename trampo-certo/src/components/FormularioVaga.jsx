import { useState } from "react";

function FormularioVaga({ adicionarVaga }) {
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [valor, setValor] = useState("");

  function cadastrarVaga(event) {
    event.preventDefault();

    const novaVaga = {
      cargo: cargo,
      empresa: empresa,
      valor: valor
    };

    adicionarVaga(novaVaga);

    setCargo("");
    setEmpresa("");
    setValor("");
  }

  return (
    <section>
      <h2>Cadastrar nova vaga</h2>

      <form onSubmit={cadastrarVaga}>
        <label>
          Cargo:
          <input
            type="text"
            value={cargo}
            onChange={(event) => setCargo(event.target.value)}
          />
        </label>

        <label>
          Empresa:
          <input
            type="text"
            value={empresa}
            onChange={(event) => setEmpresa(event.target.value)}
          />
        </label>

        <label>
          Valor:
          <input
            type="text"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </label>

        <button type="submit">Cadastrar vaga</button>
      </form>
    </section>
  );
}

export default FormularioVaga;