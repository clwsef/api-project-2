const jokeContainer=document.querySelector('#joke')
const btn=document.querySelector('#btn')
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
let getJoke=()=>{
    jokeContainer.classList.remove('fade')

}
