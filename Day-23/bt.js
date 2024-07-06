// bài 1

// không dùng phương thức
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var newArr = [];
for (var a of arrA) {
  if (arrB.includes(a)) {
    newArr.push(a);
  }
}
console.log("bài 1: ", newArr);

// dùng phương thức reduce
// var b = arrB.reduce(function (prev, current) {
//   if (arrA.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(b);

// bài 2
/*
  đệ quy:
  viết hàm nhận vao 1 tham só
  check tham số nếu là mảng thì lặp mảng với 
  đối số là từng phần tử trong mảng lặp , còn không phải mảng (thì là số)
  thì push vào mảng mới
*/
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flattenArray(array) {
  return array.reduce((prev, current) => {
    return prev.concat(
      Array.isArray(current) ? flattenArray(current) : current
    );
  }, []);
}

var newArr = flattenArray(arr);
console.log("Bài 2: ", newArr);

// bai 3 [["a", "b"], [1, 2], [true, false]]

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var arrString = [];
var arrNumber = [];
var arrBoolean = [];
var newArr = [];
arr.filter(function (value, index) {
  value.forEach(function (value1) {
    if (typeof value1 === "string") {
      arrString.push(value1);
    }
    if (typeof value1 === "number") {
      arrNumber.push(value1);
    }
    if (typeof value1 === "boolean") {
      arrBoolean.push(value1);
    }
  });
});

newArr.push(arrString, arrNumber, arrBoolean);
console.log("bài 3:", newArr);

// không dùng hàm
var flat = arr.flat();
var arrString = [];
var arrNumber = [];
var arrBoolean = [];
var newArr = [];
for (var value of flat) {
  if (typeof value === "string") {
    arrString.push(value);
  }
  if (typeof value === "number") {
    arrNumber.push(value);
  }
  if (typeof value === "boolean") {
    arrBoolean.push(value);
  }
}
newArr.push(arrString, arrBoolean, arrNumber);
