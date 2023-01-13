//Exercice 1

function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}

function values(obj){
    var result=[]
    each (obj, function(){
         result = Object.values(obj)
    }) 
        return result
} 


function keys(obj){
    var result=[]
    each (obj, function(){
         result = Object.keys(obj)
    }) 
        return result
}


//exercice 2
function keysLongerThan(object,number){
     each(object, function(e,k){
       if (k.length <= number){
        delete object[k]
       } 
     })
    return object
}

//exercice 3

function incrementValues(obj){
    each (obj , function(e,k){
        if (typeof e ==="number"){
           obj[k]=e+1
        }
    }) 
    return obj
}

//exercice 4

function objectToArrayOrArrayToObject (obj) {
    res={}
    arr=[]
    each(obj, function (value,key) {
        if (Array.isArray(value)) {
            for (var i=0; i<value.length; i++) {
                if (typeof value[i] != "object") {
            res[i]=value[i]}
                else { arr_obj=[]
                    for (var key__ in value[i])
                { arr_obj.push(value[i][key__])
                }
            res[i]=arr_obj
            }
            obj[key]=res
            
       }}
       else {
        for (var key_ in value) {
            arr.push(value[key_])
        }
        obj[key]=arr
        
       } 
    })
    return obj
}

//exercice 5
function oddEvenArray(object){
    var oddArr=[]
    var evenArr=[]
    var arr=[]

    each (object ,function(v,k){
        if (v%2!==0){
            oddArr.push(v)
        }
    })
    oddArr.sort()
    each (object ,function(v,k){
        if (v%2===0){
            evenArr.push(v)
        }
    })
    evenArr.sort().reverse() 
    return arr= oddArr.concat(evenArr)
} 

//exerice 6
function isPrime(object){ 
    var arrP = []
    var prime = undefined
    each(object, function(v,k){
       if (v===1){
            prime=false
       }
       else if(v>1){
           for (var i = 2;i<v;i++){
            if ((v/2)%i!==0)
            prime = true
            arrP.push(v)
           }
    } 
    })
    return arrP 
}