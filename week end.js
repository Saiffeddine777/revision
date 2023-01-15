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

function reduce(array, f, start) {
    var acc = start;
    each(array, function(element,key) {
      acc = f(acc, element);
    });
    return acc;
  }

function reduce (array , func , start){
    var acc = start
    if (acc === undefined ){
        acc = array[0]
    }
    each (array, function(element , key ){
        func(acc, element , key )
    })
    return acc
}


