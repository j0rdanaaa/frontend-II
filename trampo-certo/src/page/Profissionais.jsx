function Profissionais() {

  const profissionais = [
    {
      nome: "Ana Souza",
      profissao: "Garçonete",
      avaliacao: "4.9"
    },
    {
      nome: "Carlos Mendes",
      profissao: "Cozinheiro",
      avaliacao: "4.8"
    },
    {
      nome: "Mariana Lima",
      profissao: "Auxiliar de Eventos",
      avaliacao: "4.7"
    }
  ];

  return (
    <main className="page">

      <h1>Profissionais</h1>

      <div className="cards">

        {profissionais.map((profissional) => (

          <div
            className="card"
            key={profissional.nome}
          >

            <h2>{profissional.nome}</h2>

            <p>{profissional.profissao}</p>

            <p>
              ⭐ {profissional.avaliacao}
            </p>

            <button
              onClick={() =>
                alert(
                  `Perfil de ${profissional.nome}`
                )
              }
            >
              Ver perfil
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Profissionais;
