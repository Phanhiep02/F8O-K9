// bài 1

var a = [47, , 53, 44, 55, 45];
var max = a[0];
var min = a[0];
var maxIndex = 0;
var minIndex = 0;
for (var i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
    maxIndex = i - 1;
  }
  if (min > a[i]) {
    min = a[i];
    minIndex = i - 1;
  }
}
console.log(
  ` bai 1 maxIndex : ${maxIndex} max : ${max} minIndex: ${minIndex} min: ${min}`
);

// bai 2
function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function averageOfPrimes(arr) {
  var primeNumbers = arr.filter(isPrime);
  //   console.log(primeNumbers);
  if (primeNumbers.length === 0) {
    console.log("Không có số nguyên tố");
    return;
  }

  var sum = primeNumbers.reduce((prev, current) => prev + current, 0);

  console.log(
    `bài 2: Trung bình các số nguyên tố trong mảng: ${
      sum / primeNumbers.length
    }`
  );
}

var numbers = [10, 7, 15, 23, 4, 19];
averageOfPrimes(numbers);

// bai 3
var users = [1, 2, 3, 4, 1, 4, 5];
var result = users.reduce(function (prev, current) {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);
console.log("bài 3 :", result);

// bai 4
function isPrime(n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function sortNumber(arr) {
  var primeNumbers = arr.filter(isPrime);
  var sort = primeNumbers.sort(function (a, b) {
    return a - b;
  });
  console.log("bài 4", sort);
  if (primeNumbers.length === 0) {
    console.log("Không có số nguyên tố");
    return;
  }
}

var numbers = [10, 7, 15, 23, 4, 19, 3, 6];
sortNumber(numbers);

var a = [1, 2, 3, 4];
var b = [2, 7, 9, 1];
