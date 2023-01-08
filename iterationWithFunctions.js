
//exercice 1

function sum(number) {
    var summ = 0
    if (number === 0) {
        return summ
    }
    return summ = number + sum(number - 1)
}


//exercice 2

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

//exercice 3

function repeatString(string, number) {
    if (number === 0) {
        return ""
    }
    return string + repeatString(string, number - 1)
}

//exercice 4

function fibonacci(number) {
    if (number === 0) {
        return 0
    }
    else if (number === 1) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}

//exercice 5

function multiplyBy10(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return firstNumber
    }
    return multiplyBy10(firstNumber, secondNumber - 1) * 10
}

//more Practice

//exercice 1
function sumBetween(start, end) {
    if (end > start) {
        if (start > end) {
            return 0
        }
        return start + sumBetween(start + 1, end)
    }
    else {
        if (start === end) {
            return end
        }
        return end + sumBetween(start, end + 1)
    }
}

//made in tunisia by Mohamed sboui
function sum(start,end){
    if(start>end){
        var c;
        c=end;
        end=start;
        start=c;
    }
    if(end===start){
        return start}
    else{
        return end+sum(start,end-1)
    }
}


//exercice 2
function inc(x) {
    return x + 1 
 }  function dec(x) {
    return x - 1 
}
function add(number1, number2) {

if (number1===0){
    return number2
}
return  add(dec(number1), inc(number2))
}  
 
//exercice 3
function isEven(number) {
    if (number===0){
    return true 
}else if (number===-1){
    return false
}else {
    return isEven(number-2)
}
}

//exercice 4
function range(start, end){
    var array = []
    if (start+1 === end){
        return array =[]
    }
    return [start+1].concat(range(start+1, end))
}

//exercice 5
function multiply(number1, number2) {
    if (number2===0){
       return 0
    } 
    return number1 + multiply(number1, number2-1)
 } 
//Advanced
//exercice 1
function stringLength(string){
    if(string==="")
        return 0
    else return 1+stringLength(string.slice(1))
}

//exercice 2

