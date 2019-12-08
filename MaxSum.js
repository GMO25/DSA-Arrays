
const maxSum = function (array){

let max = 0;
let rt = 0;

for (let i =0; i<array.length; i++){
 rt += array[i]
 if (rt < array[i]){
  rt = array[i]
 }
 if (max < rt){
  max = rt
 }
}
return max


}


let input = [4, 6, -3, 5, -2, 1]

console.log(maxSum(input))