const array2D = function (array){
let result = []
let newArray = [...array] // new copy --> 
for (let i=0; i<array.length;i++){

    for (let k=0;k<array.length; k++){
     
      if(array[i][k] == 0){
        // ok so its found one at 01, that means we take the 1 element index and simply create an incrememnt down for the column
        // so at this point before it transforms the array - because the immutable stuff aint working
        // I need to find a way to simultaneously get all elements at row i so [i][row]
        console.log(i + 'AND' + k)
        for (let row=0;row<array.length;row++){  
      
          //newArray[i][row] = 0
          newArray[row][k] = 0
         
         }
      }
    }
 
  
}
result= newArray
return result

//console.log(array[1][1])

}

let array = [
[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

console.log(array2D(array))