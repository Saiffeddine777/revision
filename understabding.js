function fact(n){
    if (n === 0){
        return 1
    }
    if (n === 1){
        return 1
    }
    console.log(n*fact(n-1)) 
    return n*fact(n-1) 
}

fact(3)

