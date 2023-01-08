function makeCounter() {
    count=0
    return function counter () {
        return count=count+1
    }
}

function makeCounter() {
    count=100
    return function counter () {
        return count=count+1
    }
}
function pow(exponent) {
    return function(n) {
         return n**exponent
         }
    } 
function zipWith(func, arr1, arr2) {
    res=[]
    if (arr1.length<=arr2.length) {
        for (var i=0; i<arr1.length; i++) {
           res.push(func(arr1[i],arr2[i]))
        }
    } else {for (var i=0; i<arr2.length; i++) {
        res.push(func(arr1[i],arr2[i]))
     }}
    return res
}

function add(n){
    res=n
    return function add (m) {
        while (typeof m != "number") {return res}
        return function bla () {
            return res+=m
        }
}}
console.log(add(1)(2)())
//by med sboui
function add(a){
    return function(b){
        if(b=== undefined)
            return a;
        else
            return add(a+b);
    }    
}
