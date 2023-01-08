





function makeBook(title,author,msrp,genre, numberOfPages,discription){
    return {
        title : title,
        author : author,
        msrp: msrp,
        genre : genre,
        numberOfPages : numberOfPages,
        discription: discription
    }
}


function displayBook(object){
    return object.title + ', by '+object.author + '-- ' + object.genre + ' , $'+object.msrp     
}



function displayBooks(array){
    var string=""
    for(var i=0;i<array.length;i++){
        string = string + displayBook(array[i])+'\n'
    } 
    return string
}


function isMatch(array,queryTitle){

    for (var i=0;i<array.length;i++){
        if(array[i].title.toLowerCase()===queryTitle.toLowerCase()) {
            return true
            
        }
    }
    return false
}
function searchBooks(array,query){
    for (var i = 0; i < array.length; i++){
        
        for(var prop in array[i]){
            if(array[i][prop].toLowerCase().includes(query.toLowerCase())){
                
        
            return true}
                
          
    }
}
    return false
}



function removeBook(array, titleOfBook){
    var newArrayOfBooks= []
    for (var i = 0;i<array.length; i++){
        if (array[i].title.toLowerCase()!==titleOfBook.toLowerCase()){
            //array.slice(i,1)
            newArrayOfBooks.push(array[i])
        }
    }return newArrayOfBooks
}
//by med 
function removeBookById(array, id){
    
    for (var i = 0;i<array.length; i++){
        if (array[i].id==id){
            array.splice(i,1)
        }
    }return array;
}
//


function makeAMovie(title , director ,duration, releaseDate , actors , studios , synopsis, rating){
    return{ title:title ,
         director:director  ,
         duration : duration,
          releaseDate: releaseDate ,
           actors: actors , 
           studios:studios ,
            synopsis : synopsis,
             rating : rating}
}   





function displayMovie(object){
    return object.title + ', by '+object.director + '-- ' + object.studios + ' , '+object.rating+'/10'     
}


function displayCast (movie){
    return "the leading actor in "+movie.title + " is "+ movie.actors
    
}
function displayMovies(array){
    var string=""
    for(var i=0;i<array.length;i++){
        string = string + displayMovie(array[i])+'\n'
    } 
    return string
}


function averageLength(array){
    var n = array[0].duration
  
  for (var i=1;i<array.length;i++){
      n=n+ array[i].duration
  }
  return n/array.length
}

function searchMovies(array,queryTitle){

    for (var i=0;i<array.length;i++){
        if(array[i].title.toLowerCase()===queryTitle.toLowerCase()) {
            return true
            
        }
    }
    return false
}
function addtag(object,tag){
    object.tag = tag
}
function removetag(object){
    delete object.tag 
}

function removeTag(object,tag){
    for(var i=0; i<object["tags"].length;i++){
        if(object["tags"][i]===tag){
            object["tags"].splice(i,1)}
    }
}