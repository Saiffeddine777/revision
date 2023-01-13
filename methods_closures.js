function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return "Here’s your money: $" + amount;
    }
    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         return 'Your balance is: $' + balance;
         },
    checkBalance: function () {return "Your balance is "+balance}
    };
}
function makeCounter () {
    count=0
    return {up: function () {return count++}, down: function () {return count--}}
}

function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
    }
var upperBound = 5;
function guessMyNumber(n) {
    return function () {
    if (n > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
         return 'You guessed my number!';
         }
    return "Nope! That wasn't it!"}
}
random=randInt(upperBound)

function makeGame(n){
    count=0
    return function (n) {
        count++
            if (n > upperBound) {
                 return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.'
            } else if (n === random) {
                 return 'You guessed my number!'
                 }
            return "Nope! That wasn't it!"}}

game=makeGame(10) 
game.giveUp=function () {return random}
game.numGuesses=function  () {  
   return count}

console.log(game(2))
console.log(game(3))
console.log(game(5))
console.log(game.numGuesses())        

function makeAccount(initial) {
    var transactions=[]
    balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         transactions.push({type:"withdrawal",amount:amount,before:balance+amount,after:balance,status:"approved"})
         return "Here’s your money: $" + amount;

    }
    
    transactions.push({type:"withdrawal",amount:amount,before:balance,after:balance,status:"denied"})

    return 'Insufficient funds.';
},
    deposit: function(amount) {
         balance = balance + amount;
         transactions.push({type:"deposit",amount:amount,before:balance-amount,after:balance,status:"approved"})

         return 'Your balance is: $' + balance;
         },
    transactionHistory: function (n){ transactions.splice(0,transactions.length-n)
        return transactions},
    balance: function () {return balance}
    }
}
    

console.log(makeAccount(100).deposit(50), "balance")
a=makeAccount(100)
a.deposit(50)
console.log(a.balance(), "balance")
var left = {
    'multiply': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [5, 6, 7, 8, 9],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
    }
}
var right = {
    'subtract': {
    'add': [1, 2, 3, 4, 5],
    'subtract': [1, 2, 3, 4, 5],
    'multiply': [1, 2, 3, 4, 5],
    'divide': [1, 2, 3, 4, 5]
    }
}
function operation(obj) {
    root = Object.keys(obj)[0]
    arr=Object.entries(obj[root])
    res=[]
    RES_add=0
    RES_mult=1
    RES_div=1
    RES_sub=0
    for (var i=0; i<arr[0][1].length;i++) {
        RES_add+=arr[0][1][i]
        RES_mult*=arr[1][1][i]
        RES_div/=arr[2][1][i]
        RES_sub-=arr[3][1][i]

    }
    res.push(RES_add)
    res.push(RES_mult)
    res.push(RES_div)
    res.push(RES_sub)
    OP_mult=1
    OP_sub=0
    for(var i=0;i<res.length;i++) {
        if (root=="multiply") {
            return OP_mult*=res[i]
        }
        else if (root=="subtract") {
            return OP_sub-=res[i]
        }

    }
}
console.log(operation(left), "left")
console.log(operation(right), "right")
function evaluate (left,op,right) {
 if (op=="add") {return operation(left)+operation(right)}
 else return 0
}

console.log(evaluate(left,"add",right))