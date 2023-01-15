function each(coll, f){
    if (Array.isArray(coll)){
        for (var i =0 ;i<coll.length;i++){
            f(coll[i],i)
        }
    }
    else{
        for (var key in coll){
            f(coll[key],key)
        }
    }
}

function map(coll, f){
    var acc=[] 
    if (!(Array.isArray(coll))){
        acc= {}
    }
    each (coll,function(element ,key){
        acc[key] = f(element,key)
    })
    return acc
}


//exercice 1

function incrementValues(obj){
 return map (obj, function(e,k){
     return e+=1
 })
}

//exercice 2
function uppercaseValues(obj){
    return map (obj, function(e,k){
        if (typeOf (e) ==="string")
        return e.toUpperCase()
    })
   }
//exercice 3
function countNestedKeys(obj) { 
    
    return map (obj,function (e,key){
        var count = 0
        for(var key in e){
            count++
        }
       return count
    })
}

//exercice 4
function agesToMinutes(obj){
    return map (obj , function (e,k){
          return e["age"] = e["age"] * 365 * 24 *60 
    })
}

//More Practice
//Exercice 1


user =  function (name , email, password){
    var object = {}
     object.name = name ;
     object.email = email ;
     object.password = password;
     object.flag = flag;
     object.passwordHealth = passwordHealth;
return object
}


var flag = function(){
 //depend from password
} 

var passwordhealth = function(){
 //depend from password
}