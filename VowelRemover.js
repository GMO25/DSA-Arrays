const vowelRemover = function (string,characters){

for (let i=0;i<characters.length;i++){
 if(string.includes(characters[i])){
  let regex = new RegExp (characters[i],'gi')
  string = string.replace(regex,'')
 }
}
return string
}

let input = 'Battle of the Vowels: Hawaii vs. Grozny'
let characters = 'aeiou'

console.log(vowelRemover(input,characters))