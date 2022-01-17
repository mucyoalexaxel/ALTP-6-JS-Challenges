
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
            return alert(primeArray.filter(i => isPrime(i)));
        }
        filterPrimeArray([10,2,5,11,19,20,30,1]);
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