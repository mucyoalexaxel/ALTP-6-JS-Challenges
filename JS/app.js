
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
    let newArr = []
    let arr = []
    const reverse = (arr) => {
        for(let i = arr.length-1; i >=0 ; i--){
            newArr.push(arr[i])
        }
        return newArr
    };
    for(let n = 0; n < 10; n++){
        const arrInput = parseInt(prompt("Enter 10 Numbers: "), 10)
        arr.push(arrInput)
    }
       alert("The Reversed Array Is: " +"\r\n" +reverse(arr))
}

// Formatted Array Challenge
var formattedArray = document.getElementById("formattedArrayChallenge");
formattedArray.addEventListener('click',formatArray);

function formatArray(){

    const arr = ["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]
    let list = [];
    let person ={};
    let testObj = arr =>{
    for(let i = 0; i < arr.length; i++) {
            list.push(arr[i].split(","));
            person[list[i][0].split(" ").slice(0,1)] = {
            secondName: list[i][0].split(" ").slice(1).join(),
            age: list[i][1]
        }
    }
    return person;
}
    alert("Inspect & Check The Console To See The Result")
    console.log(testObj(arr));

}


// Sorting Challenges

// Custom Sorting Challenge
var customSorting = document.getElementById("customSortingChallenge")
customSorting.addEventListener('click',customSort)

function customSort(){
    // Array Input
        let input = [];
        for(let n = 0; n<10; n++){
            const a = parseInt(prompt("Enter 10 Numbers: "), 10)
            input.push(a)
        }    
        // Sorting Array 
        const sortMe = (array)  => {
            let doneSorting = false;
            while (!doneSorting) {
            doneSorting = true;
            for (let i = 1; i < array.length; i++){
                if (array[i - 1] < array[i]) {
                doneSorting = false;
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                }
            }
            }
        
            return array;
        };
        // Check Prime After Sorting
        alert(sortMe(input));
}