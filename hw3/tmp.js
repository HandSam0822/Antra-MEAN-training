// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;

// Expected Output: 34223 
function reverseNumber(num) {
    ret = 0;
    while (num > 0) {
        ret = ret * 10 + num % 10
        num = Math.floor(num / 10);
    };

    return ret
}


console.log(reverseNumber(32243) == 34223)


// # 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// # A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// # madam or nurses run.

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r]) {
            return l == r;
        }
        l += 1;
        r -= 1;
    };
    return true
}
console.log(isPalindrome("madam") == true)
console.log(isPalindrome("nurses") == false)

// # 3. Write a JavaScript function that generates all combinations of a string. 
// # Example string: 'dog' 
// # Expected Output: d, do, dog, o, og, g 
function generateCombinations(str) {
    const results = [];
  
    function combination(str, prefix) {
      for (let i = 0; i < str.length; i++) {
        results.push(prefix + str[i]);
        combination(str.slice(i + 1), prefix + str[i]);
      }
    }
  
    combination(str, "");
    return results;
  }

  console.log(generateCombinations("dog"))


// # 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// # Example string: 'webmaster' 
// # Expected Output: 'abeemrstw'
// # Assume punctuation and numbers symbols are not included in the passed string.

function alphabeticalOrder(str) {
    // Create an empty array to hold the individual characters in the string
    const chars = [];
  
    // Loop through the string and push each character into the array
    for (let i = 0; i < str.length; i++) {
      chars.push(str[i]);
    }
  
    // Sort the array of characters in alphabetical order
    chars.sort();
  
    // Join the array of characters back into a string and return it
    return chars.join('');
  }

  const sortedString = alphabeticalOrder('webmaster');
  console.log(sortedString === "abeemrstw"); 



// # 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// # each word of the string in upper case. 
// # Example string: 'the quick brown fox' 
// # Expected Output: 'The Quick Brown Fox '


function x(s) {
    x = s.split(" ")
    res = []
    x.forEach(str => {
        res.push(str[0].toUpperCase() + str.substring(1));
    });
    return res.join(" ");
}
console.log(x("the quick brown fox") === "The Quick Brown Fox")

// # 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// # within the string. 
// # Example string: 'Web Development Tutorial' 
// # Expected Output: 'Development'

function longestWord(str) {
    x = str.split(" ")
    let maxLen = 0;
    let maxLenIdx = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].length > maxLen) {
            maxLen = x[i].length;
            maxLenIdx = i;
        }
    }
    return x[maxLenIdx];
}
console.log(longestWord("Web Development Tutorial") === "Development")

// # 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// # vowels within the string. 
// # Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// # vowel here. 
// # Example string: 'The quick brown fox' 
// # Expected Output: 5
function numOfVowels(str) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelSet.has(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(numOfVowels("The quick brown fox") === 5)