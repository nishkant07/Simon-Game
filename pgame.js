let gameseq=[];
let userseq=[];

let level=0;
let started=false;

let h3=document.querySelector("h3");

let colors=["red","yellow","purple","blue"];



document.addEventListener("keypress",()=>{
    if(started==false){
        timeintervel();
        setTimeout(levelup,4500);
    };
});

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`LEVEL ${level}`; 
    started=true;
    let randomnum= Math.floor(Math.random()*4);
    let randomcolor=colors[randomnum];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    btnflash(randombtn);
};

function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }


    }else{
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="rgb(232, 187, 232)";
        },200);
        h3.innerHTML=`GAME OVER! YOUR SCORE IS: ${level}<br>PRESS ANY KEY TO RESTART THE GAME`;
        reset();
    };
};

function btnpress(){
    btnflash(this);
    let userbtncolor=this.getAttribute("id");
    userseq.push(userbtncolor);

    check(userseq.length-1);
};

let btns=document.querySelectorAll(".btn");
    for(btn of btns){
        btn.addEventListener("click",btnpress);
    };

function btnflash(btn){
    btn.classList.add("flash");
   setTimeout(()=>{
    btn.classList.remove("flash");
   },200);
};

function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
};



function timeintervel(){
    let ti=4;
    let id=setInterval(()=>{
        ti--;
        h3.innerText=`${ti}`;
        
    },1000);
    setTimeout(()=>{
     clearInterval(id);
    },4500);
    
};