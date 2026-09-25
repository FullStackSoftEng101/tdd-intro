/**
 * @param {number} num1 - first number to add.
 * @param {number} num1 = Second number to add.
 * @returns {Number} the sum, unless the two values are the same
 *
 * @example
 * sumDouble(1,2); // 3
 * @example
 * sumDouble(2,2); //8
 * @example
 * sumDouble(5,5); //20
 *
 * *
 */
//export
function sumDouble(num1, num2) {
  /* TODO */
  // let result = 0;
  // result = num1 + num2;
  const result = num1 + num2;
  // if (num1 === num2) {
  //   return result * 2;
  // }
  // return result;
  return num1 === num2 ? result * 2 : result;
}
// console.log(sumDouble(1, 2));
// console.log(sumDouble(2, 2));
// console.log(sumDouble(5, 5));

/**
 * @param {number} num1 - First number.
 * @param {number} num2 - Seconf number.
 * @returns {boolean} Whether at least one of the numbers is 10
 * or their sum is 10
 *
 * @example
 * makes10(10,5); //true
 * @example
 * makes10(7,3); //true
 * @example
 * makes10(4,4); // false
 */
// export
function makes10(num1, num2) {
  // if (num1 === 10 || num2 === 10) {
  //   return true;
  // } else if (num1 + num2 === 10) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num2 === 10 || num2 === 10 || num1 + num2 === 10;
}
// console.log(makes10(10, 5));
// console.log(makes10(7, 3));
// console.log(makes10(4, 4));
// console.log(makes10(-5, 15));

/**
 * Hint: Math.abs(num) returns the absolute value of num.
 *
 * @param {number} n - the number to check
 * @param {number} distance - the allowed distance from 100.
 * @returns {boolean} true if n is whitin the distance of 100, otherwise false
 *
 * @example
 * near100(95-5); // true
 * @example
 * near100(90,5); // false
 * @example
 * near100(105, 10); // true
 *
 */
//export
function near100(n, distance) {
  // debugger;
  // let a = Math.abs(100 - n);
  // let b = a <= distance;
  // let c = a - distance;
  // if (Math.abs(100 - n) <= distance) {
  //   return true;
  // }
  // return false;
  return Math.abs(100 - n) <= distance;
}
// console.log(near100(95 - 5));
// console.log(near100(105, 10));
// console.log(near100(95, 5));
// console.log(near100(110, 10));
// console.log(near100(94, 5)); //false
// console.log(near100(111, 10)); // false
// console.log(near100(50, 10)); //false
// console.log(near100(200, 20)); //false

/**
 * Hint: use the remainder operator(%)
 *
 * @param {number} n - the number to check.
 * @returns {boolean} Where n is a multiple of 3 or 5.
 *
 * @example
 * isMultiple35(3); //true
 * @example
 * isMultiple35(10); //true
 * @example
 * isMultiple35(7); //false
 */
function isMultiple35(n) {
  // debugger;
  // let a = n % 3;
  // let b = n % 3 === 0;
  // let c = n / 3;
  // let d = n / 5;
  // let e = n % 5;
  // let f = n % 5 === 0;
  // if (n % 3 == 0 || n % 5 === 0) {
  //   return true;
  // }
  // return false;

  return n % 3 == 0 || n % 5 === 0;
}
// console.log("\n");
// // console.log(isMultiple35(3));
// // console.log(isMultiple35(9));
// // console.log(isMultiple35(5));
// console.log(isMultiple35(20));
// console.log(isMultiple35(7));
// console.log(isMultiple35(11));

/**
 *@param {number} num1 - First positive number.
 *@param {number} num2 - Second Positive number.
 *@returns {boolean} Whethere both number share the same last digit
 *
 *@example
 * shareLastDigit(27,7); //true
 * @example
 * shareLastDigit(123,43) // true
 * @example
 * shareLastDigit(10,21) //false
 */
