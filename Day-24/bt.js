// // bai 1
var n = 13;
// check nguyen to
function isPrime(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

// check doi xung
function isPalindrome(num) {
  var str = num.toString();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// ham
function findNextPalindromicPrime(n) {
  var num = n;
  while (true) {
    if (isPrime(num) && isPalindrome(num)) {
      return num;
    }
    num++;
  }
}

console.log("Bài 1:", findNextPalindromicPrime(n));

// // bai 2
var nums1 = [1, 3];
var nums2 = [2];
function findMedianSortedArrays(nums1, nums2) {
  var mergedArray = mergeArrays(nums1, nums2);
  var len = mergedArray.length;

  if (len % 2 === 0) {
    return (
      (mergedArray[Math.floor((len - 1) / 2)] +
        mergedArray[Math.floor(len / 2)]) /
      2
    );
  } else {
    return mergedArray[Math.floor(len / 2)];
  }
}

function mergeArrays(arr1, arr2) {
  var merged = [];
  var i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Thêm các phần tử còn lại của arr1 (nếu có)
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log("bài 2:", findMedianSortedArrays(nums1, nums2));

// // bai 3

var nums = [1, 2, 0];
function firstMissingPositive(nums) {
  var positiveNums = nums.filter(function (num) {
    return num > 0;
  });

  positiveNums.sort(function (a, b) {
    return a - b;
  });

  var smallestMissing = 1;
  for (var i = 0; i < positiveNums.length; i++) {
    if (positiveNums[i] === smallestMissing) {
      smallestMissing++;
    }
  }

  return smallestMissing;
}

console.log("bài 3:", firstMissingPositive(nums));
