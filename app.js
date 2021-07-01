const livros = require('./database')
//console.log(livros)

// pegar o input 

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

// Sim -> mostrar categorias disponiveis, pergunta qual categoria ela escolhe
//Não -> mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade e estilo de vida/', 'História brasileira/', 'Américas/',
        'História/', 'Romance/', 'Psicanalise/', 'Tecnologia')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.páginas - b.páginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdenados)

}

