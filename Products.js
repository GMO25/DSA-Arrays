const products = function(numbers){
let result =[]
let input = [...numbers]
for (let i =0; i<numbers.length; i++){
 const multiply = (accumulator, currentValue) => accumulator * currentValue;
if (i <=0){
 input.splice(i,1)
}

if (i > 0){
 
 input.splice(i -1,1,numbers[i - 1])

}
result.push(input.reduce(multiply))
}

return result
}


let input = [1,3,9,4]
let output = [108,36,12,27]

console.log(products(input))

