var log = console.log;
var result = document.getElementById('result');
var num = undefined;
var num1 = undefined;
var num2 = undefined;
var operator = undefined;
var answer = undefined;
function onNumkeyClick(data){
    if(num){
        num = num + data;
    }
    else{
        num = data;
    } 
    result.innerHTML = num;
    log(num);
    
}

function onOpClick(data){
    operator = data;
    // if num1 is not enterd yet..
    if(num1 == undefined){
        num1 = parseFloat(num);
        num = undefined;
        log('num1 has enterd')
    }else{
        //if num1 is entered already,but op is clicked..=>result should go in num1
        num2 = parseFloat(result.innerHTML);
        getResult();

        num = undefined;
        log('num1 has enterd')

    }
}

function onEqualClick(){
    log('= clicked')
    if(num1 == undefined){
        //if no num has entered yet
        result.innerHTML = num;
    }else if(num1 !== undefined && num2 == undefined){
        //if num1 has entered but not num2 
        num2 = parseFloat(num);
        log('num2 has entered');
        getResult();
    }
}
function getResult() {
    if(operator == '+'){
        answer = num1 + num2;
    }else if(operator == '-'){
        answer = num1 - num2;
    }else if(operator == '*'){
        answer = num1 * num2;
    }else if(operator == '/'){
        answer = num1 / num2;
    }else if(operator == '%'){
        answer = num1 % num2;
    }
    else{

    }
    result.innerHTML = answer;
    num1 = answer;
}
function onClearClick(){
    num = undefined;
    num1 = undefined;
    num2 = undefined;
    result.innerHTML = 0;
}
function onNegateClick(){
var text = parseFloat(result.innerHTML);
log('recived text as ',text);
text = -(text);
log('text now is' , text)
num = text;
result.innerHTML = text;
}

function onBSClick(){
    var text = result.innerHTML;
    log('text rec as',text);
    text = text.slice(0,-1);
    log('text is now',text);
    if(text == ''){
        num = 0
        result.innerHTML =0;
    }else{
        num = text;
        result.innerHTML = text;
    }
}