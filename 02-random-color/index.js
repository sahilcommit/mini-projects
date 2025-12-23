
function random(){
    let red=Math.floor(Math.random()*255);
    let yellow=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    return `rgb(${red},${yellow},${green})`;
};
let div=document.querySelector(".colordiv");


let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    random();
    console.log("generate random color")
    div.style.backgroundColor=random();
    let h1=document.querySelector("h1");
    h1.innerText=random();  
});