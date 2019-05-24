function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().replace(/[\W_]/g, '');
    // console.log(str);
    let strArr = str.split('');
    // console.log(strArr);
    let result = palindromeChecker(strArr);
    console.log(result);
    return result;
  }
  
  function palindromeChecker(arr) {
    let len = arr.length;
    // console.log(len);
    if (len % 2 === 0) {
      // console.log('Even loop started')
      for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
  
          return false;
        } 
        }
      }
     else {
      // console.log('Odd Loop started');
      for (let i = 0; i < Math.floor(len / 2); i++) {
        if (arr[i] !== arr[len - 1 - i]) {
          return false;
        } 
      }
  
    }
   return true;
  }
  
  
  
palindrome("almostomla");
palindrome("A man, a plan, a canal. Panama")
palindrome("nope");
palindrome("1 eye for of 1 eye.")