//Basic Requirements
//exercice 1 
var ob1 = { firstName: 'Yan',
            lastname: 'Fan' 
         } 
var ob2 = {a: 1,
           b:2 ,
           c: 3 ,
           d:4} 
var ob3 =  { 
      animal: 'dog', 
      noise: 'bark', 
      age: 3, 
      type :'Golden Retriever', 
      color: 'Yellow', 
}
//exercice 2
var person = {
    firstName : "Mohamed",
    lastName : "Zrelli",
    age : 25,
    homeTown : "M'saken"
}

//exercice 3
person.favoriteFood = "ijja"
//exercice 4
person.name = person.firstName + " " + person.middleName + " " + person.lastName
delete person.firstName 
delete person.middleName
delete person.lastName

//exercice 5

function emptyObject (){
    var ob={}
    return ob    
}

//exercice 6

function addProperty(object, key) {   
    object[key] = true 
     }
     
//exercice 7
function deleteProperty(object,key){
    delete object.key
}

//exercice 8
function addObjectproperty(object1, key ,object2){
    object1[key] = object2
    
}
//exercice 9
function addFullNameProperty(object){
   if (Object.keys(object).includes("firstName") && Object.keys(object).includes("lastName")){
    if (object.firstName!== 'undefined' && object.lastName!== 'undefined') {
           object.fullName = object.firstName + " " + object.lastName
    }
   }
   else{return "missing first and lastname"}
   return object
}

for (var key in object){
    if (key === "color"){
        var temp = object[key]
        var temp2 = key.replace(key[0],key[0].toUpperCase()) 
        delete object[key]
        object[temp2] = temp  
    }
}

//exercice 10
function addArrayProperty (object , key , array){
    object[key]= array
}


