function shareLastDigit(num1, num2) {
  // debugger;
  // let a = num1 % num2;
  // let b = num1 / num2;
  // let c = num2 / num1;
  // let d = num1 % 10;
  // let e = num2 % 10;
  // let f = num1 % 10 === num2 % 10;
  return num1 % num2 === 0 || num1 % 2 === num2 % 2;
}

// console.log(shareLastDigit(7, 7)); //true
// console.log(shareLastDigit(27, 7)); //true
// console.log(shareLastDigit(123, 43)); //true
// console.log(shareLastDigit(10, 21)); // false
// console.log(shareLastDigit(9, 20)); //false

/**
 * @param {number} temp1 - first temperature.
 * @param {number} temp2 - second temperature.
 * @returns {boolean} true if one temperature is leass lan 0 and
 * the other is greater than 100
 *
 * @example
 * isColdAndHot(-5, 120); // true
 * @example
 * isColdAndHot(150, -1); // true
 * @example
 * isColdAndHot(10, 50); // false
 */
function isColdAndHot(temp1, temp2) {
  // debugger;
  // let a = temp1 < 0;
  // let b = temp2 > 100;
  // let c = temp1 > 100;
  // let d = temp2 < 0;
  let e = temp1 < 0 && temp2 > 100;
  let f = temp1 > 100 && temp2 < 0;
  return e || f;
}

// console.log(isColdAndHot(-5, 120)); //true
// console.log(isColdAndHot(150, -1)); //true
// console.log(isColdAndHot(10, 50)); //false
// console.log(isColdAndHot(0, 100)); //false
// console.log(isColdAndHot(-5, -10)); //false
// console.log(isColdAndHot(-1, -100)); //false
// console.log(isColdAndHot(150, 200)); //false
// console.log(isColdAndHot(101, 150)); //false
// console.log(isColdAndHot(0, 101)); //false
// console.log(isColdAndHot(-1, 100)); //false

/**
 * @param {string} A - first string.
 * @param {string} B -  second strinh.
 * @returns {string} A new string with the from ABBA
 *
 * @example
 * makeABBA("Hi", "Bye"); // "HiByeByeHi"
 * @example
 * makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
 * @example
 * makeABBA("a", "b"); // "abba"
 */
function makeABBA(A, B) {
  // debugger;
  // let a = A;
  // let b = B;
  let c = A + B + B + A;
  return c;
}

// console.log(makeABBA("Hi", "Bye")); //HiByeByeHi
// console.log(makeABBA("Yo", "Alice")); //YoAliceAliceYo
// console.log(makeABBA("a", "b")); //abba
// console.log(makeABBA("", "X")); //XX
// console.log(makeABBA("X", "")); //XX
// console.log(makeABBA("", "")); //""
// console.log(makeABBA("Hi ", "There")); //Hi ThereThereHi
// console.log(makeABBA("!", "?")); //!??!

/**
 * Returns a string of the form short+long+short, with the shorter string
 * on the outside and the longer string on the inside.
 *
 * You may assume that the strings will have different lengths.
 *
 * @param {string} str1 - First string.
 * @param {string} str2 - Second string.
 * @returns {string} The combined short-long-short string.
 *
 * @example
 * makeSLS("Hi", "Hello"); // "HiHelloHi"
 * @example
 * makeSLS("Puppy", "Dog"); // "DogPuppyDog"
 * @example
 * makeSLS("a", "abc"); // "aabca"
 */
function makeSLS(str1, str2) {
  /* TODO */
  // debugger;
  let a = str1.length;
  let b = str2.length;
  let c = a <= b;
  let d = (a) => b;
  let e = str1 + str2 + str1;
  let f = str2 + str1 + str2;
  // if (c) {
  //   return e;
  // }
  // return f;
  return c ? e : f;
}
// console.log(makeSLS("Hi", "Hello")); //
// console.log(makeSLS("a", "abc")); //
// console.log(makeSLS("Puppy", "Dog")); //
// console.log(makeSLS("Hello", "Yo")); //
// console.log(makeSLS("Hi", "")); //
// console.log(makeSLS("", "Hi")); //
// console.log(makeSLS(" ", "abc")); //
// console.log(makeSLS("cat", " ")); //

