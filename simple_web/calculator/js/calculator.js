var buffer=[];
var numStack=[]
var token=[]
var ans=0;

var buttons=document.querySelectorAll('.numbers');

function enter(key){
    if(key!='='){
        buffer+=key
        reset();
    }
}

function reset(){
    var dis=document.getElementById('display');
    dis.innerHTML=buffer
}

function calculate(){
    var num=""
    buffer.forEach(entry => {
        if(entry=='-' || entry=='*'|| entry=='/'|| entry=='+'){

        }else{
            num+=entry
        }
    });
}



function plus(num1,num2){
    return num1+num2
}
function minus(num1,num2){
    return num1-num2
}
function divide(num1,num2){
    return num1/num2
}
function multiply(num1,num2){
    return num1*num2
}