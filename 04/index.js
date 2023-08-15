const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar: function (valor) {
    let valorAdicionar = valor;
    this.saldo = this.saldo + valorAdicionar;
    this.historicos.push({ tipo: "deposito", valor: valorAdicionar });
    return `Deposito de R$${valorAdicionar / 100} realizado para o cliente: ${
      this.nome
    }`;
  },
  sacar: function (valor) {
    let valorRetirar = valor;
    if (valorRetirar >= this.saldo) {
      return `Saldo insuficiente para o saque de: ${this.nome}`;
    } else if (valorRetirar < this.saldo) {
      this.saldo = this.saldo - valorRetirar;
      this.historicos.push({ tipo: "Saque", valor: valorRetirar });
      return `Saque de R$${valorRetirar / 100} realizado para o cliente: ${
        this.nome
      }`;
    }
  },
  extrato: function () {
    console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`);
    console.log(`Histórico:`);
    historicos = this.historicos;
    for (let i = 0; i < historicos.length; i++) {
      console.log(`${historicos[i].tipo} de $${historicos[i].valor / 100}`);
    }
  },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
