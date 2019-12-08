const URLify = function (url){

 let regex = / /gi
return url.replace(regex,'%20')

}
let url = `www.thinkful.com /tauh ida parv een`
console.log(URLify(url))