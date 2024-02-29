const readline = require("readline-sync");

const Contato = require('./modelo');

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
