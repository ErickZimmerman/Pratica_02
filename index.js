const readline = require("readline-sync");

const controlador = require('./controlador');

const contatos = [];

function adicionarContato(){

    const nome = readline.question("Digite seu nome: ");
    const email = readline.question("Digite seu e-mail: ");
    const telefone = readline.question("Digite seu telefone com DDD: ");
    const novoContato = { nome, email, telefone }; // new Object(nome, preco)
    contatos.push(novoContato)
}

function listarContato(){
    contatos.forEach((contato) => console.log(contatos.toString));
      }

      function menu() {
        console.log("1. Adicionar");
        console.log("2. Listar");
        console.log("3. Buscar");
        console.log("4. Atualizar");
        console.log("5. Remover");
        console.log("6. Sair");
      }

      function buscarContato(){

      }

function escolherOpcao(opcao) {
    switch (opcao) {
      case "1":
        adicionarContato();
        break;
      case "2":
        listarContato();
        break;
      case "3":
        buscar();
        break;
      case "4":
        atualizar();
        break;
      case "5":
        remover();
        break;
      case "6":
        process.exit(0);
      default:
        console.log("\nOpção invalida\n");
    }
    readline.question("Pressione ENTER para continuar...");
  }
  
  function main() {
    while (true) {
      menu();
      const opcao = readline.question("Entre com uma opcao: ");
      escolherOpcao(opcao);
    }
  }

  main();