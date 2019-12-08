const filterArray = function (arr){
let result = [];
for (let i = 0;i<arr.length;i++){
 if (arr[i] > 5){
   result.push(arr[i])
 }
}
return result

}
let arr = [1,2,6,10,3,21]
console.log(filterArray(arr))