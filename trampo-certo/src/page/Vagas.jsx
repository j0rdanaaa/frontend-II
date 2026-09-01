function Vagas() {

  const vagas = [
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

  return (
    <main className="page">

      <h1>Vagas disponíveis</h1>

      <div className="cards">

        {vagas.map((vaga) => (

          <div className="card" key={vaga.cargo}>

            <h2>{vaga.cargo}</h2>

            <p>{vaga.empresa}</p>

            <strong>{vaga.valor}</strong>

            <br />

            <button
              onClick={() =>
                alert("Candidatura realizada!")
              }
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
