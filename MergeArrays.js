
const mergeArrays = function (arrays){

let merged = []
for (let i = 0; i< arrays.length; i++){
  
  for (let k = 0; k < arrays[i].length; k++){
   
   merged.push(arrays[i][k])
  }
}
return merged.sort(function(a, b) {
 return a - b;
});

}


let toSort = [[1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]]
console.log(mergeArrays(toSort))