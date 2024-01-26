'use strict';
//score
const score1=document.getElementById('score--0');
const score2=document.getElementById('score--1');
const current1=document.getElementById('current--0');
const current2=document.getElementById('current--1');
//button
const rollDice=document.getElementById('roll');
const hold=document.getElementById('hold');
const  newGame=document.getElementById('btnNew');
//img
const diceImag=document.querySelector('.dice');

//background
const player1Background=document.getElementById('player0').classList;
const player2Background=document.getElementById('player1').classList;
//rollCount
let count=0;




//Begin condition
score1.textContent='0';
score2.textContent='0';
current1.textContent='0';
current2.textContent='0';
diceImag.classList.add('hide');


newGame.addEventListener('click',()=>{
    score1.textContent='0';
    score2.textContent='0';
    current1.textContent='0';
    current2.textContent='0';
    diceImag.classList.add('hide');
})
function checkWin(score){
    if(Number(score.textContent)===30){
        score.textContent='Win';

    }
}
function holdButton(){
    if(count===0){
        score1.textContent=(Number(score1.textContent)+Number(current1.textContent)).toString() ;

        player1Background.remove('player--active');
        player2Background.add('player--active');
        current1.textContent='0';
        checkWin(score1);
        diceImag.classList.add('hide');
        count=1
    }else{
        score2.textContent=(Number(score2.textContent)+Number(current2.textContent)).toString() ;
        player2Background.remove('player--active');
        player1Background.add('player--active');
        current2.textContent='0';
        checkWin(score2);
        diceImag.classList.add('hide');
        count=0
    }
}
function roll(score,current){
    let rand=Math.floor(Math.random()*6+1);
    diceImag.src=`dice-${rand}.png`;
    diceImag.classList.remove('hide');
    if(rand===1){

        current.textContent='0';
        score.textContent=current.textContent;
        holdButton();

    }else{

        current.textContent=rand.toString();

        checkWin(score);
    }



}

rollDice.addEventListener('click',()=>{
    if(count===0){
        roll(score1,current1);
    }else{
        roll(score2,current2);
    }
});



hold.addEventListener('click',()=>{
    holdButton();

});






