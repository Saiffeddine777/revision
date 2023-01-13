//exercice 2

function Stopwatch() {
    var obj = {}

    var time = 0;
    obj.basta = undefined;
    obj.time = 0;
    obj.start = start;
    obj.reset = reset;
    obj.stop = stop;
    return obj
}

var start = function () {
    var temp = this
    stop = setInterval(function () {
        temp.time = temp.time + 1;
        console.log('Elapsed time: ' + temp.time + 's.');
    }, 1000);
}
var stop = function () {
    clearInterval(this.basta);
}
////////////////////////////////////////////////////////////////////////////////////////
var reset = function () {
    clearInterval(this.basta);
    this.time = 0;
}
var eject=function(){
    if (this.toast===undefined){
        return "the toaster is empty"}
    else{
    this.toast=undefined;
    }
    var addToast= function(str){
        this.toast=str
    }
}
    function Toaster() {
        var obj = {};
        obj.stop=stop
        obj.start=start;
        obj.basta=undefined;
        obj.toast = undefined;
        obj.addToast= addToast
        obj.eject=eject;
        return obj 
    }
    var start=function (){
        if(this.toast===undefined){
            return " toast needs to be added before it can be toasted"}
        else{
             var temp=this;
             this.basta=setTimeout(function(){
                 console.log('ding');
                 temp.toast=temp.toast+" toasted";
             },10000)
             
        }
    }
///////////////////////////////////////////////////////////////////////////
function Stopwatch(name) {
    var obj = {}
    obj.laps=[];
    obj.lap=lap;
    obj.name=name;
    obj.basta = undefined;
    obj.time = 0;
    obj.start = start;
   // obj.reset = reset;
    obj.stop = stop;
    return obj
}

var lap=function(){
    this.laps.push(this.time);
    return 'Adding lap @ '+ this.time +'s '+this.name;
}
var start = function () {
    var temp = this
    this.basta = setInterval(function () {
        temp.time = temp.time + 1;
        var string="";
        temp.time>60? 
        console.log('Elapsed time: ' + temp.time + 's. '+temp.name);
    }, 1000);
}
var stop = function () {
    clearInterval(this.basta);
}