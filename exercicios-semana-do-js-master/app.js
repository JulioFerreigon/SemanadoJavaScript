/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/
/*como eu fiz o exercicio:

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const imparNumbers = randomNumbers.filter( item => {
  if (item % 2 != 0) {
    return item
  }
})
console.log(imparNumbers);

*/

/* como o professor fez*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumbers = randomNumber => randomNumber % 2 === 1
const oddNumbers = randomNumbers.filter(getOddNumbers)

console.log(oddNumbers)
/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/
/* como eu fiz o exercicio:

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const filterNumbers = crazyNumbers.filter( item => {
  if ( item < 501) {
    return item
  }
})
const contando = filterNumbers.length
console.log(contando)


*/

/* como o professor fez */

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const countNumbersLessThan501 = (accumulator, crazyNumbers) => 
  crazyNumbers < 501 ? ++accumulator : accumulator

const numberLessThan501 = crazyNumbers.reduce(countNumbersLessThan501, 0)
console.log(numberLessThan501)

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e 
    exiba o novo array no console.
*/

/*esse eu fiz igual o professor mesmo*/
const numbers = [5, 7, 3]

const quadradonumbers = numbers.map( item => item ** 2 )
console.log(quadradonumbers)
/*
  04

  - Utilizando o array abaixo, gere um novo array com apenas os filmes lançados 
    antes do ano 2000;
  - Exiba o novo array no console.
*/
/* como eu fiz o exercicio:

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const filterMoves = tarantinoMovies.filter ( item => {
  if(item.release < 2000) {
    return item
  }
})
console.log(filterMoves)

*/
/* como o professor fez */ 

const tarantinoMovies = [
  { name: 'Bastardos inglórios', release: 2009 },
  { name: 'Pulp Fiction', release: 1994 },
  { name: 'Kill Bill: Volume 2', release: 2004 },
  { name: 'Quatro Quartos', release: 1995 },
  { name: 'Sin City', release: 2005 },
  { name: 'Era uma Vez em... Hollywood', release: 2019 },
  { name: 'Django Livre', release: 2012 },
  { name: 'Cães de Aluguel', release: 1992 },
  { name: 'À Prova de Morte', release: 2007 },
  { name: 'Kill Bill: Volume 1', release: 2003 }
]

const filterMoves = tarantinoMovies.filter ( ({ release }) => release < 2000)
console.log(filterMoves)

/*
  05

  - Gere um novo array que contém apenas os nomes das séries abaixo;
  - Exiba o novo array no console.    
*/
/*Essa eu confundi o exercício e acabei fazendo mais do que o pedido :

const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const nameShow = tvShows.map( tvShows => {
  if (tvShows.name != 0) {
    return{name:tvShows.name}
  }
  return name
})
console.log(nameShow)
*/
/*o professor fez assim*/
const tvShows = [
  { name: 'Breaking Bad', releaseYear: 2008 },
  { name: 'Mr. Robot', releaseYear: 2015 },
  { name: 'True Detective', releaseYear: 2014 },
  { name: 'Hannibal', releaseYear: 2013 },
  { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
  { name: 'House M.D.', releaseYear: 2004 },
  { name: 'Watchmen', releaseYear: 2019 }
]

const showNames = tvShows.map(({ name }) => name)

console.log(showNames)

/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/
 /*como eu fiz o exercicio: (foi um garrancho) */

 /* 
 const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const nameGames = cart.reduce( name => (`- ${cart[0].name} \n- ${cart[1].name} \n- ${cart[2].name} \n- ${cart[3].name} \n- ${cart[4].name}`))

console.log(nameGames)
*/

/* como professor fez (muito mais funcional)*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

/*
  - Nome 1
  - Nome 2
  - Nome 3
*/

const productList = cart.reduce( (accumulator,{ name }) =>
  `${accumulator}- ${name}\n`, '')

console.log(productList)
