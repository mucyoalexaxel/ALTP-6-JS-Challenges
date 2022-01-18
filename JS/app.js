
// Basic Challenge

// Prime Numbers Challenge

var primeChallenge = document.getElementById("primeNumberChallenge");
primeChallenge.addEventListener('click',checkPrime);

function checkPrime(){
        function isPrime(num){
            if (num === 0 || num === 1) return false;
            else if (num === 2) return true;
            else {
                for(let i = 2; i < num; i++){
                    if(num % i === 0) return false;
                }
            }
            return true;
        }
        function filterPrimeArray(primeArray){
            return alert("The Prime Numbers Are: "+ primeArray.filter(i => isPrime(i)));
        }
        let newArr = [];
        for( let n = 0; n < 5; n++){
            const inputArr = parseInt(prompt("Enter 5 Numbers: "), 10);
            newArr.push(inputArr);
        }
        filterPrimeArray(newArr);
}



// Palidrome Challenge

var paliChallenge = document.getElementById("palindromeChallenge");
paliChallenge.addEventListener('click',palidromeChecking);
function palidromeChecking(){
    function checkPalindrome(word) {

        const wordLength = string.length;
    
        // looping through half of the string to check if first and last string are same
        for (let i = 0; i < wordLength / 2; i++) {
            if (string[i] !== string[wordLength - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    // Input
    const string = prompt('Enter a Word: ');
    const value = checkPalindrome(string);
    alert(value);
}


// Array & Objects Challenge

// Prime Number Challenge
var primeChallenge1 = document.getElementById("primeNumberChallenge1");
primeChallenge1.addEventListener('click',checkPrime);

function checkPrime(){
        function isPrime(num){
            if (num === 0 || num === 1) return false;
            else if (num === 2) return true;
            else {
                for(let i = 2; i < num; i++){
                    if(num % i === 0) return false;
                }
            }
            return true;
        }
        function filterPrimeArray(primeArray){
            return alert("The Prime Numbers Are: "+ primeArray.filter(i => isPrime(i)));
        }
        let newArr = [];
        for( let n = 0; n < 9; n++){
            const inputArr = parseInt(prompt("Enter 10 Numbers: "), 10);
            newArr.push(inputArr);
        }
        filterPrimeArray(newArr);
}

// Array Reversing Challenge
var arrayReversing = document.getElementById("arrayReversingChallenge");
arrayReversing.addEventListener('click',reverseArray);

function reverseArray(){
    let newArr = [];
    for(let i = 0; i < 5; i++){
        const a = parseInt(prompt("Enter A Numbers: "), 10);
        newArr.push(a);
    }
       alert("The Entered Numbers Are: "+ newArr +"\r\n"+ "The Reversed Array Is: " + newArr.reverse());
}

// Inplace Array Reversing Challenge
var inplaceArrayReversing = document.getElementById("inPlaceArrayReversingChallenge");
inplaceArrayReversing.addEventListener('click',inplaceReverseArray);

function inplaceReverseArray(){
       alert("I am The Inplace Array Reversing Challenge");
}