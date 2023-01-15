//function `deleteElement()` deletes all the occurrence of element from the given array.


function deleteElement(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            array.splice(i, 1)
            i--
        }
    } return array
}


//For loop consisting of setTimeout() function to print loop variable 5 times in asynchronous way.

function powerOfANumber(number, exp) {
    var result = 1
    if (exp <= 0) {
        return result = result * 1
    }
    return number * powerOfANumber(number, exp - 1)
}



//Function printPattern() is used to print a pattern for a given range using nested for loop.

function printPattern(range) {
    var ar1 = []
    var arrr = []
    for (var i = 0; i <= range; i++) {
        arrr.push(i)
    }
    for (var count = 0; count < arrr.length; count++) {
        for (var j = 0; j <= count; j++) {
            ar1.push(arrr[j])
            console.log(ar1)
        }
    }

    //function digitSum(number)
}

function digitSum(number) {
    var str = number.toString()
    var sum = 0
    var i = 0
    while (i < str.length) {
        sum = sum + parseInt(str[i])
        i++
    } return sum
}

//largest number in an array

function largestNumberInArray(ar2){
  var max = ar2[0]
  var counter = 0  
  while(counter <= ar2.length - 1){
    if (ar2[counter]>max){
        max = ar2[counter]
    }
    counter ++
  }return max
}


//factory function

function makeAStudent(studName, age , cohort, gender){
    return {
        studName : studName,
        age:age,
        cohort:cohort,
        gender:gender
    }
}

// returning properties
function properties(obj){
    return Object.entries(obj)
}


//deleting age property
function deleteAge(obj){
    return delete obj.age
}

//addKey
function addingAKey (object, key){
    object[key]=undefined
    return object
}

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    

    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    }

    function noRolldelete(object){
        delete object.rollno
    }

    function length(object){
        return Object.keys(object).length
    }