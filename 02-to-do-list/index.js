let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let add=document.querySelector(".add");
let li=document.querySelector("li");
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

})
add.addEventListener("click",function(e){
    let newli=document.createElement("li");
    newli.innerText=inp.value;
    inp.value="";
    ul.appendChild(newli);
    let btn=document.createElement("button");
    btn.classList.add("delete");
    btn.innerText="Delete"
    newli.appendChild(btn);
});
ul.addEventListener("click",function(ev){
    
    if(ev.target.nodeName=="BUTTON"){
        let par=ev.target.parentElement;
        par.remove();
    }
    
    

});
// let delbtns=document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }