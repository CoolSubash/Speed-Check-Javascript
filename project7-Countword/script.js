let wordlength=document.querySelector("#word-length");
let textbox=document.querySelector(".text-wordarea");
let characterlength=document.querySelector("#character-length");
let min = 0
let sec = 0
let time = document.querySelector('#time')
let wordperminute=0;

function timercall() {
setInterval(() => {
 sec++
 if (sec === 60) {
   sec = 0
   min++
   time.textContent = `${min} min ${sec} sec `
 } else {
   time.textContent = `${min} min ${sec} sec`
 }
}, 1000)
}


function countword(e){
 let word=document.querySelector("#word").value;
     

     const newword= word.split(' ').filter((e)=>{
     return e != '';
    })
    const character=newword.join('');

    
    




if(e.keyCode === 8 || e.keyCode === 46){
 if(newword.length===0){
     wordlength.innerHTML=0;
    
 }else{
     wordlength.innerHTML=newword.length;
     characterlength.innerHTML=character.length-1;
 }


 
}else{
  wordlength.innerHTML=newword.length;
 characterlength.innerHTML=character.length+1;


}
if(character.length === 0){
 timercall();
}


}

textbox.addEventListener("keydown",countword);

