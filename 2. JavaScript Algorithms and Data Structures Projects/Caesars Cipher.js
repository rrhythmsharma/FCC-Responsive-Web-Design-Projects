function rot13(str) {
    // LBH QVQ VG!
    let newArr = str.split("");
    console.log(newArr);
  
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].charCodeAt(0) > 64 && newArr[i].charCodeAt(0) < 78) {
        newArr[i] = String.fromCharCode(newArr[i].charCodeAt(0) + 13);
      } else if (newArr[i].charCodeAt(0) > 77 && newArr[i].charCodeAt(0) < 91) {
        newArr[i] = String.fromCharCode(newArr[i].charCodeAt(0) - 13);
      }
    }
    console.log(newArr);
    let res = newArr.join("");
    console.log(res);
    return res;
  }
  
  rot13("SERR CVMMN!"); // returns  FREE PIZZA!