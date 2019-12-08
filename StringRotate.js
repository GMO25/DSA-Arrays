const stringRotate = function (string1,string2){


let count = 0;
if (string1.length != string2.length){
 return false 
}

for(let i=0; i<string1.length; i++){
 
 for(let j=0; j<string2.length; j++){
  if (string1[i] == string2[j]){
  
   count ++
  
   break; 
  }

  
 }

}
if (count == string2.length){
return true 
} else {
 return false 
}



}

let string1 = 'hello'
let string2 = 'plohl'

console.log(stringRotate(string1,string2))