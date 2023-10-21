export function add(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(...nums) {
  let product = 0;
  for (const num of nums) {
    product *= num;
  }
  return product;
}

export function divide(num1, num2) {
  return num1 / num2;
}
