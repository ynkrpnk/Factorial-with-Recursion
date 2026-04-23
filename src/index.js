"use strict";

function factorial(num) {
  if (typeof num !== "number" || Number.isNaN(num) || num < 0) {
    return null;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(6));
