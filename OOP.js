//exercice 1
function makeAccount(initial) {
    var account = {}
    account.balance = initial
    account.withdraw = withdraw
    account.deposit = deposit
    return account
};


var withdraw = function (amount) {
    if (this.balance - amount >= 0) {
        this.balance = this.balance - amount;
        return 'Here is your money: $' + amount;
    }
    return 'Insufficient funds.';
}

var deposit = function (amount) {

    this.balance = this.balance + amount;

    return `Your balance is: $ + ${this.balance}`;
}


//exercice 2
function MakeStopwatch() {
    var obj = {};
    obj.stop1 = undefined;
    obj.time = 0;
    obj.start = start;
    obj.stop = stop;
    obj.reset = reset;
    return obj;
}
var start = function () {
    console.log(this, "outside set")
    var context = this
    this.stop1 = setInterval(function () {
        console.log(this, "inside set")
        context.time = context.time + 1;
        console.log('Elapsed time: ' + context.time + 's.');
    }, 1000);
}
var stop = function () {
    var context = this
    clearInterval(context.stop1);
}
var reset = function () {
    var context = this
    clearInterval(context.stop1);
    this.time = 0;
}
//more practice
//exercice 1
function Toaster() {
    var instance = {}
    instance.toast = undefined
    instance.addToast = addToast
    instance.eject = eject
    return instance
}
var addToast = function (str) {
    this.toast = str
}
var eject = function () {
    var x = ''
    if (this.toast === undefined) {
        return "the toaster is empty"
    }
    else {
        x = this.toast
        this.toast = undefined
        return x
    }
}



function Toaster() {
    var instance = {};
    instance.toasted = undefined
    instance.addToast =
    instance.eject = eject
     
      return instance;
}