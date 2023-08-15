const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    let cliente = this.nomeDoCliente;
    console.log(`Cliente: ${cliente}`);
    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
    console.log(`Total a pagar: R$${this.calcularTotalAPagar()}`);
  },
  addProduto: function (produto) {
    let { produtos } = this;
    let somatorio = 0;
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].id === produto.id) {
        somatorio = somatorio + 1;
        produtos[i].qtd = produtos[i].qtd + produto.qtd;
      }
    }
    if (somatorio === 0) {
      produtos.push(produto);
    }
  },
  imprimirDetalhes: function () {
    let produtos = this.produtos;
    console.log(`Cliente: ${this.nomeDoCliente}`);
    for (let i = 0; i < this.produtos.length; i++) {
      console.log(
        `Item ${produtos[i].id} - ${produtos[i].nome} - ${
          produtos[i].qtd
        } und - R$ ${produtos[i].precoUnit / 100}`
      );
    }
    console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
    console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
  },
  calcularTotalDeItens: function () {
    let produtos = this.produtos;
    let qtd = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      qtd += produtos[i].qtd;
    }
    return qtd;
  },
  calcularTotalAPagar: function () {
    let produtos = this.produtos;
    let totalAPagar = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      totalAPagar += produtos[i].precoUnit * produtos[i].qtd;
    }
    return totalAPagar / 100;
  },
  calcularDesconto: function () {
    let produtos = this.produtos;
    let produtoMenorValor1 = 10000000;

    let produtoMenorValor2 = 0;

    if (this.calcularTotalDeItens() > 4) {
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].precoUnit < produtoMenorValor1) {
          produtoMenorValor1 = produtos[i].precoUnit;
        }
      }
    }
    if (this.calcularTotalAPagar() > 100) {
      produtoMenorValor2 = this.calcularTotalAPagar() * 0.9;
    }
    let produtoMenorValor1DeGraca = produtoMenorValor1 / 100;
    if (produtoMenorValor1DeGraca >= produtoMenorValor2) {
      console.log(produtoMenorValor1DeGraca);
    } else {
      console.log(produtoMenorValor2);
    }
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};

carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();

carrinho.imprimirDetalhes();

carrinho.calcularDesconto();
