// basic exercices
// exercice 1
function makeAccount(initial) {
    var balance = initial;
    return {
        withdraw: function (amount) {
            if (balance - amount >= 0) {
                balance = balance - amount;
                return "Here's your money: $" + amount;
            }
            return 'Insufficient funds.';
        },
        deposit: function (amount) {
            balance = balance + amount;
            return 'Your balance is: $' + balance;
        },

        checkBalance: function () {
            return 'your balance is ' + balance
        }

    };
}
// exercice 2
function countManagement(init) {
    var count = init
    return {
        add: function () {
            count++
            return count
        },
        dec: function () {
            count--
            return count
        },
        reset: function () {

            return count = init
        }
    }
}
//more practice
//exercice1
function randInt(n) {
    C
}
var upperBound = 5;
function guessMyNumber(n) {
    if (n > upperBound) {
        return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (n === randInt(upperBound)) {
        return 'You guessed my number!';
    }
    return "Nope! That wasn't it!"
}

function randomInt(n) {
    var upperBound = n
    var numberToGeuss = Math.floor(Math.random() * (n + 1))
    return {
        newNumberToGuess: function () {
            numberToGeuss = Math.floor(Math.random() * (n + 1))
            console.log(numberToGeuss)
        },
        guessMyNumber: function (n) {
            if (n > upperBound) {
                return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
            } else if (n === numberToGeuss) {
                return 'You guessed my number!';
            }
            return "Nope! That wasn't it!"
        }
    }
}

function randomInt(n, maxNumberOftrials) {
    var upperBound = n
    var numberToGeuss = Math.floor(Math.random() * (n + 1))
    var count = 0
    return {
        newNumberToGuess: function () {
            numberToGeuss = Math.floor(Math.random() * (n + 1))
            console.log(numberToGeuss)
        },
        guessMyNumber: function (n) {

            if (n > upperBound) {


                return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
            } else if (n === numberToGeuss) {
                count = 0
                return 'You guessed my number!';
            }
            if (count > maxNumberOftrials) {
                console.log("you have exceded the number of trials")

            }
            count += 1
            return "Nope! That wasn't it!"
        },
        verifyCount: function () {
            return count
        },
        giveUp: function () {
            numberToGeuss = Math.floor(Math.random() * (n + 1))
            count = 0
        }
    }
}

function makeAccount(initial) {
    var balance = initial;
    return {
        withdraw: function (amount) {
            if (balance - amount >= 0) {
                balance = balance - amount;
                return "Here's your money:$" +
                    amount;
            }
            return "Insufficient funds."
        },
        deposit: function (amount) {
            balance = balance + amount;
            return "Your balance is:$" + balance;
        }
    }
}


function makeAccount(initial) {
    var balance = initial;
    var historyOftransaction=[]
    return {
        withdraw: function (amount) {
            if (balance - amount >= 0) {
                balance = balance - amount;
                historyOftransaction.push(factoryTransac("withDraw",amount,balance+amount,balance,"approved"))
                return "Here's your money:$" +
                    amount;
            }
             historyOftransaction.push(factoryTransac("withDraw",amount,balance,balance,"denied"))
            return "Insufficient funds."
        },
       
        deposit: function (amount) {
            balance = balance + amount;
            historyOftransaction.push(factoryTransac("Deposite",amount,balance,balance+amount,"approved"))
            return "Your balance is:$" + balance;
             
        },
        transactionHistory : function(){
            return historyOftransaction
        }
    }



    function operation (array,operation){
        var res 
           if (operation.toLowerCase()==="add")
           {res = 0
               for (var i = 0; i <array.length; i++) {
                   res+=array[i]
               }
            return res
           }
           
           if (operation.toLowerCase()==="substract")
           {res = array[0]
               for (var i = 1; i <array.length; i++) {
                   res-=array[i]
               }
            return res
           }
           
           if (operation.toLowerCase()==="multiply")
           {res = array[0]
               for (var i = 1; i <array.length; i++) {
                   res*=array[i]
               }
            return res
           }
           
           if (operation.toLowerCase()==="divide")
           {res = array[0]
               for (var i = 1; i <array.length; i++) {
                   res/=array[i]
               }
            return res
           }
        }       
    
}