
function each(collect , func){
    if (Array.isArray(collect) === true ){
        for (var i = 0 ; i<collect.length ; i++ ){
            func(collect[i],i)
        }
    }
    else{
        for (var key in collect){
            func(collect[key],key)
        }
    }
}

function map(coll,func){
    var acc = []
    if (!Array.isArray(coll)){
        acc = {}
    }
   each (coll , function(ele,key){
    acc[key] = func(ele,key)
   })
   return acc
}

function filter(coll , predicate){
     var acc = []
     each (coll ,function(element , key ) {
         if (predicate(element,key)=== true){
            acc.push(element)
         }
     } )
     return acc
}

function reduce(array, f, acc) { 
    if (acc === undefined) { 
          acc = array[0]; 
          array = array.slice(1); 
    } 
    each(array, function(element, i) { 
          acc = f(acc, element, i); 
    }); 
    return acc; 
}


//exercice 1
function sum(numbers) { 
    return reduce(numbers, function(total, number) { 
          return total + number; 
    }, 0); 
} 


function product(numbers) { 
    return reduce(numbers, function(total, number) { 
          return total + number; 
    }, 1); 
} 
// exerice 2
function averageAGe(people) { 
    var x =  reduce(people, function(total, element) { 
          return total + element.age; 
    }, 1); 
    return x/people.length
}
//exercice 3
function range(start, end) { 
    var acc = []; 
    for (var i = start; i <= end; i++) { 
          acc.push(i); 
    } 
    return acc; 
} 

function factorial(n){
   var ran = range (1,n)
   return reduce (ran , function (fact, element){
    return fact * element
   },1)
}
//More Practice
//exerice 1
function sumBy(numbers, func) { 
   return reduce(numbers , function ( total ,element){
        return total + func(element)
   }, 0) 
} 

//exercice 2
function maxx(numbers) { 
    var max = numbers[0]
    return reduce(numbers , function ( total ,element){
                if (max = element) 
         return total = element
    }, 0) 
 } 


 //exercice 3 
function countOccurrences(string , char){
    return reduce(string , function(res,ele){
        if (ele === char ){
            res++
        }
            return res
    }, 0)
}

//exercice 4

function oddOrNot(array){
    return reduce(array, function(value,element){
        return value = value && element%2 === 1
    }, true) 
}
function positives(array){
    return reduce(array, function(value,element){
        return value = value && element>=0
    }, true) 
}
function lengthOver3(array){
    return reduce(array, function(value,element){
        return value = value && element.length>=3
    }, true) 
}
function allContain3(array){
    return reduce(array, function(value,element){
        return value = value && element.includes("e")
    }, true)
}

//exercice 5
function everyNumberEven(numbers, predicate) { 
    return reduce (numbers, function(element){
         if(predicate(element))
         return 
    },true)  
} 

function everyNumberEven(numbers, predicate) { 
    return reduce (numbers, function(value ,element){
         return value = value && predicate(element)
    },true)  
} 

/*everyNumberEven([2,3,4], function(ele){
    return ele%2 === 0
})
false */

function reduce(array, f, acc) { 
    if (acc === undefined) { 
          acc = array[0]; 
          array = array.slice(1); 
    } 
    each(array, function(element, i) { 
          acc = f(acc, element, i); 
    }); 
    return acc; 
}

//Improved Reduce || W4.D5.02

//Basic Requirement
//exercice 1
function factorial(n){
    var fact = range(1,n)
    return reduce (fact , function( totalFac , element){
        return totalFac*element
    },1)
}

//exercice 2 
function max(array){
    return reduce (array , function(max,element){
        if (element > max ){
            element = max
        } 
        return max
    })
}

//exercice 3
 function range(start, end) { 
    var acc = [];
    if (end === undefined ){  
       for (var j = 0 ; j < start; j++) { 
             acc.push(j); 
       } 
       return acc;
    }
       
       for (var i = start; i < end; i++) { 
             acc.push(i); 
       } 
       return acc; 
 }