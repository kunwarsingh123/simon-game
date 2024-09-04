let gameseq=[];
let userseq=[];
let highest=[];
let start=false;
let h22 = document.querySelector("h2");
let btns = ["red","green","blue","yellow"];

let level=0;
document.addEventListener("keypress",function(){
  if(start==false)
  {
    console.log("game is start")
    start=true;
  }
levelup();
})

function btnflash(btn) {
  btn.classList.add("flash");

  setTimeout(function(){
    btn.classList.remove("flash")
  },500);
}


function userflash(btn) {
  btn.classList.add("userflash");

  setTimeout(function(){
    btn.classList.remove("userflash")
  },250);
}



function levelup(){
  userseq=[];

  level++;
  highest.push(level);
  h22.innerText=`Level ${level}`;
let random=Math.floor(Math.random()*3)+1;
let reandcolor=btns[random];
let randbtn=document.querySelector(`.${reandcolor}`);
// console.log(randbtn);
 console.log(reandcolor);
gameseq.push(reandcolor);
console.log(gameseq);
  btnflash(randbtn);


}

function checkans(index){
  //let index=level-1;
  console.log("curr :",level);
  if(userseq[index]===gameseq[index])
  {
    if(userseq.length== gameseq.length)
    {
      setTimeout(levelup,1000);
    }
    console.log("Same value")

  }
  else{
    h22.innerText=`Game Over! Your score was <b>${level}</b> <br> Press any key to start. and your highest level is ${highest.length}`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },2500)
    reset()
  }

}



function btnpress(){
  console.log(this)
  let btn=this;
  userflash(btn);
usercolor=btn.getAttribute("id");
// console.log(usercolor);
userseq.push(usercolor);
checkans(userseq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
{
  btn.addEventListener("click",btnpress);
}


function reset(){
  h22.innerText=`if you want to again play then try now again press any key and your highest score was ${highest.length}`;
start=false; 
  gameseq=[];
  userseq=[];
  level=0;
}
