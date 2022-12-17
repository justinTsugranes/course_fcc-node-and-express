const num1 = 5
const num2 = 10

function addValues(){
  console.log(`the sum is: ${num1 + num2}`)
}

// ###### When you import/require a function, you are invoking the code. IF you invoke the code in the module file (call the function), you don't need to assign it to a variable in another file. you can just require it and run the code ######
addValues()