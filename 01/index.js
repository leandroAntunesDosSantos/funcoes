const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
  apresentar: function () {
    let nota = this.calculandoNotas() * 2;
    console.log(
      `O aluno(a) ${
        this.aluno
      } acertou ${this.calculandoNotas()} questões e obteve nota ${nota}`
    );
  },
  calculandoNotas: function () {
    const { questoes } = prova;
    let acertos = 0;

    for (let i = 0; i < questoes.length; i++) {
      if (questoes[i].resposta === questoes[i].correta) {
        acertos = acertos + 1;
      }
    }
    return acertos;
  },
};

prova.calculandoNotas();
prova.apresentar();
