let game=[];
let user=[];
let temp=['yellow','green','purple','red'];

let started=false;
let level=0;
let h3=document.querySelector('h3');
let smax=0;
let sco=document.querySelector('.hscore');

document.addEventListener('keypress',function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function btflash(btn){
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 100);
}

function userflash(btn){
    btn.classList.add('uflash');
    setTimeout(() => {
        btn.classList.remove('uflash');
    }, 100);
}

function levelup(){
    user=[];
    level++;
    console.log(game);
    h3.innerText=`Level ${level}`;
    let num=Math.floor(Math.random()*4);
    let rcolor=temp[num];
    let btn=document.querySelector(`.${rcolor}`);

    game.push(rcolor);
    console.log(game);
    btflash(btn);
}

function check(idx){
    if(user[idx]===game[idx]){
        if(user.length==game.length){
            setTimeout(() => {
                levelup();
            }, 750);
        }
    } else{
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br><br> Press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor='white';
        }, 100);
        if(level>smax) smax=level;
        sco.innerHTML=`<h2>High Score- ${smax}</h2>`;
        reset();
    }
    
}

function press(){
    let btn=this;
    let color=btn.getAttribute('id');
    userflash(btn);
    user.push(color);
    // console.log(user);
    check(user.length-1);
}

let allbt=document.querySelectorAll('.btn');
for(btn of allbt){
    btn.addEventListener('click',press);
}

function reset(){
    game=[];
    user=[];
    level=0;
    started=false;
}
