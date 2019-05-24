function convertToRoman(num) {
    //storing romans
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    //storing decimals
    let decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    let result = '';
    //Converting
    while(num>=4000) {
     result += roman[roman.length-1];
     num -= 1000;
    }
    for(let i =decimal.length-1; num > 0; i -- ) {
      while(num >= decimal[i]) {
        result += roman[i];
        num -= decimal[i];
      }
    }
   return result;
  }
  convertToRoman(36);