function sumOfAllEven(n1, n2) {
    if (n1 > n2) {
        var i = n2 + 1
        var res1 = 0
        while (i < n1) {
            if (i % 2 === 0) {
                res1 += i
            }
            i++
        }
        return res1
    }
    if (n1 < n2) {
        var j = n1 + 1
        var res2 = 0
        while (j < n2) {
            if (j % 2 === 0) {
                res2 += j
            }
            j++
        }
        return res2
    }

}




//Prime counter
function primeCount(number) {
    var counter = number / 2
    while (counter >= 2) {
        if (number % counter !== 0) {
            return "this number is a prime"
        }
        counter--
        return "this number is not a prime "
    }
    primeCount(11)
}

function rockPaperScissors(char){
    arr=["R","P","S"]
    var i =0
    while(i<arr.length) {
        if (char !==arr[i]){
            return rockPaperScissors(char)
        }
        i++
    } 
    console.log(vchar) 
    return char
}
