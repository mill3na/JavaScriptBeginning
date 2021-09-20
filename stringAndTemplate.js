// Strings

const escola = 'Cod3r'
console.log(escola.charAt(5)) // >> r. This returns the value of the index 5
console.log(escola.charCodeAt(3)) // > 3. This returns the ASCII code of the value in 3th position
console.log(escola.indexOf('3')) // >> 3. This returns the index of the value '3'
console.log(escola.substring(1)) // >> od3r. This returns the string from de index 1 to the end
console.log(escola.substring(0, 3)) // >> Cod. This returns the string from de index 0 to the index 2. It doesn't envolve the 3 index

console.log('Escola '.concat(escola).concat('!'))// >> Escola Cod3r!. Just concatenate things.

console.log(escola.replace(/\d/g, 'e')) // >> Coder. This replaces all the digits [g identifier] for 'e'. You can also use the simple replace using replace('x', 'y'). It will make the substitution at the first ocurrence of 'x'

console.log('Ana, Maria, Pedro'.split(',')) // >> ['Ana', 'Maria', 'Pedro']. This returns the string on a list, using ',' as divider 

//Template

const nome = 'Rebeca'
const template = `
    Olá ${nome}!
    Tudo bem? `
    
console.log(template) // this will show exactly as you typed, with the line breaks. Use crasis [``] for that.

console.log(`1 + 1 = ${1+1}`) // >> 1 + 1 = 2. Doesn't make the sum at the first part (would do if you use [' 1 + 1'] or [" 1 + 1 "].

const up = texto => texto.toUpperCase() // >> simple function that put strings in upper case.

console.log(`Ei... ${up('cuidado')}!`)// >> Ei... CUIDADO!
