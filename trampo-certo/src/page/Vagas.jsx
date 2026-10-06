import { useEffect, useState } from "react";
import FormularioVaga from "../components/FormularioVaga";

function Vagas() {

  const vagasIniciais = [
    {
      cargo: "Garçom",
      empresa: "Hotel Floripa",
      valor: "R$ 180"
    },
    {
      cargo: "Cozinheiro",
      empresa: "Restaurante Central",
      valor: "R$ 220"
    },
    {
      cargo: "Auxiliar de Eventos",
      empresa: "Eventos Floripa",
      valor: "R$ 160"
    }
  ];

  const [vagas, setVagas] = useState(() => {
    const vagasSalvas = localStorage.getItem("vagas");

    if (vagasSalvas) {
      return JSON.parse(vagasSalvas);
    }

    return vagasIniciais;
  });

  useEffect(() => {
    localStorage.setItem("vagas", JSON.stringify(vagas));
  }, [vagas]);

  function adicionarVaga(novaVaga) {
    setVagas([...vagas, novaVaga]);
  }

  return (
    <main className="page">

      <FormularioVaga adicionarVaga={adicionarVaga} />

      <h1>Vagas disponíveis</h1>

      <div className="cards">

        {vagas.map((vaga, index) => (
          <div className="card" key={index}>

            <h2>{vaga.cargo}</h2>

            <p>{vaga.empresa}</p>

            <strong>{vaga.valor}</strong>

            <br />

            <button
              onClick={() => alert("Candidatura realizada!")}
            >
              Candidatar-se
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}

export default Vagas;