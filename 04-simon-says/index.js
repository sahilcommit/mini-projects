let red=document.querySelector(".red");
let yellow=document.querySelector(".blue");
let green=document.querySelector(".green");
let blue=document.querySelector(".yellow");
let body=document.querySelector("body");
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let boxes=["red","yellow","green","blue"];
let gameSeq=[];
let playerSeq=[];
let gameStarted=false;
let highScore=0;

let level=0;
document.addEventListener("keypress",function(){
    if(gameStarted==false){
        gameStarted=true;
        levelUp();
    }
    
    h2.innerText=`level ${level}`;
    
});
function gameFlash(randbox){
    randbox.classList.add("flash");
    setTimeout(function(){
        randbox.classList.remove("flash");
    },250);
    
    console.log(`level is ${level}`);
}

function playerFlash(randbox){
    randbox.classList.add("flashPlayer");
    setTimeout(function(){
        randbox.classList.remove("flashPlayer");
    },250);
    
    console.log(`level is ${level}`);
}

function playerPress(){
    let box=this;
    playerFlash(box);
    let playerBox=box.classList[0];

    console.log(playerBox);
    if(gameStarted==true){
        playerSeq.push(playerBox);
        console.log(playerSeq);
        let idx=playerSeq.length-1;
        checkResult(idx);

    };
}


let allBox=document.querySelectorAll(".box");
for(box of allBox){
    box.addEventListener("click",playerPress);
    
}



function levelUp(){
    playerSeq=[];
    level++;
    
    h2.innerText=`level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randBox=boxes[random];
    let playerBox=document.querySelector(`.${randBox}`);
    gameSeq.push(randBox);
    console.log(gameSeq);
    console.log(randBox); 
    gameFlash(playerBox);
    

}
function high(){
    if(level>highScore){
        highScore=level-1;
        h3.innerText=`High Score: ${highScore}`;

    };

}

function checkResult(idx){
    
    if(gameSeq[idx]==playerSeq[idx]){
        if(gameSeq.length==playerSeq.length){
            setTimeout(levelUp,1000);
        };  
    }
    else{
        h2.innerText="Game Over ! Press any key to restart";
        high();
        body.classList.add("end");
       setTimeout(function(){
        body.classList.remove("end");
       },250);
        gameSeq=[];
        userSeq=[];
        gameStarted=false;
        level=0;
    }
}