/**
 * You and your date are trying to get into an exclusive club.
 * If either of you is very stylish (8 or more), the result is 2 (yes).
 * With the exception that if either of you has style 2 or less, the result is 0 (no).
 * Otherwise, the result is 1 (maybe).
 *
 * @param {number} you - Your style rating from 0 to 10.
 * @param {number} date - Your date's style rating from 0 to 10.
 * @returns {number} 0 for no, 1 for maybe, 2 for yes.
 *
 * @example
 * canEnterClub(9, 5); // 2
 * @example
 * canEnterClub(1, 10); // 0
 * @example
 * canEnterClub(5, 5); // 1
 */
function canEnterClub(you, date) {
  /* TODO */
  // debugger;
  let a = you;
  let b = date;
  let c = a >= 8;
  let d = b >= 8;
  let e = a <= 2;
  let f = b <= 2;
  let g = e || f;
  let h = c || d;
  if (g) {
    return 0;
  } else if (h) {
    return 2;
  }
  return 1;
}
// console.log(canEnterClub(9, 5)); //2
// console.log(canEnterClub(5, 8)); //2
// console.log(canEnterClub(1, 5)); //0
// console.log(canEnterClub(0, 9)); //0
// console.log(canEnterClub(5, 2)); //0
// console.log(canEnterClub(8, 1)); //0
// console.log(canEnterClub(5, 5)); //1
// console.log(canEnterClub(3, 7)); //1
// console.log(canEnterClub(2, 8)); //0
// console.log(canEnterClub(8, 2)); //0
// console.log(canEnterClub(8, 3)); //2
// console.log(canEnterClub(3, 8)); //2

/**
 * Your phone rings. Normally you answer, except:
 * - In the morning, you only answer if it is your boss calling.
 * - If you are asleep, you do not answer at all.
 *
 * @param {boolean} isMorning - True if it is morning.
 * @param {boolean} isBoss - True if the caller is your boss.
 * @param {boolean} isAsleep - True if you are asleep.
 * @returns {boolean} True if you should answer the phone, otherwise false.
 *
 * @example
 * shouldAnswerPhone(false, false, false); // true
 * @example
 * shouldAnswerPhone(true, false, false); // false
 * @example
 * shouldAnswerPhone(true, true, false); // true
 */
function shouldAnswerPhone(isMorning, isBoss, isAsleep) {
  /* TODO */
  /*- In the morning, you only answer if it is your boss calling.
 /* - If you are asleep, you do not answer at all.
*/
  debugger;
  let a = isMorning;
  let b = isBoss;
  let c = isAsleep;
  let d = a && b && !c;
  let e = (a && b) || !c;
  // return (a && b && !c) || (a && b) || !c;
  return !isAsleep && (!isMorning || isBoss);
  // if (isAsleep) {
  //   return false;
  // } else if (isMorning) {
  //   if (isBoss) {
  //     return true;
  //   }
  //   return false;
  // } else if (!isMorning) {
  //   return true;
  // } else {
  //   return false;
  // }
}
console.log(shouldAnswerPhone(false, false, false)); //true
console.log(shouldAnswerPhone(false, true, false)); //true
console.log(shouldAnswerPhone(true, true, false)); //true
console.log(shouldAnswerPhone(true, false, false)); //false
console.log(shouldAnswerPhone(false, false, true)); //false
console.log(shouldAnswerPhone(false, true, true)); //false
console.log(shouldAnswerPhone(true, true, true)); //false
console.log(shouldAnswerPhone(true, false, true)); //false
console.log("\n");
console.log(); //

export {
  sumDouble,
  makes10,
  near100,
  isMultiple35,
  shareLastDigit,
  isColdAndHot,
  makeABBA,
  makeSLS,
  canEnterClub,
  shouldAnswerPhone,
};
