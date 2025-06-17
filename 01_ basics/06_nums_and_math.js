const score =400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const othernumber=123.87379
console.log(othernumber.toPrecision(3))
console.log(othernumber.toPrecision(4))
console.log(othernumber.toPrecision(5))

const hundreds=1000000000
console.log(hundreds.toLocaleString('en-in'))

/********************************************************************************************** */

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.854))
// console.log(Math.ceil(4.854))
// console.log(Math.floor(4.854))
// console.log(Math.min(4,3,2,1))
// console.log(Math.max(4.,7,5,3))
// console.log(Math.random().toPrecision(3))

const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) /*******Important******** */
console.log(Math.random())