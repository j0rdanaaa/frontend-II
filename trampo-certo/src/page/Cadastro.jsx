import { useState } from "react";

function Cadastro() {

  const [nome, setNome] = useState("");

  function cadastrar(event) {

    event.preventDefault();

    alert(`Cadastro realizado para ${nome}!`);
  }

  return (
    <main className="page">

      <h1>Cadastro</h1>

      <form onSubmit={cadastrar}>

        <label>
          Nome
        </label>

        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(event) =>
            setNome(event.target.value)
          }
        />

        <label>
          E-mail
        </label>

        <input
          type="email"
          placeholder="Digite seu e-mail"
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

    </main>
  );
}

export default Cadastro;
