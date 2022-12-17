// CommonJS - every file is a module by default
// Modules - encapsulated code that only share the minimum

// 4-names
// SYNTAX METHOD
// const {john, peter} = require('./examples/4-names')
// sayHi(john)
// sayHi(peter)

// OR

// SYNTAX METHOD
// const names = require('./examples/4-names')
// const {john, peter} = names
// sayHi(john)
// sayHi(peter)

// OR

// SYNTAX METHOD
const names = require('./examples/4-names')
sayHi(names.john)
sayHi(names.peter)

// 5-utils function
const sayHi = require('./examples/5-utils')

// 6- alternative-flavor
const data = require('./examples/6-alternative-flavor')
// console.log(data)

// 7 - mind grendate
// ###### When you import/require a function, you are invoking the code. IF you invoke the code in the module file (call the function), you don't need to assign it to a variable in another file. you can just require it and run the code ######
require('./examples/7-mind-grenade')
// if you invoke a function inside a module, the code will run even if you don't assign it to a variable and invoke the variable.
