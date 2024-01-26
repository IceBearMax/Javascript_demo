'use strict';
let num =Math.floor(Math.random()*(21-1)+1);/*产生随机数[1,20]*/

let score =20;
let hightscore=0;

document.querySelector('#btn_check').addEventListener('click',()=>{
    let  guess=document.querySelector('.guess').value.toString();

        if(guess===''){
            document.querySelector('.message').textContent='Please enter the number';
        }else{
            if(Number(guess)-num>0){
                score--;
                document.querySelector('.message').textContent='Too high';
                document.querySelector('.score').textContent=score.toString();

            }else if(Number(guess)-num<0){
                score--;
                document.querySelector('.message').textContent='Too low';
                document.querySelector('.score').textContent=score.toString();

            }else{
                document.querySelector('.number').textContent=num.toString();
                document.querySelector('.message').textContent='Wow ,you get it😊'


            }


        }



});

document.querySelector('#btn_again').addEventListener('click',()=>{
    if (score>hightscore){
        hightscore=score;
        document.querySelector('.highscore').textContent=hightscore.toString();
    }
    num =Math.floor(Math.random()*(21-1)+1);
    score=20;
    document.querySelector('.guess').value="";
    document.querySelector('.number').textContent='?';

});
