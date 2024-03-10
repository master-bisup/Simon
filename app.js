let userS=[];
let gameS=[];
let btn=document.querySelectorAll(".b"); 
let btnColor=["red","green","yellow","blue"];
let started=false;
let level=-1;
let h2=document.querySelector("h2");
let startBtn=document.querySelector(".start");

startBtn.addEventListener("click",function(){
    startBtn.innerText="Started";
    if(started==false){
        started=true;
        levelUp();
    }
    
});

function btnFlash(idx){
   idx.classList.add("flash");
   setTimeout(function(){
    idx.classList.remove("flash")
   },250);
}
function levelUp(){
    userS=[];
    level++;
    h2.innerText=`Level = ${level}`;
    let btnIdx = Math.floor(Math.random()*4);
    let rdBtn = document.querySelector(`.${btnColor[btnIdx]}`);
    gameS.push(btnColor[btnIdx]);
    btnFlash(rdBtn);
}

function btnPress(idx){
    let bt = this;
    let btid=bt.getAttribute("id");
    btnFlash(bt);
    userS.push(btid);
    checkBtn(userS.length-1)
}
function checkBtn(idx){
    if(gameS[idx] === userS[idx]){
        if(gameS.length == userS.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`Game Over Your Score is ${level}`; 
        started=false;
        Score(level);
        level=-1;
        gameS=[];
        userS=[];
        startBtn.innerText="Restart";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    }
}
function Score(level){
    if(level>h3.innerText){
        h3.innerText=level
    }
}
for(let btns of btn){
btns.addEventListener("click",btnPress
);}
let h3=document.querySelector("span");
h3.innerText='0';