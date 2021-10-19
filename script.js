function clearscreen(){
    document.getElementById('screen').value=" ";
}
function clearscreen1(){
    document.getElementById('result').value=" ";
}

function cal(value){
    var inputtext=document.getElementById('screen');
inputtext.value=inputtext.value+value;

}
function fun(){
     var p=document.getElementById('screen').value;
     var q=eval(p);
     document.getElementById('result').value=q; 
    }