const readlineSync = require('readline-sync')
const { builder } = require('./utils/ex1')

let n1 = readlineSync.question('Insert initial value: ')
let n2 = readlineSync.question('Insert final value: ')

console.log(...builder(parseInt(n1), parseInt(n2)))
