const memoryfile = require('./memory')
const memory = new memoryfile

class Array {
 constructor() {  
  this.length = 0;
  this._capacity = 0;
  this.ptr = memory.allocate(this.length)
 }
 push(value){
  
  if(this.length >=this._capacity){
   this._resize((this.length + 1) * Array.SIZE_RATIO)
  }
 
  memory.set(this.ptr + this.length,value); 
  this.length++;  
 }
 get(index){
  if(index < 0 || index >= this.length){
   throw new Error('Index error');
  }
 
  return memory.get(this.ptr + index) 
 }
 pop(){
  if(this.length == 0){
   throw new Error('Index error')
  }
  const value = memory.get(this.ptr + this.length -1)  // 3 + 4 -1 = 6 memory.get(6) returns the value at 6 
  this.length--;  // length becomes 3 
  return value; // return the value that you just got 
 }
 insert(index,value){
  if(index < 0 || index >= this.length){
   throw new Error('Index error')
  }
  if(this.length >= this._capacity){
   this._resize((this.length + 1) * Array.SIZE_RATIO)
  }
  memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index )
  memory.set(this.ptr + index,value)
  this.length ++
 }
 remove(index){
  if (index < 0 || index >= this.length){
   throw new Error('Index error')
  }
  memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index -1)
  this.length--;
 }
 _resize(size){
  const oldPtr = this.ptr;
  this.ptr = memory.allocate(size);
  if(this.ptr === null){
   throw new Error('Out of memory')
  }
  memory.copy(this.ptr,oldPtr,this.length);
  memory.free(oldPtr);
  this._capacity = size;
 }
}
Array.SIZE_RATIO = 3; 

function main(){

 Array.SIZE_RATIO = 3;

 // Create an instance of the Array class
 let arr = new Array(); 

 // Add an item to the array
 arr.push("tauhida")
  console.log(arr.get(0))
 console.log(arr);

}
main()

//1) length 1, capacity 3 , ptr 0 
//2) length 4, capacity 12, ptr 3
// Explanation - push is called detects the length is >= capacity and triggers a resize which in turn causes an increase in capacity 
// as well as a copy/extension of those previous values --> as well as a ptr increase to 3 
// Finally the new value is set that you wished to push in 
// 3) length 1, capacity 12, ptr 3 
// capacity remains the same but length is decremented and value is returned 
// 4) console.log(arr.get(0)) --> returns 5 
// NaN - not a number float64Array must only accept numbers 
// the purpose of the resize function is to increase the size of memory reserved for values to be added by a ratio of 3 * the length to increase
// performance and reduce number of operations 