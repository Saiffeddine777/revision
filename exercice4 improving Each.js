function obj2arr(obj){
    acc=[]
    for( var i in obj){
        acc[i]=obj[i];
    }
    return acc;
}

function obj2arr(obj){
    acc=[]
    for( var i in obj){
        acc.push(obj[i]);
    }
    return acc;
}
// made by ChatGPT
function transform(coll){
    if(Array.isArray(coll)) return arr2obj(coll);
    else return obj2arr(coll);   
}
undefined
function obj2arr(arr){
    var acc=[];
    for( var i in arr){
        if(Array.isArray(arr[i])){
            acc.push(arr2obj(arr[i]));
        }else if( typeof(arr[i])==='object'){
            acc.push(obj2arr(arr[i]))}
        else{
            acc.push(arr[i])
        }
    }
    return acc;
}

undefined
function obj2arr(object){
    var acc=[];
    for( var i in object){
        if(Array.isArray(object[i])){
            acc.push(arr2obj(object[i]));
        }else if( typeof(object[i])==='object'){
            acc.push(obj2arr(object[i]))}
        else{
            acc.push(object[i])
        }
    }
    return acc;
}