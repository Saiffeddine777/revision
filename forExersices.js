function sumOfN(n) {
    var sum = 0
    for (var i = 0; i <= n; i = i + 1) {
        sum = sum + i
    } return sum
}

-------------------------------------------

    function factOfN(n) {
        var sum = 1
        for (var i = 1; i <= n; i = i + 1) {
            sum = sum * i
        } return sum
    }
--------------------------------------------

    function repeatString(string, n) {
        var str = ""
        for (var i = 0; i < n; i++) {
            str = str + " " + string;
        }
        return str
    }

-----------------------------------------

    function countMinMax(min, max) {
        var r = 0
        for (var i = min; i < max; i++) {
            r++
        }
        return r
    }

-----------------------------------------


    function sumMinToMax(min, max) {
        var r = 0
        for (var i = min; i < max; i = i + 1) {
            r += i
        }
        return r
    }

-----------------------------------------

    function productMinToMax(min, max) {
        if (typeof (min) !== 'number' || typeof (max) !== 'number') {
            return "error"
        }
        else {
            var r = 1
            for (var i = min; i < max; i = i + 1) {
                r *= i
            }
            return r
        }
    }

----------------------------------------

    function multiplyBy10NTimes(num, n) {
        var r = 1
        for (var i = 0; i < n; i++) {
            r = r * 10
        }
        return r * num
    }

---------------------------------------

    function countCharAtIndex(str1, ind, str2) {
        var r = 0
        var char = str1[ind]
        for (var i = 0; i < str2.length; i++) {
            if (char === str2[i]) {
                r++
            }

        }
        return r
    }
----------------------------------------

    function reverseString(str) {
        var r = ""
        for (var i = str.length - 1; i >= 0; i--) {
            r = r + str[i]
        }
        return r
    }

----------------------------------------

    function getIndexOf(string, char) {

        for (var i = 0; i < string.length; i++) {
            if (char === string[i]) {
                return i
            }
        }
    }

----------------------------------------

    function sumEven(n1, n2) {
        var r = 0
        for (var i = n1; i < n2; i++) {
            if (i % 2 === 0) {
                r = r + i
            }
        } return r
    }

----------------------------------------

    function isPrime(n) {
        var result = true
        if (n < 2) {
            return false
        }
        for (var i = 2; i < n; i++) {

            if (n % i === 0) {
                result = result && false
            }
        }
        return result
    } 

    function primeCounter(n) {
        var c=0
        for (var i=2;i<n;i++){
            if (isPrime(i)===true){
                c=c+1
            }
        }return c
     }
-------------------------------------------

function rockPaperScissors(str){
    for (var i=0;i<2;i++){
        if (str==="P"|| str==="R" || str==="S"){
            i=0
            return 'you entred '+str
        }
        return "please enter a valid character"
    }
}

