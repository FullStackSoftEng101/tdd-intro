/**
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @returns {number} The sum, unless the two values are the same,
 * then returns double their sum.
 *
 * @example
 * sumDouble(1, 2); // 3
 * @example
 * sumDouble(2, 2); // 8
 * @example
 * sumDouble(5, 5); // 20
 */
export function sumDouble(num1, num2) {
  /* TODO */
  const sum = num1 + num2;
  if (num1 === num2) {
    return sum * 2;
  } else {
    return sum;
  }
}
console.log(sumDouble(1, 2));
console.log(sumDouble(2, 2));
console.log(sumDouble(-4, -6));

/**
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {boolean} Whether at least one of the numbers is 10
 * or their sum is 10
 *
 * @example
 * makes10(10, 5); // true
 * @example
 * makes10(7, 3); // true
 * @example
 * makes10(4, 4); // false
 */
export function makes10(num1, num2) {
  /* TODO */
  return num1 === 10 || num2 === 10 || num1 + num2 === 10;
}
console.log(makes10(10, 0));
console.log(makes10(0, 10));

/**
 * Hint: Math.abs(num) returns the absolute value of num.
 *
 * @param {number} n - The number to check.
 * @param {number} distance - The allowed distance from 100.
 * @returns {boolean} True if n is within the distance of 100, otherwise false.
 *
 * @example
 * near100(95, 5); // true
 * @example
 * near100(90, 5); // false
 * @example
 * near100(105, 10); // true
 */
export function near100(n, distance) {
  /* TODO */
  // return n >= 95 && n <= 110;
  //console.log(100 - n);
  //return Math.abs(100 - n) <= distance;
  if (n <= 100) {
    return 100 - n <= distance;
  }
  return Math.abs(100 - n) <= distance;
}

console.log(near100(95, 10));
console.log(near100(111, 10));

//or

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} n - The number to check.
 * @returns {boolean} Whether n is a multiple of 3 or 5.
 *
 * @example
 * isMultiple35(3); // true
 * @example
 * isMultiple35(10); // true
 * @example
 * isMultiple35(7); // false
 */
export function isMultiple35(n) {
  /* TODO */
  return n % 3 === 0 || n % 5 === 0;
}
console.log(isMultiple35(3));
console.log(isMultiple35(9));

/**
 * Hint: use the remainder operator (%)
 *
 * @param {number} num1 - First positive number.
 * @param {number} num2 - Second positive number.
 * @returns {boolean} Whether both numbers share the same last digit
 *
 * @example
 * shareLastDigit(27, 7); // true
 * @example
 * shareLastDigit(123, 43); // true
 * @example
 * shareLastDigit(10, 21); // false
 */
export function shareLastDigit(num1, num2) {
  /* TODO */
  return num1 % 10 === num2 % 10;
}

/**
 * @param {number} temp1 - First temperature.
 * @param {number} temp2 - Second temperature.
 * @returns {boolean} True if one temperature is less than 0 and
 * the other is greater than 100
 *
 * @example
 * isColdAndHot(-5, 120); // true
 * @example
 * isColdAndHot(150, -1); // true
 * @example
 * isColdAndHot(10, 50); // false
 */
export function isColdAndHot(temp1, temp2) {
  /* TODO */
  return (temp1 > 100 && temp2 < 0) || (temp1 < 0 && temp2 > 100);
}

/**
 * @param {string} A - First string.
 * @param {string} B - Second string.
 * @returns {string} A new string with the form ABBA
 *
 * @example
 * makeABBA("Hi", "Bye"); // "HiByeByeHi"
 * @example
 * makeABBA("Yo", "Alice"); // "YoAliceAliceYo"
 * @example
 * makeABBA("a", "b"); // "abba"
 */
export function makeABBA(A, B) {
  /* TODO */
  return A + B + B + A;
}
console.log(makeABBA("Hi", "Bye"));
console.log(makeABBA("Yo", "Alice"));

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
export function makeSLS(str1, str2) {
  /* TODO */
  const strShorter = str1.length <= str2.length;
  if (strShorter) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

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
export function canEnterClub(you, date) {
  /* TODO */
  if (you <= 2 || date <= 2) {
    return 0;
  } else if (you >= 8 || date >= 8) {
    return 2;
  } else {
    return 1;
  }
}
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
  let d = a || (b && !c);
  let e = (a && b) || !c;

  if (isAsleep) {
    return false;
  }
  else if (!isAsleep) {
    return true;
  }
  if (isMorning){
    if (isBoss){
    return true;
  }
  else if (!isBoss){
    return false;
  }
    return false;
  }
  else if (!isMorning){
    return true;
  }
  

/*
if (isAsleep) return false;
if isMorning return usBossl
retur true;
*/
// if (isAsleep) {
//   return false;
// } else if (isMorning) {
//   if (isBoss) {
//     return true;
//   }
//   return false;
// } else {
//   return true;
// }

// return !isAsleep & (!isMorning || isBoss);
