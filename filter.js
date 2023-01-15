function filter(array, predicate) {
    var acc = [];
    each(array, function(element,i) {
      if (predicate(element,i)) {
        acc.push(element);
      }
    });
    return acc;
  }

  function each (coll , func){
    if (Array.isArray(coll)){
        for (var i =  0 ; i< coll.length;i++){
            func(coll[i],i)
        }}
    else {
        for (var key in coll){
            func(coll[key], key)
        }
    } 
}

//exercice 1 
function even(array){
    return filter  (array, function(e,i){
        return e%2 === 0
    })
}

function multipleOfThrees(array){
    return filter  (array, function(e,i){
        return e%3 === 0
    })
}

function positives(array){
    return filter  (array, function(e,i){
        return e>=0
    })
}

function evenLengths(array){
    return filter  (array, function(e,i){
        return e.length%2===0
    })
}

//More Practice
//exercice 1

function odds(array){
    return filter  (array, function(e,i){
        return e%2===1
    })
}

function negatives(array){
    return filter  (array, function(e,i){
        return e<=0
    })
}
function largerThan6 (array){
    return filter  (array, function(e,i){
        return e>6
    })
}

//exercice 2
function startsWithChar(strings, char) { 
    return filter  (strings, function(e,i){
        return e[0]===char
    })
}


function moveZero(numbers){
    var zeros = filter(numbers , function(e,i){
        return e === 0
    })

    var numbers2 = filter (numbers ,function(e,i){
        return e>0
    })

    return  numbers2.concat(zeros)
}

function filter(coll, predicate) {
    var acc = [];
    if (!Array.isArray(coll)){
        acc={}
    }
    each(coll, function(element,i) {
      if (predicate(element,i)) {
           acc[i]=element;
      }
    });
    return acc;
  }