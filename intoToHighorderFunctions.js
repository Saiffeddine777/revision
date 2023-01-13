//exercice 1

var cube = function (x) {
    return x * x * x
}

var fullName = function (first, last) {
    return first + " " + last
}

var power = function (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1)
}

var sumCubes = function (numbers) {
    var total = 0
    for (var i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i])
    }
    return total
}

//exercice 2 + 3 + 4
function each(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i])
    }
}

function sumSquare(numbers) {
    var total = 0
    each(numbers, function square(n) {
        total = total + n * n
    })
    return total
}

function sumCubes(numbers) {
    var total = 0;
    each(numbers, function square(n) {
        total = total + n * n * n
    })
    return total;
}


function product(array) {
    var result = 1
    for (var i = 0; i < array.length; i++) {
        result *= array[i]
    }
    return result
}

//exercice 5
function products(array) {
    var result = 1
    each(array, function product(n) {
        return result *= n
    })
    return result
}
//exercice 6
function cubeAll(array) {
    var resArray = []
    for (var i = 0; i < array.length; i++) {
        resArray.push(array[i] ** 3)
    } return resArray
}

function cubeAll(array) {
    var resArray = []
    each(array, function cube(n) {
        resArray.push(n ** 3)
    })
    return resArray
}

//exercice 7
function odds(array) {
    var arrOdds = []
    each(array, function odd(n) {
        if (n % 2 !== 0) {
            arrOdds.push(n)
        }
    })
    return arrOdds
}

//More Practice
//exercice1
function sumByAllElementsMultipliedByFour(array) {
    var result = 1
    var sum = 0
    each(array, function summ(n) {
        sum = sum + n
        result = sum * 4
    })
    return result
}

// exercice2
function sumby(array, f) {
    var sum = 0
    each(array, function (n) {

        sum = sum + f(n)
    })
    return sum
}
// exercice 3
sumby([1, 2, 3, 4], function (e) { return e })
//exercice 4 
function multiby(array, f) {
    var sum = 1
    each(array, function (n) {

        sum = sum * f(n)
    })
    return sum

}
//exercice 5
function doubleAll(numbers) {
    // ... 
}
//advanced
//exerice 1
function doubleAll(numbers) {
    var res = []
    each(numbers, function (n) {
        res.push(n * 2)
    })
    return res
}
//exercice2
function halfAll(numbers) {
    var res = []
    each(numbers, function (n) {
        return res.push(n / 2)
    })
    return res
}
//exercice 5
function map(array, f) {
    var acc = []
    each(array, function (e) {
        acc.push(f(e))
    })
    return acc
}
//Exerice 6
map(["aze", "aazefsd"], function (e) {
    return e.toUpperCase()
})

map(["aze", "aazefsd"], function (e) {
    return e.toLowerCase()
})

map(["aze", "aazefsd"], function (e) {
    return e.length()
})
var people = [
    { name: { first: 'Grace', middle: 'B.', last: 'Hopper' }, age: 85 },
    { name: { first: 'Adele', last: 'Goldstine' }, age: 43 },
    { name: { first: 'Ada', last: 'Lovelace' }, age: 36 },
    { name: { first: 'Hedy', middle: 'E.', last: 'Lamarr' }, age: 85 },
    { name: { first: 'Ruchi', last: 'Sanghvi' }, age: 34 }
];
map(people, function (e) {
    return e.name.first + " " + e.name.middle + " " + e.name.last
})

//exerice 7
function evens(array) {
    var arEven = []
    each(array, function (n) {
        if (n % 2 === 0) {
            arEven.push(n)
        }
    })
    return arEven
}
//exerice 8
function multiple3(array) {
    var acc = [];
    each(array, function (e) {
        if (e % 3 == 0) {
            acc.push(e)
        }
    })
    return acc
}

//exerice9
function postives(array) {
    var acc = [];
    each(array, function (e) {
        if (e >= 0) {
            acc.push(e)
        }
    })
    return acc
}

//exercice 10
function evens(array) {
    var arEven = []
    each(array, function (n) {
        if (n.length % 2 === 0) {
            arEven.push(n)
        }
    })
    return arEven
}
//exercice 11
function filter(arr,f){
    var acc=[];
    each(arr,function(e){
        if(f(e)===true){
            acc.push(e)}
    })
         return acc
}

//exercice 12
function positive1(array){
    return filter(array,function(e){
        return (e >= 0)
    })
}
function odds(array){
    return filter (array , function(e){
        return (e%2===1)
    } )
}

function negatives(array){
    return filter (array , function(e){
        return (e<=0)
    })
}
function evenLength (array){
    return filter (array , function(e){
        return (e.length%2===0)
    })
}

function largerThanSix (array){
    return filter (array , function(e){
        return (e>6)
    })
}

