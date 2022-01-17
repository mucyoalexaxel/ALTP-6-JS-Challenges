
// Basic Challenge

// Palidrome Challenge

var a = document.getElementById("palindromeChallenge");
a.addEventListener('click',palidromeChecking);
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