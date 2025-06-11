const name="Bhavyansh"
const repoCount=50

//console.log(name +repoCount+" value")
console.log(`Hello my name is ${name} and mr repo is ${repoCount}`)
const gamename=new String("Bhavyansh-Sangwani")
console.log(gamename)


const newString=gamename.substring(5,9)
console.log(newString)
//.sbstring prints the substring of the string
const AnotherString=gamename.slice(-8,4)
console.log(AnotherString)

const str="   Bhavyansh   "
console.log(str)
console.log(str.trim())

const url="https://hitesh.com/bhavyansh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'))
console.log(url.split('-'))
